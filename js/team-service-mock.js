let teams = [
    {
        "id" : 1,
        "name": "Bosphorus Heat",
        "points": "20000",
        "active" : true
    },
    {
        "id" : 2,
        "name": "Oldcity thunders",
        "points": "10000",
        "active" : false
    },
    {
        "id" : 3,
        "name": "Freezers",
        "points": "32000",
        "active" : true
    },
     {
         "id" : 4,
         "name": "Raiders",
         "points": "14000",
         "active" : true
     }

];

export let findAll = () => new Promise((resolve, reject) => {
    if (teams) {
        resolve(teams.filter(checkActive).sort(sortList));
    } else {
        reject("No teams");
    }
});

let sortList  = (team1, team2) => {
    if (team1.points > team2.points){
        return -1;
    }else{
        return 1;
    }
};

let checkActive = (team) => {
    return team.active;
}