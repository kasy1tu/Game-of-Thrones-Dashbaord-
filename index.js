
// Battles
d3.json("http://localhost:5000/api/battles").then(function(data) {
    console.log(data)

    var update = {
        'marker.color': '#b8860b'
    }
    var update2 = {
        'marker.color': '#808080'
    }

    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
        'plot_bgcolor': 'rgba(35,33,39,.5)',
        "title": {
            text: 'Kings: Attacks & Defenses',
            font: {
                family: 'Algerian',
                size: 22,
                color: '#ffffff'
            }
        },

        "legend": {
            "display": true,
            font: {
                family: 'Algerian',
                size: 16,
                color: '#ffffff'
            }
        },
        "xaxis": {
            title: 'King',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            },
            showgrid: false,
        },
        "yaxis": {
            title: 'Number of Battles',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            }, 
            showgrid: false,
        },
        "barmode": "group"
    };

    Plotly.newPlot("plot", data, layout);
    Plotly.restyle("plot", update, [0]);
    Plotly.restyle("plot", update2, [1])

    
});

// Directors
d3.json("http://localhost:5000/api/directors").then(function(data) {
    console.log(data)

    var update3 = {
        'marker.color': '#b8860b'
    }
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
        'plot_bgcolor': 'rgba(35,33,39,.5)',
        "title": {
            text: 'Directors vs. Ratings',
            font: {
                family: 'Algerian',
                size: 22,
                color: '#ffffff'
            }
        },
        "barmode": "group",
        "xaxis": {
            title: 'Director',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            tickfont: {
                family: 'Algerian',
                size: 14,
                color: '#ffffff'
            },
            showgrid: false,

        },
        "yaxis": {
            title: 'Average Rating',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            },
            showgrid: false,

        }
        
    };

    Plotly.newPlot("graph", data, layout);
    Plotly.restyle("graph", update3, [0]);

    
});

d3.csv("got_cleaned.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

  var headerNames = d3.keys(rows[0]);

  var headerValues = [];
  var cellValues = [];
  for (i = 0; i < headerNames.length; i++) {
    headerValue = [headerNames[i]];
    headerValues[i] = headerValue;
    cellValue = unpack(rows, headerNames[i]);
    cellValues[i] = cellValue;
  }

  // clean date
  for (i = 0; i < cellValues[1].length; i++) {
  var dateValue = cellValues[1][i].split(' ')[0]
  cellValues[1][i] = dateValue
  }


var data = [{
  type: 'table',
//   columnwidth: [150,600,1000,900,600,500,1000,1000,1000],
  columnorder: [0,1,2,3,4,5],
  header: {
    values: headerValues,
    align: "center",
    line: {width: 1, color: 'rgb(50, 50, 50)'},
    fill: {color: ['rgb(235, 100, 230)']},
    font: {family: "Arial", size: 8, color: "white"}
  },
  cells: {
    values: cellValues,
    align: ["center", "center"],
    line: {color: "black", width: 1},
    fill: {color: ['rgba(228, 222, 249, 0.65)','rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)']},
    font: {family: "Arial", size: 9, color: ["black"]}
  }
}]

var layout = {
  title: "Game of Thrones Top Rated Episodes"
}

Plotly.newPlot('myDiv', data, layout);
});





