let latitude = 22.78, longitude = 88.36
mapboxgl.accessToken = "pk.eyJ1IjoicHJpeWFtaXNocmEwOTkiLCJhIjoiY2xndjFuMGl6MDFydzNkcGY5YzF2dTloeSJ9.HpImt8TD9YU0kxa5SbLiQw"


var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
}); 

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([77.557381, 13.011190])
.addTo(map);

var img3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([77.229507, 28.612911])
.addTo(map);

var img4 = document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([77.2588, 28.5535])
.addTo(map);

var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
    element:img5
})
.setLngLat([88.3426, 22.5448])
.addTo(map);


map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);