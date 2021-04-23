
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






