const forecastURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');
    const humidity = document.querySelector('#humidity');
    const speed = document.querySelector('#speed');
    const current = document.querySelector('#current');
    
    currentTemp.textContent = Math.round(jsObject.main.temp);
    humidity.textContent = Math.round(jsObject.main.humidity);
    speed.textContent = Math.round(jsObject.wind.speed);
    current.textContent = Math.round(jsObject.main.feels_like);

    const windChill = Math.round(35.74+0.6215*currentTemp-(35.75*(speed**0.16))+0.4275*(currentTemp*(speed**0.16)));

    if (currentTemp <= 50 && speed > 3) {
        document.getElementById('windchill').innerHTML =`${windChill}`;
    }
    else {
      document.getElementById('windchill').innerHTML = "N/A";
        }
})

