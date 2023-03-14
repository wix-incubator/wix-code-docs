/*
* This code in this file grabs the current settings in the Velo menu editor an
* returns a the modules, submodules, properties, and functions that are hidden.
* The menu editor is here: https://bo.wix.com/wix-docs-backstage/projects/563b9c1e-c9c7-4276-a9d4-31c3536a0752/sites/2cf3ab73-dbcb-425c-bd3f-682b4f80c135/menu-editor
*/

import fetch from 'node-fetch';
import fs from 'fs';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const htmlparser2 = require('htmlparser2');
import * as cheerio from 'cheerio';

getHiddenItems();

export async function getHiddenItems() {
    const menuConfig = await getMenuData();
    const hiddenItems = findHiddenItems(menuConfig);
    console.log(hiddenItems)
    fs.writeFileSync('./scripts/hiddenItems.json', JSON.stringify(hiddenItems));
}

async function getMenuData() {
    /* Old code - doesn't work on GH runner
    const response = await fetch('https://bo.wix.com/_api/wix-docs-backoffice/v1/projects/563b9c1e-c9c7-4276-a9d4-31c3536a0752/viewers/2cf3ab73-dbcb-425c-bd3f-682b4f80c135');
    const data = await response.json();
    return data.viewer.menuConfig.categories;
    */
    const dom = await getRefDOM();
    const menuConfig = getMenuConfig(dom);
    return menuConfig.categories;
}

function findHiddenItems(menuConfig) {
    let hiddenItems = {
        modules: [],
        submodules: [],
        properties: [],
        functions: []
    }
    for (const module of menuConfig) {
        if (module.visible === false) {
            hiddenItems.modules.push(module.path);
        }
        for (const subItem of module.members) {
            if (subItem.visible === false) {
                if (subItem.type === 'SECTION') {
                    hiddenItems.submodules.push(subItem.path);
                } else if (subItem.type === 'PROPERTY') {
                    hiddenItems.properties.push(subItem.path);
                } else if (subItem.type === 'OPERATION') {
                    hiddenItems.functions.push(subItem.path);
                }
            }
        }
    }
    return hiddenItems;
}

async function getRefDOM() {
    const response = await fetch('https://www.wix.com/velo/reference')
    data = await response.text();
    const dom = htmlparser2.parseDocument(data);
    return dom;
}

function getMenuConfig(dom) {
    const $ = cheerio.load(dom);
    const scriptContent = $("script:contains('menuConfig')").html();
    const scriptLines = scriptContent.split('\n');
    let viewerJSON;
    for (const line of scriptLines) {
        line.trim();
        if(line.includes('window.__VIEWER__')){
            viewerJSON = JSON.parse(line.split('window.__VIEWER__ = ')[1].replace(';',''));
            break;
        }
    }
    return viewerJSON.menuConfig;
}
