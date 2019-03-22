function matchesWonAllTeams(){
    
    // Store the json files into variables:
    var matches = require('../JSON-files/matches.json');
    var deliveries = require('../JSON-files/deliveries.json');

    // Store matches in the year 2016 in a seperate object:
    var year = 2016;
    var matchesInYear = [];
    for(var i=0; i<matches.length; i++){
        if(matches[i]["season"] === year){
            matchesInYear.push(matches[i]);
        }
    }

    var extraRunsConceded = {};
    for(var i=0; i<matchesInYear.length; i++){
        var id = matchesInYear[i]["id"];
        
        for(var j=0; j<deliveries.length; j++){
            
            if(deliveries[j]["match_id"] == id){
                if(extraRunsConceded.hasOwnProperty(deliveries[j]["bowling_team"])){
                    extraRunsConceded[deliveries[j]["bowling_team"]] += parseInt(deliveries[j]["extra_runs"]);
                }
                else{
                    extraRunsConceded[deliveries[j]["bowling_team"]] = parseInt(deliveries[j]["extra_runs"]);
                }
            }
        }
    }

    console.log(extraRunsConceded);
    
    const fs = require('fs');
    var jsonData = JSON.stringify(extraRunsConceded);
    fs.writeFile('../queried-JSON-files/extraRunsConceded.json', jsonData, (err) => {
        if(err) throw err;
    });

    var extraRunsConcededArr = [];
    for(let ele in extraRunsConceded){
        extraRunsConcededArr.push({'team':ele, 'extraRuns':extraRunsConceded[ele]});
    }

    jsonData = JSON.stringify(extraRunsConcededArr);
    fs.writeFile('../queried-JSON-files/JSON-Highcharts/extraRunsConceded.json', jsonData, (err) => {
        if(err) throw err;
    });

}

matchesWonAllTeams();