// the big array below is the data
const tableArr = [{"season":1950,"driver":"Giuseppe Farina","age":44,"team":"Alfa Romeo","engine":"Alfa Romeo","tyres":"P","poles":2,"wins":3,"podiums":3,"fastestlaps":3,"points":30,"pointsachievable":83.333,"pointsoutright":47.619,"clinched":"7 of 7","race":"Italian Grand Prix","margin":3,"marginpercent":10},{"season":1951,"driver":"Juan Manuel Fangio","age":40,"team":"Alfa Romeo","engine":"Alfa Romeo","tyres":"P","poles":4,"wins":3,"podiums":5,"fastestlaps":5,"points":31,"pointsachievable":86.111,"pointsoutright":51.389,"clinched":"8 of 8","race":"Spanish Grand Prix","margin":6,"marginpercent":19.355},{"season":1952,"driver":"Alberto Ascari","age":34,"team":"Ferrari","engine":"Ferrari","tyres":"F P","poles":5,"wins":6,"podiums":6,"fastestlaps":6,"points":36,"pointsachievable":100,"pointsoutright":74.306,"clinched":"6 of 8","race":"German Grand Prix","margin":12,"marginpercent":33.333},{"season":1953,"driver":"Alberto Ascari","age":35,"team":"Ferrari","engine":"Ferrari","tyres":"P","poles":6,"wins":5,"podiums":5,"fastestlaps":4,"points":34.5,"pointsachievable":95.833,"pointsoutright":57.764,"clinched":"8 of 9","race":"Swiss Grand Prix","margin":6.5,"marginpercent":18.841},{"season":1954,"driver":"Juan Manuel Fangio","age":43,"team":"Maserati","engine":"Maserati","tyres":"P","poles":5,"wins":6,"podiums":7,"fastestlaps":3,"points":42,"pointsachievable":93.333,"pointsoutright":70.547,"clinched":"7 of 9","race":"Swiss Grand Prix","margin":16.857,"marginpercent":40.136},{"season":1955,"driver":"Juan Manuel Fangio","age":44,"team":"Mercedes","engine":"Mercedes","tyres":"C","poles":3,"wins":4,"podiums":5,"fastestlaps":3,"points":40,"pointsachievable":88.889,"pointsoutright":65.079,"clinched":"6 of 7","race":"British Grand Prix","margin":16.5,"marginpercent":41.25},{"season":1956,"driver":"Juan Manuel Fangio","age":45,"team":"Ferrari","engine":"Ferrari","tyres":"E","poles":6,"wins":3,"podiums":5,"fastestlaps":4,"points":30,"pointsachievable":66.667,"pointsoutright":45.833,"clinched":"8 of 8","race":"Italian Grand Prix","margin":3,"marginpercent":10},{"season":1957,"driver":"Juan Manuel Fangio","age":46,"team":"Maserati","engine":"Maserati","tyres":"P","poles":4,"wins":4,"podiums":6,"fastestlaps":2,"points":40,"pointsachievable":88.889,"pointsoutright":63.889,"clinched":"6 of 8","race":"German Grand Prix","margin":15,"marginpercent":37.5},{"season":1958,"driver":"Mike Hawthorn","age":29,"team":"Ferrari","engine":"Ferrari","tyres":"E","poles":4,"wins":1,"podiums":7,"fastestlaps":5,"points":42,"pointsachievable":77.778,"pointsoutright":49.495,"clinched":"11 of 11","race":"Moroccan Grand Prix","margin":1,"marginpercent":2.381},{"season":1959,"driver":"Jack Brabham","age":33,"team":"Cooper","engine":"Climax","tyres":"D","poles":1,"wins":2,"podiums":5,"fastestlaps":1,"points":31,"pointsachievable":68.889,"pointsoutright":41.975,"clinched":"9 of 9","race":"United States Grand Prix","margin":4,"marginpercent":12.903},{"season":1960,"driver":"Jack Brabham","age":34,"team":"Cooper","engine":"Climax","tyres":"D","poles":3,"wins":5,"podiums":5,"fastestlaps":3,"points":43,"pointsachievable":89.583,"pointsoutright":53.75,"clinched":"8 of 10","race":"Italian Grand Prix","margin":9,"marginpercent":20.93},{"season":1961,"driver":"Phil Hill","age":34,"team":"Ferrari","engine":"Ferrari","tyres":"D","poles":5,"wins":2,"podiums":6,"fastestlaps":2,"points":34,"pointsachievable":75.556,"pointsoutright":52.778,"clinched":"7 of 8","race":"Italian Grand Prix","margin":1,"marginpercent":2.941},{"season":1962,"driver":"Graham Hill","age":33,"team":"BRM","engine":"BRM","tyres":"D","poles":1,"wins":4,"podiums":6,"fastestlaps":3,"points":42,"pointsachievable":93.333,"pointsoutright":64.198,"clinched":"9 of 9","race":"South African Grand Prix","margin":12,"marginpercent":28.571},{"season":1963,"driver":"Jim Clark","age":27,"team":"Lotus","engine":"Climax","tyres":"D","poles":7,"wins":7,"podiums":9,"fastestlaps":6,"points":54,"pointsachievable":100,"pointsoutright":81.111,"clinched":"7 of 10","race":"Italian Grand Prix","margin":21,"marginpercent":38.889},{"season":1964,"driver":"John Surtees","age":30,"team":"Ferrari","engine":"Ferrari","tyres":"D","poles":2,"wins":2,"podiums":6,"fastestlaps":2,"points":40,"pointsachievable":74.074,"pointsoutright":44.444,"clinched":"10 of 10","race":"Mexican Grand Prix","margin":1,"marginpercent":2.5},{"season":1965,"driver":"Jim Clark","age":29,"team":"Lotus","engine":"Climax","tyres":"D","poles":6,"wins":6,"podiums":6,"fastestlaps":6,"points":54,"pointsachievable":100,"pointsoutright":60,"clinched":"7 of 10","race":"German Grand Prix","margin":14,"marginpercent":25.926},{"season":1966,"driver":"Jack Brabham","age":40,"team":"Brabham","engine":"Repco","tyres":"G","poles":3,"wins":4,"podiums":5,"fastestlaps":1,"points":42,"pointsachievable":93.333,"pointsoutright":55.556,"clinched":"7 of 9","race":"Italian Grand Prix","margin":14,"marginpercent":33.333},{"season":1967,"driver":"Denny Hulme","age":31,"team":"Brabham","engine":"Repco","tyres":"G","poles":0,"wins":2,"podiums":8,"fastestlaps":2,"points":51,"pointsachievable":62.963,"pointsoutright":51.515,"clinched":"11 of 11","race":"Mexican Grand Prix","margin":5,"marginpercent":9.804},{"season":1968,"driver":"Graham Hill","age":39,"team":"Lotus","engine":"Ford","tyres":"F","poles":2,"wins":3,"podiums":6,"fastestlaps":0,"points":48,"pointsachievable":53.333,"pointsoutright":44.444,"clinched":"12 of 12","race":"Mexican Grand Prix","margin":12,"marginpercent":25},{"season":1969,"driver":"Jackie Stewart","age":30,"team":"Matra","engine":"Ford","tyres":"D","poles":2,"wins":6,"podiums":7,"fastestlaps":5,"points":63,"pointsachievable":77.778,"pointsoutright":63.636,"clinched":"8 of 11","race":"Italian Grand Prix","margin":26,"marginpercent":41.27},{"season":1970,"driver":"Jochen Rindt","age":28,"team":"Lotus","engine":"Ford","tyres":"F","poles":3,"wins":5,"podiums":5,"fastestlaps":1,"points":45,"pointsachievable":45.455,"pointsoutright":38.462,"clinched":"12 of 13","race":"United States Grand Prix","margin":5,"marginpercent":11.111},{"season":1971,"driver":"Jackie Stewart","age":32,"team":"Tyrrell","engine":"Ford","tyres":"G","poles":6,"wins":6,"podiums":7,"fastestlaps":3,"points":62,"pointsachievable":76.543,"pointsoutright":62.626,"clinched":"8 of 11","race":"Austrian Grand Prix","margin":29,"marginpercent":46.774},{"season":1972,"driver":"Emerson Fittipaldi","age":25,"team":"Lotus","engine":"Ford","tyres":"F","poles":3,"wins":5,"podiums":8,"fastestlaps":0,"points":61,"pointsachievable":67.778,"pointsoutright":56.481,"clinched":"10 of 12","race":"Italian Grand Prix","margin":16,"marginpercent":26.23},{"season":1973,"driver":"Jackie Stewart","age":34,"team":"Tyrrell","engine":"Ford","tyres":"G","poles":3,"wins":5,"podiums":8,"fastestlaps":1,"points":71,"pointsachievable":60.684,"pointsoutright":52.593,"clinched":"13 of 15","race":"Italian Grand Prix","margin":16,"marginpercent":22.535},{"season":1974,"driver":"Emerson Fittipaldi","age":27,"team":"McLaren","engine":"Ford","tyres":"G","poles":2,"wins":3,"podiums":7,"fastestlaps":0,"points":55,"pointsachievable":47.009,"pointsoutright":40.741,"clinched":"15 of 15","race":"United States Grand Prix","margin":3,"marginpercent":5.455},{"season":1975,"driver":"Niki Lauda","age":26,"team":"Ferrari","engine":"Ferrari","tyres":"G","poles":9,"wins":5,"podiums":8,"fastestlaps":2,"points":64.5,"pointsachievable":59.722,"pointsoutright":51.19,"clinched":"13 of 14","race":"Italian Grand Prix","margin":19.5,"marginpercent":30.233},{"season":1976,"driver":"James Hunt","age":29,"team":"McLaren","engine":"Ford","tyres":"G","poles":8,"wins":6,"podiums":8,"fastestlaps":2,"points":69,"pointsachievable":54.762,"pointsoutright":47.917,"clinched":"16 of 16","race":"Japanese Grand Prix","margin":1,"marginpercent":1.449},{"season":1977,"driver":"Niki Lauda","age":28,"team":"Ferrari","engine":"Ferrari","tyres":"G","poles":2,"wins":3,"podiums":10,"fastestlaps":3,"points":72,"pointsachievable":53.333,"pointsoutright":47.059,"clinched":"15 of 17","race":"United States Grand Prix East","margin":17,"marginpercent":23.611},{"season":1978,"driver":"Mario Andretti","age":38,"team":"Lotus","engine":"Ford","tyres":"G","poles":8,"wins":6,"podiums":7,"fastestlaps":3,"points":64,"pointsachievable":50.794,"pointsoutright":44.444,"clinched":"14 of 16","race":"Italian Grand Prix","margin":13,"marginpercent":20.313},{"season":1979,"driver":"Jody Scheckter","age":29,"team":"Ferrari","engine":"Ferrari","tyres":"M","poles":1,"wins":3,"podiums":6,"fastestlaps":0,"points":51,"pointsachievable":70.833,"pointsoutright":44.444,"clinched":"13 of 15","race":"Italian Grand Prix","margin":4,"marginpercent":7.843},{"season":1980,"driver":"Alan Jones","age":34,"team":"Williams","engine":"Ford","tyres":"G","poles":3,"wins":5,"podiums":10,"fastestlaps":5,"points":67,"pointsachievable":74.444,"pointsoutright":56.349,"clinched":"13 of 14","race":"Canadian Grand Prix","margin":13,"marginpercent":19.403},{"season":1981,"driver":"Nelson Piquet","age":29,"team":"Brabham","engine":"Ford","tyres":"M G","poles":4,"wins":3,"podiums":7,"fastestlaps":1,"points":50,"pointsachievable":50.505,"pointsoutright":37.037,"clinched":"15 of 15","race":"Caesars Palace Grand Prix","margin":1,"marginpercent":2},{"season":1982,"driver":"Keke Rosberg","age":34,"team":"Williams","engine":"Ford","tyres":"G","poles":1,"wins":1,"podiums":6,"fastestlaps":0,"points":44,"pointsachievable":44.444,"pointsoutright":30.556,"clinched":"16 of 16","race":"Caesars Palace Grand Prix","margin":5,"marginpercent":11.364},{"season":1983,"driver":"Nelson Piquet","age":31,"team":"Brabham","engine":"BMW","tyres":"M","poles":1,"wins":3,"podiums":8,"fastestlaps":4,"points":59,"pointsachievable":59.596,"pointsoutright":43.704,"clinched":"15 of 15","race":"South African Grand Prix","margin":2,"marginpercent":3.39},{"season":1984,"driver":"Niki Lauda","age":35,"team":"McLaren","engine":"TAG","tyres":"M","poles":0,"wins":5,"podiums":9,"fastestlaps":5,"points":72,"pointsachievable":72.727,"pointsoutright":50,"clinched":"16 of 16","race":"Portuguese Grand Prix","margin":0.5,"marginpercent":0.694},{"season":1985,"driver":"Alain Prost","age":30,"team":"McLaren","engine":"TAG","tyres":"G","poles":2,"wins":5,"podiums":11,"fastestlaps":5,"points":73,"pointsachievable":73.737,"pointsoutright":52.778,"clinched":"14 of 16","race":"European Grand Prix","margin":20,"marginpercent":27.397},{"season":1986,"driver":"Alain Prost","age":31,"team":"McLaren","engine":"TAG","tyres":"G","poles":1,"wins":4,"podiums":11,"fastestlaps":2,"points":72,"pointsachievable":72.727,"pointsoutright":51.389,"clinched":"16 of 16","race":"Australian Grand Prix","margin":2,"marginpercent":2.778},{"season":1987,"driver":"Nelson Piquet","age":35,"team":"Williams","engine":"Honda","tyres":"G","poles":4,"wins":3,"podiums":11,"fastestlaps":4,"points":73,"pointsachievable":73.737,"pointsoutright":52.778,"clinched":"15 of 16","race":"Japanese Grand Prix","margin":12,"marginpercent":16.438},{"season":1988,"driver":"Ayrton Senna","age":28,"team":"McLaren","engine":"Honda","tyres":"G","poles":13,"wins":8,"podiums":11,"fastestlaps":3,"points":90,"pointsachievable":90.909,"pointsoutright":65.278,"clinched":"15 of 16","race":"Japanese Grand Prix","margin":3,"marginpercent":3.333},{"season":1989,"driver":"Alain Prost","age":34,"team":"McLaren","engine":"Honda","tyres":"G","poles":2,"wins":4,"podiums":11,"fastestlaps":5,"points":76,"pointsachievable":76.768,"pointsoutright":56.25,"clinched":"15 of 16","race":"Japanese Grand Prix","margin":16,"marginpercent":21.053},{"season":1990,"driver":"Ayrton Senna","age":30,"team":"McLaren","engine":"Honda","tyres":"G","poles":10,"wins":6,"podiums":11,"fastestlaps":2,"points":78,"pointsachievable":78.788,"pointsoutright":54.167,"clinched":"15 of 16","race":"Japanese Grand Prix","margin":7,"marginpercent":8.974},{"season":1991,"driver":"Ayrton Senna","age":31,"team":"McLaren","engine":"Honda","tyres":"G","poles":8,"wins":7,"podiums":12,"fastestlaps":2,"points":96,"pointsachievable":56.875,"pointsoutright":56.875,"clinched":"15 of 16","race":"Japanese Grand Prix","margin":24,"marginpercent":25},{"season":1992,"driver":"Nigel Mansell","age":39,"team":"Williams","engine":"Renault","tyres":"G","poles":14,"wins":9,"podiums":12,"fastestlaps":8,"points":108,"pointsachievable":67.5,"pointsoutright":67.5,"clinched":"11 of 16","race":"Hungarian Grand Prix","margin":52,"marginpercent":48.148},{"season":1993,"driver":"Alain Prost","age":38,"team":"Williams","engine":"Renault","tyres":"G","poles":13,"wins":7,"podiums":12,"fastestlaps":6,"points":99,"pointsachievable":61.875,"pointsoutright":61.875,"clinched":"14 of 16","race":"Portuguese Grand Prix","margin":26,"marginpercent":26.263},{"season":1994,"driver":"Michael Schumacher","age":25,"team":"Benetton","engine":"Ford","tyres":"G","poles":6,"wins":8,"podiums":10,"fastestlaps":8,"points":92,"pointsachievable":57.5,"pointsoutright":57.5,"clinched":"16 of 16","race":"Australian Grand Prix","margin":1,"marginpercent":1.087},{"season":1995,"driver":"Michael Schumacher","age":26,"team":"Benetton","engine":"Renault","tyres":"G","poles":4,"wins":9,"podiums":11,"fastestlaps":8,"points":102,"pointsachievable":63.75,"pointsoutright":63.75,"clinched":"15 of 17","race":"Pacific Grand Prix","margin":33,"marginpercent":32.353},{"season":1996,"driver":"Damon Hill","age":36,"team":"Williams","engine":"Renault","tyres":"G","poles":9,"wins":8,"podiums":10,"fastestlaps":5,"points":97,"pointsachievable":60.625,"pointsoutright":60.625,"clinched":"16 of 16","race":"Japanese Grand Prix","margin":19,"marginpercent":19.588},{"season":1997,"driver":"Jacques Villeneuve","age":26,"team":"Williams","engine":"Renault","tyres":"G","poles":10,"wins":7,"podiums":8,"fastestlaps":3,"points":81,"pointsachievable":47.647,"pointsoutright":47.647,"clinched":"17 of 17","race":"European Grand Prix","margin":39,"marginpercent":48.148},{"season":1998,"driver":"Mika Häkkinen","age":30,"team":"McLaren","engine":"Mercedes","tyres":"B","poles":9,"wins":8,"podiums":11,"fastestlaps":6,"points":100,"pointsachievable":62.5,"pointsoutright":62.5,"clinched":"16 of 16","race":"Japanese Grand Prix","margin":14,"marginpercent":14},{"season":1999,"driver":"Mika Häkkinen","age":31,"team":"McLaren","engine":"Mercedes","tyres":"B","poles":11,"wins":5,"podiums":10,"fastestlaps":6,"points":76,"pointsachievable":47.5,"pointsoutright":47.5,"clinched":"16 of 16","race":"Japanese Grand Prix","margin":2,"marginpercent":2.632},{"season":2000,"driver":"Michael Schumacher","age":31,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":9,"wins":9,"podiums":12,"fastestlaps":2,"points":108,"pointsachievable":63.529,"pointsoutright":63.529,"clinched":"16 of 17","race":"Japanese Grand Prix","margin":19,"marginpercent":17.593},{"season":2001,"driver":"Michael Schumacher","age":32,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":11,"wins":9,"podiums":14,"fastestlaps":3,"points":123,"pointsachievable":72.353,"pointsoutright":72.353,"clinched":"13 of 17","race":"Hungarian Grand Prix","margin":58,"marginpercent":47.154},{"season":2002,"driver":"Michael Schumacher","age":33,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":7,"wins":11,"podiums":17,"fastestlaps":7,"points":144,"pointsachievable":84.706,"pointsoutright":84.706,"clinched":"11 of 17","race":"French Grand Prix","margin":67,"marginpercent":46.528},{"season":2003,"driver":"Michael Schumacher","age":34,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":5,"wins":6,"podiums":8,"fastestlaps":5,"points":93,"pointsachievable":58.125,"pointsoutright":58.125,"clinched":"16 of 16","race":"Japanese Grand Prix","margin":2,"marginpercent":2.151},{"season":2004,"driver":"Michael Schumacher","age":35,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":8,"wins":13,"podiums":15,"fastestlaps":10,"points":148,"pointsachievable":82.222,"pointsoutright":82.222,"clinched":"14 of 18","race":"Belgian Grand Prix","margin":34,"marginpercent":22.973},{"season":2005,"driver":"Fernando Alonso","age":24,"team":"Renault","engine":"Renault","tyres":"M","poles":6,"wins":7,"podiums":15,"fastestlaps":2,"points":133,"pointsachievable":70,"pointsoutright":70,"clinched":"17 of 19","race":"Brazilian Grand Prix","margin":21,"marginpercent":15.789},{"season":2006,"driver":"Fernando Alonso","age":25,"team":"Renault","engine":"Renault","tyres":"M","poles":6,"wins":7,"podiums":14,"fastestlaps":5,"points":134,"pointsachievable":74.444,"pointsoutright":74.444,"clinched":"18 of 18","race":"Brazilian Grand Prix","margin":13,"marginpercent":9.701},{"season":2007,"driver":"Kimi Räikkönen","age":28,"team":"Ferrari","engine":"Ferrari","tyres":"B","poles":3,"wins":6,"podiums":12,"fastestlaps":6,"points":110,"pointsachievable":64.706,"pointsoutright":64.706,"clinched":"17 of 17","race":"Brazilian Grand Prix","margin":1,"marginpercent":0.909},{"season":2008,"driver":"Lewis Hamilton","age":23,"team":"McLaren","engine":"Mercedes","tyres":"B","poles":7,"wins":5,"podiums":10,"fastestlaps":1,"points":98,"pointsachievable":54.444,"pointsoutright":54.444,"clinched":"18 of 18","race":"Brazilian Grand Prix","margin":1,"marginpercent":1.02},{"season":2009,"driver":"Jenson Button","age":29,"team":"Brawn","engine":"Mercedes","tyres":"B","poles":4,"wins":6,"podiums":9,"fastestlaps":2,"points":95,"pointsachievable":55.882,"pointsoutright":55.882,"clinched":"16 of 17","race":"Brazilian Grand Prix","margin":11,"marginpercent":11.579},{"season":2010,"driver":"Sebastian Vettel","age":23,"team":"Red Bull","engine":"Renault","tyres":"B","poles":10,"wins":5,"podiums":10,"fastestlaps":3,"points":256,"pointsachievable":53.895,"pointsoutright":53.895,"clinched":"19 of 19","race":"Abu Dhabi Grand Prix","margin":4,"marginpercent":1.563},{"season":2011,"driver":"Sebastian Vettel","age":24,"team":"Red Bull","engine":"Renault","tyres":"P","poles":15,"wins":11,"podiums":17,"fastestlaps":3,"points":392,"pointsachievable":82.526,"pointsoutright":82.526,"clinched":"15 of 19","race":"Japanese Grand Prix","margin":122,"marginpercent":31.122},{"season":2012,"driver":"Sebastian Vettel","age":25,"team":"Red Bull","engine":"Renault","tyres":"P","poles":6,"wins":5,"podiums":10,"fastestlaps":6,"points":281,"pointsachievable":56.2,"pointsoutright":56.2,"clinched":"20 of 20","race":"Brazilian Grand Prix","margin":3,"marginpercent":1.068},{"season":2013,"driver":"Sebastian Vettel","age":26,"team":"Red Bull","engine":"Renault","tyres":"P","poles":9,"wins":13,"podiums":16,"fastestlaps":7,"points":397,"pointsachievable":83.579,"pointsoutright":83.579,"clinched":"16 of 19","race":"Indian Grand Prix","margin":155,"marginpercent":39.043},{"season":2014,"driver":"Lewis Hamilton","age":29,"team":"Mercedes","engine":"Mercedes","tyres":"P","poles":7,"wins":11,"podiums":16,"fastestlaps":7,"points":384,"pointsachievable":76.8,"pointsoutright":76.8,"clinched":"19 of 19","race":"Abu Dhabi Grand Prix","margin":67,"marginpercent":17.448},{"season":2015,"driver":"Lewis Hamilton","age":30,"team":"Mercedes","engine":"Mercedes","tyres":"P","poles":11,"wins":10,"podiums":17,"fastestlaps":8,"points":381,"pointsachievable":80.211,"pointsoutright":80.211,"clinched":"16 of 19","race":"United States Grand Prix","margin":59,"marginpercent":15.486},{"season":2016,"driver":"Nico Rosberg","age":31,"team":"Mercedes","engine":"Mercedes","tyres":"P","poles":8,"wins":9,"podiums":16,"fastestlaps":6,"points":385,"pointsachievable":73.333,"pointsoutright":73.333,"clinched":"21 of 21","race":"Abu Dhabi Grand Prix","margin":5,"marginpercent":1.299},{"season":2017,"driver":"Lewis Hamilton","age":32,"team":"Mercedes","engine":"Mercedes","tyres":"P","poles":11,"wins":9,"podiums":13,"fastestlaps":7,"points":363,"pointsachievable":72.6,"pointsoutright":72.6,"clinched":"18 of 20","race":"Mexican Grand Prix","margin":46,"marginpercent":12.672},{"season":2018,"driver":"Lewis Hamilton","age":33,"team":"Mercedes","engine":"Mercedes","tyres":"P","poles":11,"wins":11,"podiums":17,"fastestlaps":3,"points":408,"pointsachievable":77.714,"pointsoutright":77.714,"clinched":"19 of 21","race":"Mexican Grand Prix","margin":88,"marginpercent":21.569}];

const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
};

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
    html += `<th><div>${titleCase(j)}</div></th>`;
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
document.getElementById('main-table').innerHTML = html;


// table sorting

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));





