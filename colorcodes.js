import randomItem from 'random-item';

let fs = require('fs');
// let randArray = require('random-item');

let colorCodeFile = "./color_palette.json";
let colorCodes = fs.readFileSync(colorCodeFile, 'UTF-8');
console.log(colorCodes.length);

random5ColorCodes = randomItem.multiple(colorCodes, 5);
console.log(random5ColorCodes);

fs.writeFile("randomColorCodes.json", JSON.stringify(random5ColorCodes), (err, file)=> {
    if(err) return err;
});
// console.log(colorCodes.length);
