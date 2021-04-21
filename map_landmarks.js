const landmarks = {
  // This GeoJSON contains features that include an "icon"
  // property. The value of the "icon" property corresponds
  // to an image in the Mapbox Streets style's sprite.
  type: "geojson",
  cluster: true,
  clusterMaxZoom: 5, // Max zoom to cluster points on
  clusterRadius: 20,
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [14.1882, 36.0535],
        },
        properties: {
          GoT: "Daenarys and Khal Drogo’s Wedding",
          GoTLandmark:
            "Way back in season one of Game of Thrones, fans saw a pre-dragon Daenarys marry the blood of her blood” and moon of her life Khal Drogo. The wedding scene was filmed at the stunning Azure Window in Malta. It was a major tourist attraction both before and after the filming. Sadly, in 2017, the window collapsed in a storm.",
          Location: "Azure Window, Malta",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fdaenarys-and-khal-drogos-wedding-azure-window-malta-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-6.3689, 55.2443],
        },
        properties: {
          GoT: "The Iron Islands",
          GoTLandmark:
            "The Iron Islands, home of the Greyjoys, is actually set at the Ballintoy Harbour in Northern Ireland. Though it’s a place Theon likely never wants to see again, you may want to visit to get a true taste of Ireland life.",
          Location: "Ballintoy Harbour, Northern Ireland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-iron-islands-ballintoy-harbor-northern-ireland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [14.5055, 35.903],
        },
        properties: {
          GoT: "The Scaffold of King's Landing",
          GoTLandmark:
            "Perhaps the saddest location in all of Game of Thrones, Fort Manoel in Malta was used as the location where Ned Stark met his end on King Joffrey’s orders. Built in the 18th century, the fort remains on UNESCO’s tentative world heritage list. But really, it should make the list from its GoT appearance alone.",
          Location: "Fort Manoel, Malta",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-scaffold-of-kings-landing-fort-manoel-malta-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-19.1303, 63.6467],
        },
        properties: {
          GoT: "Beyond the Wall",
          GoTLandmark:
            "The scenes beyond the Wall have been filmed at various locations around Iceland, most notably the Myrdalsjokull glacier.",
          Location: "Myrdalsjokull Glacier in Iceland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fbeyond-the-wall-hverfjall-volcano-iceland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-19.6083, 63.6314],
        },
        properties: {
          GoT: "The Mountain Beyond the Wall",
          GoTLandmark:
            "One specific location beyond the wall happened in Season 7 Episode 6. It was then that Daenerys and her dragons save (almost) everyone from certain death at the hands of the Night King. In real life, that location is actually Kirkjufella famous mountain and waterfall in Iceland.",
          Location: "Kirkjufella, Iceland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-mountain-beyond-the-wall-kirkjufell-iceland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-4.0499, 56.1852],
        },
        properties: {
          GoT: "Winterfell",
          GoTLandmark:
            "The pilot episode of Game of Thrones featuring the Stark family home of Winterfell was shot at Doune Castle in Scotland.",
          Location: "Doune Castle in Scotland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fwinterfell-doune-castle-scotland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [16.386693791012863, 43.64193471847621],
        },
        properties: {
          GoT: "King's Landing",
          GoTLandmark:
            "Though most of King’s Landing doesn’t really exist in real life (it’s shot in a studio), some exterior shots include locations like Dubrovnik and Split, both in Croatia.",
          Location: "Croatia",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fdubrovnik-croatia-kings-landing-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-5.9403, 54.2245],
        },
        properties: {
          GoT: "The Forests of Winterfell",
          GoTLandmark:
            "Remember when the Stark boys found a litter of direwolf puppies in the forests of Winterfell? Filming of the scene took place in Tollymore Forest Park, in Northern Ireland. The forest was the first named state forest in Northern Island and remains open to visitors, campers, and hikers alike.",
          Location: "Tollymore Forest Park, Northern Ireland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-forests-of-winterfell-tollymore-forest-park-northern-ireland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-6.1, 55.156],
        },
        properties: {
          GoT: "The Dothraki Sea",
          GoTLandmark:
            "The Dothraki Sea — otherwise known as the Great Grass Sea — is actually the Glens of Antrim in Northern Ireland. Which, funny enough, means the Dothraki technically live nextdoor to the Starks.",
          Location: "Glens of Antrim, Northern Ireland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-dothraki-sea-glens-of-antrim-nothern-ireland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-6.380832730438444, 55.13477261100547],
        },
        properties: {
          GoT: "The Kingsroad",
          GoTLandmark:
            "Northern Ireland is home to some of the world’s most picturesque natural beauty, so it makes sense that the Dark Hedges were used to film the grandest road in the land, otherwise known as the Kingsroad.",
          Location: "Dark Hedges in Ireland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-kingsroad-dark-hedges-northern-ireland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-2.2609, 43.3003],
        },
        properties: {
          GoT: "Dragonstone Beach",
          GoTLandmark:
            "In the show, Dragonstone Beach is home to several pivotal scenes. It happens to be where the Burning of the Seven took place, as well as the place where Dany goes home to roost in season seven. The interior of Dragonstone is filmed on a sound stage in Belfast, however, the beach, cave, and footbridge are all real and filmed at Itzurun Beach in Zumaia on the northern coast of Spain.",
          Location: "Itzurun Beach, Zumaia",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fdragonstone-beach-itzurun-beach-zumaia-spain-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-16.883, 65.6262],
        },
        properties: {
          GoT: "Jon & Ygritte's Cave",
          GoTLandmark:
            "In perhaps the sexiest scene in Game of Thrones history, Jon Snow proves he doesn’t, in fact, know nothing, while spending an intimate evening with his Wildling love interest Ygritte. In the show, the pair spend the night north of the Wall, but in real life, the filming location actually sits inside a lava cave Grjótagjá, Iceland.",
          Location: "Grjótagjá, Iceland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fjon-and-ygrittes-cave-grjotagja-iceland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [18.21749166278417, 42.57169780604671],
        },
        properties: {
          GoT: "Qarth",
          GoTLandmark:
            "Lokrum, an island in the Adriatic Sea, was used for filming scenes in the Greatest City that Ever Was or Will Be, otherwise known as Qarth. The Benedictine Monastery on the island stood in as Xaro Xhaon Daxos’ mansion, which can be seen in season two’s fifth episode.",
          Location: "Lokrum in the Adriatic Sea",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fqarth-lokrum-island-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-6.037541042328746, 55.124212801415254],
        },
        properties: {
          GoT: "Melisandre's Birthing Cave",
          GoTLandmark:
            "One of Game of Throne’s creepiest scenes features Lady Melisandre giving birth to a shadow that later kills Renly Baratheon. The scene was filmed at the Caves at Cushendum in County Antrim, Northern Ireland.",
          Location: "Caves at Cushendum, Ireland",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fmelisandres-birthing-cave-cushendun-cave-antrim-northern-ireland-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [18.108260554392814, 42.6450923055073],
        },
        properties: {
          GoT: "The House of the Undying",
          GoTLandmark:
            "When Daenarys’ dragons are stolen during her stay in the city of Qarth, she’s led to the House of the Undying, which was filmed inside the walls of Minceta Tower in Croatia.",
          Location: "Minceta Tower, Croatia",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-house-of-the-undying-minceta-tower-croatia-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-9.7595, 31.5085],
        },
        properties: {
          GoT: "Astapor",
          GoTLandmark:
            "Daenarys certainly travels the furthest in the show throughout the seven kingdoms and in season three, she heads to the Slaver’s Bay city of Astapor. There, Daenarys meets the army of the Unsullied, who become her loyal allies. Principal photography was shot in the Moroccan port city of Essaouira.",
          Location: "Essaouira, Morocco",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fastapor-essauira-morocco-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-7.1319, 31.047],
        },
        properties: {
          GoT: "Yunki (and Pentos)",
          GoTLandmark:
            "Another Slaver’s Bay filming location also overlaps with the location of Pentos. Both locations are actually the fortified city of Aït-Ben-Haddou in Morocco in real life.",
          Location: "Aït-Ben-Haddou, Morocco",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fyunkai-and-pentos-ait-benhaddou-morocco-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [15.8952, 43.735],
        },
        properties: {
          GoT: "Braavos",
          GoTLandmark:
            "Everyone’s favorite Faceless Man-in-training, Arya Stark, arrives in the Free City of Braavos in the fifth season. No, she didn’t actually go to a mythical land to train for years on end. Instead, filming actually took place in Sibenik, a gorgeous and historical city in Croatia.",
          Location: "Sibenik, Croatia",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fbraavos-sibenik-croatia-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-5.990161329071243, 37.38325648126753],
        },
        properties: {
          GoT: "The Water Palaces of Dorne",
          GoTLandmark:
            "OThe fan favorite House of Martell calls the Water Palaces of Dorne home, which was actually filmed at the Alcázar de Sevilla in Spain.",
          Location: "Alcázar de Sevilla, Spain",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-water-palaces-of-dorne-alcazar-de-sevilla-spain-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-5.108405617430626, 37.24231938843947],
        },
        properties: {
          GoT: "The Great Pit of Daznak",
          GoTLandmark:
            "Daznak’s Pit, the largest fighting pit in the Slaver’s Bay city of Meereen, seen in the ninth episode of season five, is the location where Sir Jorah enters combat to fight for the Queen’s honor. In real life, the Osuna Bull Ring in Sevilla, Spain, stood in as the Great Pit.",
          Location: "Osuna Bull Ring\nSevilla, Spain",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-great-pit-of-daznak-osuna-bull-ring-sevilla-spain-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-4.7794, 37.8882],
        },
        properties: {
          GoT: "The Long Bridge of Volantis",
          GoTLandmark:
            "The Long Bridge in the Free City of Volantis — which is depicted in the series’ fifth season — used the Roman Bridge in Cordoba, Spain for principal photography.",
          Location: "Roman Bridge in Cordoba, Spain",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fthe-long-bridge-of-volantis-cordoba-spain-GOTFILMING0419.jpg",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-5.0238, 37.8074],
        },
        properties: {
          GoT: "Highgarden",
          GoTLandmark:
            "In the fourth episode of season seven, fans finally got a look at Highgarden, the home of the House Tyrell. Sadly, it was seized by Jaime Lannister. But, the filming location, the Castillo de Almodóvar del Río in the Andalusian province of Córdoba, remains free of the Lanister grip. The location is open to the public so go explore the towers and walls, and make sure to pick up some Game of Thrones swag before the final episode this summer.",
          Location: "Castillo de Almodóvar del Río in Córdoba",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F05%2Fhighgarden-almodovar-del-rio-spain-GOTFILMING0419.jpg",
        },
      },
    ],
  },
}

// export default landmarks