// ----------------- array methods ----------------------


// which drivers won the championship in their twenties with a Ferrari engine?
// filter and map
const twentiesFerrari = tableArr.filter(driver => driver.age < 30 && driver.engine == "Ferrari");
const drivers = twentiesFerrari.map(driver => `${driver.season}: ${driver.driver}, ${driver.age} years old.`);
// console.table(drivers);
// outputs




// driver ages oldest to youngest
// const sortedAges = tableArr.sort((a, b) => a.age > b.age ? -1 : 1);

const sortedAges = tableArr.sort(function(a, b) {
    return b.age - a.age;
});

console.log(JSON.parse(JSON.stringify(sortedAges)));
// console.table(sortedAges);



// how many championships were decided at the Japanese Grand Prix?
const inJapan = (tableArr.filter(({race}) => race === "Japanese Grand Prix")).length;
// console.log(inJapan);





// which drivers had a championship winning streak of 2 or more and when?

// sort the data by year
const sorted = tableArr.sort(function(a, b){return a.season - b.season});

// console.log(sorted);
const reduced = sorted.reduce(function(obj, item) {
    // creates object if it doesn't exist
    if (!obj[item.team]) {
        obj[item.team] = [];
    }
    obj[item.team]++;
    return obj;
}, []);
// console.log(reduced);






