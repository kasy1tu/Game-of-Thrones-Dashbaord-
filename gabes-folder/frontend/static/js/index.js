
d3.json("http://localhost:5000/api/battles").then(function(data) {
    console.log(data)
    var layout = {
        "title": "G.o.T. Kings: Attacks vs. Defenses",
        "barmode": "group"
    };

    Plotly.newPlot("plot", data, layout);
    
});