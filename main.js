console.log("hey test");


/* getting lat and lat */
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
   

    /* Getting temperature from free code camp API */
    fetch('https://fcc-weather-api.glitch.me/api/current?lat='+ latitude + '&lon=' +longitude)
    .then(response => response.json())
    .then(data => console.log((data)))
});







