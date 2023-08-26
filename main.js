let longtitude=77.22476293394018, latitude=28.608061229469886 

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

//the variable map is basically the bag containing the whole Mapbox Map as an Object
var map = new mapboxgl.Map({
    container: 'map', //container ID
    style: 'mapbox://styles/mapbox/streets-v11', //style URL
    center: [longtitude, latitude], //starting position on the map
    zoom: 6 //starting zoom level
})

//A Geocoder adds geocoding control to a web map, enabling users to search the map for a place.

//It adds the control by loading the mapbox-gl-geocoder plugin inside a <script> tag, 
//then using map.addControl to add the control with MapboxGeocoder defined in the options.
map.addControl(
    new MapboxGeocoder ({ //MapboxGeocoder is also a class
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)

//All the stuff below is just the image markers of the 
//tourist destinations which will be showed on the map
//querySelector is JS attribute to access HTML elements

var img1 = document.querySelector("#amber"); 

//Create a Amber Palace, Jaipur Marker and add it to the map
var marker1 = new mapboxgl.Marker({
    element: img1
})
    .setLngLat([75.85133, 26.98547])
    .addTo(map)


var img2 = document.querySelector("#gateway")

//Gateway of India, Mumbai Marker and adding it to the map

var marker2 = new mapboxgl.Marker({
    element: img2
})

    .setLngLat([72.8348796016917, 18.922207361429283])
    .addTo(map)


var img3 = document.querySelector("#gate")

//India Gate

var marker3 = new mapboxgl.Marker({
    element: img3
})

    .setLngLat([77.22942869892884, 28.60592893174325])
    .addTo(map)


var img4 = document.querySelector("#lotus")

//Lotus Temple
var marker4 = new mapboxgl.Marker({
    element: img4
})
    .setLngLat([77.25888004059192, 28.553671029673854])
    .addTo(map)


var img5 = document.querySelector("#victoria")

//Victoria Memorial

var marker5 = new mapboxgl.Marker({
    element: img5
})

    .setLngLat([88.34290111898407, 22.5449369956444])
    .addTo(map)


//Grand Canyon
var img6 = document.querySelector("#canyon")

var marker6 = new mapboxgl.Marker({
    element: img6
})  
    .setLngLat([-112.22811903726956, 36.29010200731467])
    .addTo(map)


//Disney Land

var img7 = document.querySelector("#disney-land")

var marker7 = new mapboxgl.Marker({
    element: img7
})
    .setLngLat([-117.91904930524628, 33.812350285707204])
    .addTo(map)


//Harvard University
var img8 = document.querySelector("#harvard")

var marker8 = new mapboxgl.Marker({
    element: img8
})
    .setLngLat([-71.11743341145055, 42.37460321682586])
    .addTo(map)


//Statue of Liberty

var img9 = document.querySelector("#liberty")

var marker9 = new mapboxgl.Marker({
    element: img9
})
    .setLngLat([-74.04409270731094, 40.689338858662886])
    .addTo(map)


//Space Needle

var img10 = document.querySelector("#space-needle")

var marker10 = new mapboxgl.Marker({
    element: img10
})
    .setLngLat([-122.34912719903214, 47.620629208987694])
    .addTo(map)