const fs = require('fs');
const process = require('process');

function cat (path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
        } else {
            console.log(data);
        }
    });
}

cat(process.argv[2]);