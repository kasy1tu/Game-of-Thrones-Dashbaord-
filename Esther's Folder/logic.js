// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, coor, and population
var cities = [{
  coor: [36.0535, 14.1882],
  GoT: "Daenarys and Khal Drogo’s Wedding",
  GoTLandmark: "Way back in season one of Game of Thrones, fans saw a pre-dragon Daenarys marry the blood of her blood” and moon of her life Khal Drogo. The wedding scene was filmed at the stunning Azure Window in Malta. It was a major tourist attraction both before and after the filming. Sadly, in 2017, the window collapsed in a storm.",
  Location: "Azure Window in Malta"
},
{
  coor: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  coor: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
},
{
  coor: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  coor: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.coor)
    .bindPopup("<h1>" + city.GoT + "</h1> <hr> <h3>GoT Landmark: " + city.GoTLandmark + "</h3>" + "</h1> <hr> <h3>Location: " + city.Location + "</h3>")
    .addTo(myMap);
}
