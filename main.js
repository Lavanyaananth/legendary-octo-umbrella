console.log("hey test");
console.log("my key is key=AIzaSyBXuhdA2pvUROqskcOczHLyARdFjQ58VzU");

/* getting lat and lat */
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
    /* getting location from Google */
    fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='  + latitude + ',' + longitude +'& result_type=postal_codes&key=AIzaSyBXuhdA2pvUROqskcOczHLyARdFjQ58VzU')
    .then(response => response.json())
    .then(data => console.log((data)))

    const request = async () => {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='  + latitude + ',' + longitude +'& result_type=postal_codes&key=AIzaSyBXuhdA2pvUROqskcOczHLyARdFjQ58VzU');
        const json = await response.json();
        console.log(json.results[4].formatted_address);
        var loc = json.results[4].formatted_address;
        document.getElementById("place").innerHTML = loc;
    }
    request();

    /* Getting temperature from free code camp API */
    fetch('https://fcc-weather-api.glitch.me/api/current?lat='+ latitude + '&lon=' +longitude)
    .then(response => response.json())
    .then(data => console.log((data)))
});







