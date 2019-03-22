function matchesWonAllTeams(){
    
    var matches = require('../JSON-files/matches.json');

    var matchesWonAllTeamsObj = {};

    for(var i=0; i<matches.length; i++){
        if(matches[i]["winner"] !== ""){
            if(matchesWonAllTeamsObj.hasOwnProperty(matches[i]["winner"])){
                matchesWonAllTeamsObj[matches[i]["winner"]] += 1;
            }
            else{
                matchesWonAllTeamsObj[matches[i]["winner"]] = 1;
            }
        }
        
    }

    const fs = require('fs');
    var jsonData = JSON.stringify(matchesWonAllTeamsObj);
    fs.writeFile('../queried-JSON-files/matchesWonAllTeams.json', jsonData, (err) => {
        if(err) throw err;
    });

}

matchesWonAllTeams();