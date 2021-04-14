// Create a map object
var myMap = L.map("map", {
  center: [49.8941, -2.2958],
  zoom: 4
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
  coor: [55.2443, -6.3689],
  GoT: "The Iron Islands",
  GoTLandmark: "The Iron Islands, home of the Greyjoys, is actually set at the Ballintoy Harbour in Northern Ireland. Though it’s a place Theon likely never wants to see again, you may want to visit to get a true taste of Ireland life.",
  Location: "Ballintoy Harbour in Northern Ireland"
},
{
  coor: [35.9030, 14.5055],
  GoT: "The Scaffold of King's Landing",
  GoTLandmark: "Perhaps the saddest location in all of Game of Thrones, Fort Manoel in Malta was used as the location where Ned Stark met his end on King Joffrey’s orders. Built in the 18th century, the fort remains on UNESCO’s tentative world heritage list. But really, it should make the list from its GoT appearance alone.",
  Location: "Fort Manoel in Malta"
},
{
  coor: [63.6467, -19.1303],
  GoT: "Beyond the Wall",
  GoTLandmark: "The scenes beyond the Wall have been filmed at various locations around Iceland, most notably the Myrdalsjokull glacier.",
  Location: "Myrdalsjokull Glacier in Iceland"
},
{
  coor: [63.6314, -19.6083],
  GoT: "The Mountain Beyond the Wall",
  GoTLandmark: "One specific location beyond the wall happened in Season 7 Episode 6. It was then that Daenerys and her dragons save (almost) everyone from certain death at the hands of the Night King. In real life, that location is actually Kirkjufella famous mountain and waterfall in Iceland.",
  Location: "Kirkjufella in Iceland"
},
{
  coor: [56.1852, -4.0499],
  GoT: "Winterfell",
  GoTLandmark: "The pilot episode of Game of Thrones featuring the Stark family home of Winterfell was shot at Doune Castle in Scotland.",
  Location: "Doune Castle in Scotland"
},
{
  coor: [42.6507, 18.0944],
  GoT: "King's Landing",
  GoTLandmark: "Though most of King’s Landing doesn’t really exist in real life (it’s shot in a studio), some exterior shots include locations like Dubrovnik and Split, both in Croatia.",
  Location: "Croatia"
},
{
  coor: [54.2245, -5.9403],
  GoT: "The Forests of Winterfell",
  GoTLandmark: "Remember when the Stark boys found a litter of direwolf puppies in the forests of Winterfell? Filming of the scene took place in Tollymore Forest Park, in Northern Ireland. The forest was the first named state forest in Northern Island and remains open to visitors, campers, and hikers alike.",
  Location: "Tollymore Forest Park in Northern Ireland"
},
{
  coor: [55.1560, -6.1000],
  GoT: "The Dothraki Sea",
  GoTLandmark: "The Dothraki Sea — otherwise known as the Great Grass Sea — is actually the Glens of Antrim in Northern Ireland. Which, funny enough, means the Dothraki technically live nextdoor to the Starks.",
  Location: "Glens of Antrim in Northern Ireland"
},
{
  coor: [55.1347, 6.3808],
  GoT: "The Kingsroad",
  GoTLandmark: "Northern Ireland is home to some of the world’s most picturesque natural beauty, so it makes sense that the Dark Hedges were used to film the grandest road in the land, otherwise known as the Kingsroad.",
  Location: "Dark Hedges in Ireland"
},
{
  coor: [43.3003, -2.2609],
  GoT: "Dragonstone Beach",
  GoTLandmark: "In the show, Dragonstone Beach is home to several pivotal scenes. It happens to be where the Burning of the Seven took place, as well as the place where Dany goes home to roost in season seven. The interior of Dragonstone is filmed on a sound stage in Belfast, however, the beach, cave, and footbridge are all real and filmed at Itzurun Beach in Zumaia on the northern coast of Spain.",
  Location: "Itzurun Beach in Zumaia"
},
{
  coor: [65.6262, -16.8830],
  GoT: "Jon & Ygritte's Cave",
  GoTLandmark: "In perhaps the sexiest scene in Game of Thrones history, Jon Snow proves he doesn’t, in fact, know nothing, while spending an intimate evening with his Wildling love interest Ygritte. In the show, the pair spend the night north of the Wall, but in real life, the filming location actually sits inside a lava cave Grjótagjá, Iceland.",
  Location: "Grjótagjá in Iceland"
},
{
  coor: [42.6311, 18.1177],
  GoT: "Qarth",
  GoTLandmark: "Lokrum, an island in the Adriatic Sea, was used for filming scenes in the Greatest City that Ever Was or Will Be, otherwise known as Qarth. The Benedictine Monastery on the island stood in as Xaro Xhaon Daxos’ mansion, which can be seen in season two’s fifth episode.",
  Location: "Lokrum in the Adriatic Sea"
},
{
  coor: [55.1258, 6.0429],
  GoT: "Melisandre's Birthing Cave",
  GoTLandmark: "One of Game of Throne’s creepiest scenes features Lady Melisandre giving birth to a shadow that later kills Renly Baratheon. The scene was filmed at the Caves at Cushendum in County Antrim, Northern Ireland.",
  Location: "Caves at Cushendum in Ireland"
},
{
  coor: [42.6430, 18.1084],
  GoT: "The House of the Undying",
  GoTLandmark: "When Daenarys’ dragons are stolen during her stay in the city of Qarth, she’s led to the House of the Undying, which was filmed inside the walls of Minceta Tower in Croatia.",
  Location: "Minceta Tower in Croatia"
},
{
  coor: [31.5085, 9.7595],
  GoT: "Astapor",
  GoTLandmark: "Daenarys certainly travels the furthest in the show throughout the seven kingdoms and in season three, she heads to the Slaver’s Bay city of Astapor. There, Daenarys meets the army of the Unsullied, who become her loyal allies. Principal photography was shot in the Moroccan port city of Essaouira.",
  Location: "Moroccan port city of Essaouira"
},
{
  coor: [31.0470, 7.1319],
  GoT: "Yunki (and Pentos)",
  GoTLandmark: "Another Slaver’s Bay filming location also overlaps with the location of Pentos. Both locations are actually the fortified city of Aït-Ben-Haddou in Morocco in real life.",
  Location: "Aït-Ben-Haddou in Morocco"
},
{
  coor: [43.7350, 15.8952],
  GoT: "Braavos",
  GoTLandmark: "Everyone’s favorite Faceless Man-in-training, Arya Stark, arrives in the Free City of Braavos in the fifth season. No, she didn’t actually go to a mythical land to train for years on end. Instead, filming actually took place in Sibenik, a gorgeous and historical city in Croatia.",
  Location: "Sibenik in Croatia"
},
{
  coor: [37.3831, 5.9902],
  GoT: "The Water Palaces of Dorne",
  GoTLandmark: "OThe fan favorite House of Martell calls the Water Palaces of Dorne home, which was actually filmed at the Alcázar de Sevilla in Spain.",
  Location: "Alcázar de Sevilla in Spain"
},
{
  coor: [37.3891, 5.9845],
  GoT: "The Great Pit of Daznak",
  GoTLandmark: "Daznak’s Pit, the largest fighting pit in the Slaver’s Bay city of Meereen, seen in the ninth episode of season five, is the location where Sir Jorah enters combat to fight for the Queen’s honor. In real life, the Osuna Bull Ring in Sevilla, Spain, stood in as the Great Pit.",
  Location: "Osuna Bull Ring in Sevilla, Spain"
},
{
  coor: [37.8882, 4.7794],
  GoT: "The Long Bridge of Volantis",
  GoTLandmark: "The Long Bridge in the Free City of Volantis — which is depicted in the series’ fifth season — used the Roman Bridge in Cordoba, Spain for principal photography.",
  Location: "Roman Bridge in Cordoba, Spain"
},
{
  coor: [37.8074, 5.0238],
  GoT: "Highgarden",
  GoTLandmark: "In the fourth episode of season seven, fans finally got a look at Highgarden, the home of the House Tyrell. Sadly, it was seized by Jaime Lannister. But, the filming location, the Castillo de Almodóvar del Río in the Andalusian province of Córdoba, remains free of the Lanister grip. The location is open to the public so go explore the towers and walls, and make sure to pick up some Game of Thrones swag before the final episode this summer.",
  Location: "Castillo de Almodóvar del Río in Córdoba"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.coor)
    .bindPopup("<h1>" + city.GoT + "</h1> <hr> <h3>GoT Landmark: " + city.GoTLandmark + "</h3>" + "</h1> <hr> <h3>Location: " + city.Location + "</h3>")
    .addTo(myMap);
}
