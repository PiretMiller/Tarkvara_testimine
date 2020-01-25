const fs = require('fs');

const cat1 = fs.readFileSync('cat.txt', 'utf8'); // sync tähendab, et ei lõpeta enne, kui on faili tagastanud

console.log('cat1', cat1);

function readFileCallback(err, data) {
    if(err) throw err;
    console.log('cat2', data);
}

readFileCallback(null, 'no cat here...');

//fs.readFile('cat.txt', 'utf8', (err, data) => {
//    if(err) throw err;
//    console.log('cat2', data);
//});

fs.readFile('cat.txt', 'utf8', readFileCallback);

console.log('done');
