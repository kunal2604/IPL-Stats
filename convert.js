var csvToJson = require('convert-csv-to-json');

// Function to convert a csv file to json file
function convertToJson(inputFile, outputFile){
	csvToJson.generateJsonFileFromCsv(inputFile, outputFile); 
}


// Calling the above function to convert these two files into json files
convertToJson('CSV-files/deliveries.csv', 'JSON-files/deliveries.json');
convertToJson('CSV-files/matches.csv', 'JSON-files/matches.json');


