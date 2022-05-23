let fs = require('fs')


// Calling the readFileSync() method to read file
const data = fs.readFileSync('../moduloDaMesa/calculadora.js',
            {encoding:'utf8', flag:'r'});

let calculadora = data.toString();
