import fs from 'fs'; 
const data = JSON.parse(fs.readFileSync('sources/arrays.json', 'utf8'));


function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); 
        } else {
            result.push(item);
        }
    }

    return result;
}

const flattenedResult = flattenArray(data); 
console.log(flattenedResult);
