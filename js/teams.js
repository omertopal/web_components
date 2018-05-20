
import * as team_service from './team-service-mock';
import * as team_link from './components/team_link';

team_service.findAll()
    .then(teams => {
        let html = '<table>';
        teams.forEach(team => html += generateTeamLink(team) );
        html += "</table>";
        document.getElementById("teams").innerHTML = html;
    })
    .catch(e => console.log(e));


function  generateTeamLink (team){
    return `<tr is=\"team-row\"><td>${team.name}</td><td>${team.points}</td></tr>`;

}