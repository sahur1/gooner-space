loadIntoTable(2022);
async function loadIntoTable(value) {
  var request = {
    "url": `https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=${value}&sort=asc`,
    "method": "GET",
    "timeout": 0
  };

  $.ajax(request).done(function (response) {
    const standings = response.data.standings;
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
    for (const item of standings) {
      const rowElement = document.createElement("tr");
      const position =  document.createElement("td");
      const team =  document.createElement("td");
      const played =  document.createElement("td");
      const won =  document.createElement("td");
      const drawn =  document.createElement("td");
      const lost =  document.createElement("td");
      const goalsFor =  document.createElement("td");
      const goalsAgainst =  document.createElement("td");
      const goalDifference =  document.createElement("td");
      const points =  document.createElement("td");
      position.textContent = item.stats[8].displayValue;
      team.textContent = item.team.name;
      played.textContent = item.stats[3].value;
      won.textContent = item.stats[0].value;
      drawn.textContent = item.stats[2].value;
      lost.textContent = item.stats[1].value;
      goalsFor.textContent = item.stats[4].value;
      goalsAgainst.textContent = item.stats[5].value;
      goalDifference.textContent = item.stats[9].value;
      points.textContent = item.stats[6].value;
      rowElement.append(position, team, played, won, drawn, lost, goalsFor, goalsAgainst, goalDifference, points);
      tableBody.appendChild(rowElement);
    }
  });
}
