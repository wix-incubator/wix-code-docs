import { getAllFilesSync } from 'get-all-files'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import fs from 'fs';

// Import module, submodules, and functions that are hidden in the menu editor.
let hiddenItems;
try{
const itemText = fs.readFileSync('./scripts/hiddenItems.txt', 'utf8');
hiddenItems = JSON.parse(itemText);
} catch (error){
    console.log(error)
}

function findDevPreviewFunctions() {
    let modules = {};
    for (const file of getAllFilesSync('../')) {
        if (file.endsWith('.service.json')) {
            // Grab file data
            let jsonData = require(`../${file}`);
            // Check if the module or submodule is hidden in the menu editor.
            // Query builders are not included in the menu editor editor, but they do have service.json files.
            // In the files they are listed as members of hidden submodules. So we check for them as well. 
            const longSubmoduleName = `${jsonData.memberOf}.${jsonData.name.toLowerCase()}`;
            if(hiddenItems.modules.includes(jsonData.memberOf) || hiddenItems.submodules.includes(jsonData.memberOf? jsonData.memberOf.toLowerCase() : '')  || hiddenItems.submodules.includes(longSubmoduleName)){continue;}
            // Process functions
            const previewFunctions = []
            for(const operation of jsonData.operations) {
                // Check if the function is hidden in the menu editor
                const longFunctionName = `${jsonData.memberOf}.${jsonData.name.toLowerCase()}.${operation.name.toLowerCase()}`;
                if(hiddenItems.functions.includes(longFunctionName)){continue;}
                if (operation.hasOwnProperty('customLabels') && operation['customLabels'].some(e => e.id === 'maturity-beta')) {
                    previewFunctions.push(operation.name);
                }
            };
            if (previewFunctions.length > 0) {
               const moduleName = jsonData.memberOf.split('.')[0];
               if (!modules.hasOwnProperty(moduleName)) {
                   modules[moduleName] = {};
               }
               modules[moduleName][jsonData.name] = {
                functions : previewFunctions,
                memberOf : jsonData.memberOf.split('.').slice(1)
               }
            }
        }
    };
    return modules;
}

function generateMDTable(data) {
    let table = '| Module | Submodule | Function |\n|---|---|---|';
    for(const module in data){
        for(const submodule in data[module]){
            let formattedFunctions = '';
            for(const func of data[module][submodule].functions){
                const submodulePath = data[module][submodule].memberOf.length > 0 ? data[module][submodule].memberOf.join('/').toLowerCase() + '/' : '';
                formattedFunctions += `[${func}](/${module}/${submodulePath}${submodule.toLowerCase()}/${func.toLowerCase()})<br>`;
            }
            // Change v-2 to v.2 for module names.
            table += `\n| ${module.replace(/(\S+)-(v[1-9])/gm, "$1.$2")} | ${submodule} | ${formattedFunctions} |`;
        }
    }
    return table;
}

function appendTableToArticle(table) {
    const article = fs.readFileSync('./guides/developer-preview.md', 'utf8');
    const tableStart = article.indexOf('<!-- START TABLE -->');
    const tableEnd = article.indexOf('<!-- END TABLE -->');
    const newArticle = article.slice(0, tableStart) +'<!-- START TABLE -->\n' + table + '\n' + article.slice(tableEnd);
    fs.writeFileSync('./guides/developer-preview.md', newArticle);
}

let result = findDevPreviewFunctions();
let table = generateMDTable(result);
appendTableToArticle(table);
