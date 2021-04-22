
// Battles
d3.json("http://localhost:5000/api/battles").then(function(data) {
    console.log(data)
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
        "title": {
            text: 'Kings: Attacks & Defenses',
            font: {
                family: 'Algerian',
                size: 22,
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
            }
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
            }
        },
        "barmode": "group"
    };

    Plotly.newPlot("plot", data, layout);
    
});

// Directors
d3.json("http://localhost:5000/api/directors").then(function(data) {
    console.log(data)
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0)',
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
            }
        },
        "yaxis": {
            title: 'Average Rating',
            titlefont: {
                family: 'Algerian',
                size: 19,
                color: '#ffffff'
            }
        }
        
    };

    Plotly.newPlot("graph", data, layout);
    
});





