const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

fetch(apiURL)
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

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('desc').setAttribute('alt', desc);
  });