// which drivers had a winning margin of 5% or less?

const fiveOrLess = tableArr.filter(({marginpercent}) => marginpercent <= 5);
for (let i = 0; i < fiveOrLess.length; i++) {
    let info = `In ${fiveOrLess[i].season}, ${fiveOrLess[i].driver} won with a margin of ${fiveOrLess[i].marginpercent}%`;
    // console.log(info);
}


// has a team only won the championship once?

const teamWins = tableArr.reduce(function(obj, item) {
    // creates object if it doesn't exist
    if (!obj[item.team]) {
        obj[item.team] = [];
    }
    obj[item.team]++;
    return obj;
}, []);
const newDataKeys = Object.keys(teamWins);
const newDataValues = Object.values(teamWins);
let onceWinners = '';
for ( let i = 0; i < newDataValues.length; i++ ) {
    if (newDataValues[i] === 1) {
        onceWinners += `${newDataKeys[i]} `;
    }
}
// console.log(onceWinners);

// create an array that you can filer over and check for 1 (or whatever) championships
// that looks like this below

// find a way of creating this from the object you've create (teamWins)
const arr = [
    { name: "Alfa Romeo", wins: 2 },
    { name: "BRM", wins: 1 },
];

// const teamWinsArr = Array.from(teamWins);
// console.log(teamWinsArr);
// const filtered = teamWins.filter(value => teamWins.value === 1);
// console.log(filtered);








const name = "Andrew George Hale";
const last = name.substring(name.lastIndexOf(" ") + 1, name.length);
const rest = name.substring(0, name.lastIndexOf(" ") + 1);
// console.log(rest);
// console.log(last);
const surnameFirst = `${last}, ${rest}`
// console.log(surnameFirst);
//# sourceMappingURL=app.js.map
