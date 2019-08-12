/* getting lat and lat */
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("lon").innerHTML = longitude;
   
    /* getting weather details from API */
    const weatherreq = async () => {
        const response = await fetch('https://fcc-weather-api.glitch.me/api/current?lat='+ latitude + '&lon=' +longitude);
        const json = await response.json();
        console.log(json);
        document.getElementById("weather_icon").src = json.weather[0].icon;
        var day_type = json.weather[0].description;
        document.getElementById("day").innerHTML = day_type;
        var loc = json.name;
        document.getElementById("place").innerHTML = loc;
        var temp = Math.round(json.main.temp);
        document.getElementById("temperature").innerHTML = temp;
      
    }
    weatherreq();

    /* toggle */
    
});







