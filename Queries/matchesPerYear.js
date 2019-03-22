function matchesPerYear(){
    // matches is an array of objects
    var matches = require('../JSON-files/matches.json');
    
    // empty object which stores the result
    var matchesPerYearObj = {};

    for(var i=0; i<matches.length; i++){
        if(matchesPerYearObj.hasOwnProperty(matches[i].season)){
            matchesPerYearObj[matches[i]["season"]] += 1;
        }
        else {
            matchesPerYearObj[matches[i]["season"]] = 1;
        }
    }
    //for (var ele in matchesPerYearObj) console.log(ele);

    var matchesPerYearArr = [];
    for(let ele in matchesPerYearObj){
        matchesPerYearArr.push({'name':ele, 'year':matchesPerYearObj[ele]});
    }

    const fs = require('fs');
    var jsonData = JSON.stringify(matchesPerYearArr);
    fs.writeFile('../queried-JSON-files/JSON-Highcharts/matchesPerYear.json', jsonData, (err) => {
        if(err) throw err;
    });

    jsonData = JSON.stringify(matchesPerYearObj);
    fs.writeFile('../queried-JSON-files/matchesPerYear.json', jsonData, (err) => {
        if(err) throw err;
    });

}

matchesPerYear();

    