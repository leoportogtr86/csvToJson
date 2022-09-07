const csvPath = 'src/data/dados.csv';
const csv = require('csvtojson');

csv()
    .fromFile(csvPath)
    .then((json) => {
        console.log(json);
    })