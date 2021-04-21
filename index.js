
d3.json("http://localhost:5000/api/battles").then(function(data) {
    console.log(data)
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0.4)',
        "title": "G.o.T. Kings: Attacks vs. Defenses",
        "barmode": "group",
    };

    Plotly.newPlot("plot", data, layout);
    
});

d3.json("http://localhost:5000/api/directors").then(function(data) {
    console.log(data)
    var layout = {
        'paper_bgcolor': 'rgba(255,255,255,0.4)',
        "title": "Directors vs. Ratings",
        "barmode": "group"
        
    };

    Plotly.newPlot("graph", data, layout);
    
});



