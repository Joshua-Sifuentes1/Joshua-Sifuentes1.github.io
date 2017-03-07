$(document).ready(function(){

	"use strict";

	var APPID = "7f8e3aa0aad113510e0c1eaafd1c17b8";
	var url = "http://api.openweathermap.org/data/2.5/forecast/daily";
	var lat;
	var long;

	function getWeather(city) {
		$.get(url, {
			APPID: APPID,
			q: city,
			cnt: 3,
			// lat: 30.2672,
			// lon: 97.7431,
			units: "imperial"
		}).fail(function(data, status){
			alert("Failed to load." + status);
		}).done(function(data){
			addWeatherInfo(data);
			long = data.city.coord.lon;
			lat = data.city.coord.lat;
			showMap();

		});
	}

	function addWeatherInfo(weatherData){
		var htmlString = "";

		weatherData.list.forEach(function(data){
			htmlString += "<div class='box col-md-4 center-block'>";
			htmlString += "<p><h2>" + parseInt(data.temp.max) + "&deg;" + " / " + parseInt(data.temp.min) + "&deg;" + "</h2></p>";
			htmlString += "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
			htmlString += "<p>" + "<strong>" + data.weather[0].main + ": " + "</strong>" + data.weather[0].description + "</p>";
			htmlString += "<p>" + "<strong>Humidity:</strong> " + data.humidity + "%</p>";
			htmlString += "<p>" + "<strong>Wind:</strong> " + data.speed + " mph</p>";
			htmlString += "<p>" + "<strong>Pressure:</strong> " +data.pressure + " mb</p>";
			htmlString += "</div>";
		});
		$("#city-header").html(weatherData.city.name);
		$("#weather-container").html(htmlString);
	}

	getWeather("San Antonio");


	$("#search-button").click(function(){
		var cityLocation = $("#city-name").val();
		getWeather(cityLocation);

	});

	$("body").keyup(function(e){
		if(e.keyCode == 13) {
			var cityLocation = $("#city-name").val();
			getWeather(cityLocation);
			$("#city-name").val("");
		}
	});

	function showMap(){

		var mapOptions = {
				// Set the zoom level
				zoom: 19,

				// This sets the center of the map at our location
				center: {
					lat:  lat,
					lng: long
				}
			};

			// Render the map
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			console.log(mapOptions);

			// Create lat and long for our marker position
			var codeup = { lat: lat, lng: long };

			// Add the marker to our existing map
			var marker = new google.maps.Marker({
				position: codeup,
				map: map,
				draggable:true,
				title:"Drag me!"
			});

		google.maps.event.addListener(marker, 'dragend', function(event){
			lat = marker.getPosition().val();
			long = marker.getPosition().val();
			getWeather();
		});


	}
});