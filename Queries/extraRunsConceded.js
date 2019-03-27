function matchesWonAllTeams(){
    
    // Store the json files into variables.
    var matches = require('../JSON-files/matches.json');
    var deliveries = require('../JSON-files/deliveries.json');

    // Store 'Match IDs' of 2016 matches.
    var matches2016ID = [];
    matches.map(match => {
        if(match["season"] === 2016){
            matches2016ID.push(match["id"]);
        }
    });

    // Store extra runs conceded by each team in an object of form {"team-name": extras}.
    var extraRunsConceded = {};
    matches2016ID.map(id => {
        deliveries.map(del => {
            if(del["match_id"] == id){
                if(extraRunsConceded.hasOwnProperty(del["bowling_team"])){
                    extraRunsConceded[del["bowling_team"]] += parseInt(del["extra_runs"]);
                }
                else{
                    extraRunsConceded[del["bowling_team"]] = parseInt(del["extra_runs"]);
                }
            }
        });
    });

    // For Highcharts, store the data as an 'Array of Objects', in the form [{name: 'team-name' , y: extras}, {}, {}, ...]
    var extraRunsConcededArr = [];
    for(let ele in extraRunsConceded){
        extraRunsConcededArr.push({'name':ele, 'y':extraRunsConceded[ele]});
    }

    // Convert the array of objects into a JSON file.
    const fs = require('fs');
    jsonData = JSON.stringify(extraRunsConcededArr);
    fs.writeFile('../queried-JSON-files/extraRunsConceded.json', jsonData, (err) => {
        if(err) throw err;
    });
}

matchesWonAllTeams();