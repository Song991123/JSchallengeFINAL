/** crateDate : 2024-02-04
 *  목적 : 위치 및 날씨 추적 js **/

// --------------- Strings ---------------
const API_KEY = "c70646a23d6c4a7b45776063137d4e99";

// --------------- Functoins ---------------
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather    = document.querySelector("#weather span");
        weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp}°C`;

        console.log(data.locationName);
    });
}

function onGeoError(){
    alert("gps navigation failed");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);