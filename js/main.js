// this script takes the original table and converts it into an array of objects
var table = document.getElementById( "original-table" );
var tableArr = [];
for ( let i = 1; i < table.rows.length; i++ ) {
tableArr.push({
    season: parseInt(table.rows[i].cells[0].innerHTML.trim()),
    driver: table.rows[i].cells[1].innerHTML.trim(),
    // streak: parseInt(table.rows[i].cells[2].innerHTML.trim()),
    age: parseInt(table.rows[i].cells[3].innerHTML.trim()),
    team: table.rows[i].cells[4].innerHTML.trim(),
    engine: table.rows[i].cells[5].innerHTML.trim(),
    tyres: table.rows[i].cells[6].innerHTML.trim(),
    poles: parseInt(table.rows[i].cells[7].innerHTML.trim()),
    wins: parseInt(table.rows[i].cells[8].innerHTML.trim()),
    podiums: parseInt(table.rows[i].cells[9].innerHTML.trim()),
    fastestlaps: parseInt(table.rows[i].cells[10].innerHTML.trim()),
    points: Number(table.rows[i].cells[11].innerHTML.trim()),
    pointsachievable: Number(table.rows[i].cells[12].innerHTML.trim()),
    pointsoutright: Number(table.rows[i].cells[13].innerHTML.trim()),
    clinched: table.rows[i].cells[14].innerHTML.trim(),
    // roundsleft: parseInt(table.rows[i].cells[15].innerHTML.trim()),
    race: table.rows[i].cells[16].innerHTML.trim(),
    margin: Number(table.rows[i].cells[17].innerHTML.trim()),
    marginpercent: Number(table.rows[i].cells[18].innerHTML.trim()),
    });
}

const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
};

//begin with opening table tag
// let html = `<table>`;

//add on first table row tag
let headerClass = "headers";
let html = `<tr class="${headerClass}">`;

const makeClassName = (str) => {
    str = str.replace(/\s+/g, '-');
    return str;
}

//loop over to make table headers
let x = 0;
for ( let j in tableArr[0] ) {
    if (j === "fastestlaps" ) {
        j = makeClassName("fastest laps");
    } else if (j === "pointsachievable") {
        j = makeClassName("points achievable towards championship (%)");
    } else if (j === "pointsoutright") {
        j = makeClassName("points outright achievable (%)");
    } else if (j === "margin") {
        j = makeClassName("points margin")
    } else if (j === "marginpercent") {
        j = makeClassName("margin (%)");
    }
    html += `<th class="${j}"onclick="sortTable(${x})"><div>${titleCase(j)}</div></th>`;
    x++;
}
//close the table headers row
html += `</tr>`;
//first loop creates each table row
for( let i = 0; i < tableArr.length; i++) {
    html += `<tr>`;
    // second loop populates each cell
    for( let j in tableArr[i] ) {
        html += `<td>${tableArr[i][j]}</td>`;
    }
    html += `</tr>`;
}

// html += `</table>`;

document.getElementById('main-table').innerHTML = html;
