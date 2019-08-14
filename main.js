/* getting lat and lat */
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
        
    /* getting weather details from API */
    const weatherreq = async () => {
        const response = await fetch('https://fcc-weather-api.glitch.me/api/current?lat='+ latitude + '&lon=' +longitude);
        const json = await response.json();
        console.log(json);

        document.getElementById('foo').onclick = function(){
        
        }

        document.getElementById("weather_icon").src = json.weather[0].icon;
        var day_type = json.weather[0].description;
        document.getElementById("day").innerHTML = day_type ;
        var loc = json.name;
        document.getElementById("place").innerHTML = loc;
        var temp = Math.round(json.main.temp);
        document.getElementById("temperaturec").innerHTML = temp + ' '+ '&#x2103'  ;
        console.log("testing conversion");
        document.getElementById("temperaturef").innerHTML = Math.round(temp * 9/5 +32) +  ' '+ '&#x2109'
       
        document.getElementById("foo").onclick = function(){
            var x = document.getElementById("temperaturef");
            var y = document.getElementById("temperaturec");
            console.log(x);
            if (window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
                x.style.display = "block";
                y.style.display = "none";
            } else {
                x.style.display = "none";
                y.style.display = "block";
            }
        }
              
    }
    weatherreq(); 
   
});







