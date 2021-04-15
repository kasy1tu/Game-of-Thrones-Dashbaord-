layout = {
    "title": "GoT Kings: Attacks vs. Defenses",
    "barmode": "group"
}

d3.json("https://localhost:5000/api/battles").then(function(data) {
    console.log(data)
    Plotly.newPlot('plot', data, layout);
})