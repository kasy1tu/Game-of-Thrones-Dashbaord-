
d3.json("http://localhost:5000/directors").then(function(data) {
    console.log(data)
    var layout = {
        "title": "Directors vs. Ratings",
        "barmode": "group"
    };

    Plotly.newPlot("plot", data, layout);
    
});