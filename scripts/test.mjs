import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const htmlparser2 = require('htmlparser2');
import * as cheerio from 'cheerio';

async function getRefDOM() {
    let data = 'No healthy upstream';
    do{
    const response = await fetch('https://www.wix.com/velo/reference')
    data = await response.text();
    } while(data.includes('No healthy upstream'));
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
    console.log(viewerJSON.menuConfig)
    return viewerJSON.menuConfig;
}

getRefDOM().then(data => getMenuConfig(data))