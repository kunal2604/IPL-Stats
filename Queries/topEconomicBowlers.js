   /*
function topEconomicBowlers(){
 
    var matches = require('../JSON-files/matches.json');
    var deliveries = require('../JSON-files/deliveries.json');

    // Store matches in the year 2016 in a seperate object:
    var year = 2015;
    var matchesInYear = [];
    for(var i=0; i<matches.length; i++){
        if(matches[i]["season"] === year){
            matchesInYear.push(matches[i]);
        }
    }

    console.log(matchesInYear);

}

topEconomicBowlers();

    */
