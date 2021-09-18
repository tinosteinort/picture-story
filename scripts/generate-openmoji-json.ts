// https://github.com/hfg-gmuend/openmoji/blob/master/API.md

const openmoji = require('openmoji');
const fs = require('fs');

interface OpenMoji {
    hexcode: string,
    name: string,
    path: string
}

const openMojis: OpenMoji[] = [];

openmoji.openmojis.forEach((element: any) => {
    openMojis.push({
        hexcode: element.hexcode,
        name: element.annotation,
        path: `assets/openmoji-72x72-color/${element.hexcode}.png`
    } as OpenMoji);
});

const formatOutput = false;
const indent: any = formatOutput ? 2 : null;

const filename = 'src/assets/all-openmojis.json';
fs.writeFile(filename, JSON.stringify(openMojis, null, indent) + '\n', 'utf8', (err: any) => {
    if (err) {
        console.log("Could not write file");
        return console.log(err);
    }
    console.log(`${filename} written`);
});
