mapboxgl.accessToken =
  "pk.eyJ1IjoiZXN0aGVya2ltMDk5OCIsImEiOiJja242c2RhYzcwaDN6MzFwNmprYnQwam9pIn0.K2pA-tjW3c4VoN_eGv30gw"
let styleUrl = "mapbox://styles/estherkim0998/ckni6v3a402901cuegk3b5w3o"
var map = new mapboxgl.Map({
  container: "map", // container ID
  style: styleUrl, // style URL
  center: [-36.57876273573552, 40.56329504513684],
  zoom: 2.38,
  minZoom: 2.1,
  maxZoom: 6,
  attributionControl: false,
})

map.on("load", function () {
    map.addSource("landmarks", landmarks)

    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "landmarks",
      filter: ["has", "point_count"],
      paint: {
        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 100
        //   * Yellow, 30px circles when point count is between 100 and 750
        //   * Pink, 40px circles when point count is greater than or equal to 750
        "circle-color": "#67331E",
        "circle-radius": ["step", ["get", "point_count"], 15, 3, 15, 4, 20, 5, 25, 6, 30],
      },
    })

    map.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: "landmarks",
      filter: ["has", "point_count"],
      paint: { "text-color": "#FCFEF0" },
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
        // "text-allow-overlap": true,
      },
    })

    map.addLayer({
      id: "landmark",
      type: "circle",
      source: "landmarks",
      filter: ["!", ["has", "point_count"]],
      // layout: {
      //   "icon-image": "custom-marker",
      //   "icon-allow-overlap": true,
      //   "icon-size": 0.5,
      // },
      paint: {
        "circle-color": "#67331E",
        "circle-radius": 6,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#fff",
      },
    })

  // inspect a cluster on click
  map.on("click", "clusters", function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    })
    var clusterId = features[0].properties.cluster_id
    map.getSource("landmarks").getClusterExpansionZoom(clusterId, function (err, zoom) {
      if (err) return

      map.easeTo({
        center: features[0].geometry.coordinates,
        zoom: zoom,
      })
    })
  })

  map.on("mouseenter", "clusters", function () {
    map.getCanvas().style.cursor = "pointer"
  })
  map.on("mouseleave", "clusters", function () {
    map.getCanvas().style.cursor = ""
  })
})

// When a click event occurs on a feature in the landmarks layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on("click", "landmark", function (e) {
  let landmark = e.features[0]
  var coordinates = landmark.geometry.coordinates.slice()
  var description = landmark.properties.description

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
  }

  let popupHTML = `
          <div style="">
            <div style="background-image:url(${landmark.properties.imageUrl}); background-size:cover; height: 200px; width: 100%; display: flex; flex-direction: column-reverse;">
              <div style="background: rgba(0,0,0,0.3); text-align: center; padding: 1em 0.5em; display: flex; flex-direction:column;">
                <span style="color:#fff; font-weight: 600; font-size: 24px;">${landmark.properties.GoT}</span>
                <span style="color:#fff; font-weight: 600; font-size: 12px; padding-top: 1em;">${landmark.properties.Location}</span>
              </div>
            </div>
            <p style="text-align:center;">${landmark.properties.GoTLandmark}</p>
          </div>
        `

  new mapboxgl.Popup({ focusAfterOpen: false, maxWidth: "324px" }).setLngLat(coordinates).setHTML(popupHTML).addTo(map)
})

// Change the cursor to a pointer when the mouse is over the landmarks layer.
map.on("mouseenter", "landmark", function () {
  map.getCanvas().style.cursor = "pointer"
})

// // Change it back to a pointer when it leaves.
map.on("mouseleave", "landmark", function () {
  map.getCanvas().style.cursor = ""
})
