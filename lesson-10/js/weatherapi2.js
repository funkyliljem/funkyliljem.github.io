/*Weather Summary*/
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('current-temp');
    const humidity = document.querySelector('humidity');
    const speed = document.querySelector('speed');
    
    currentTemp.textContent = jsObject.main.temp;
    humidity.textContent = jsObject.main.humidity;
    speed.textContent = jsObject.wind.speed;


/*Five Day Forecast*/
const apiFive = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

fetch(apiFive)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

const imagesrc = jsObject.weather[0].icon // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array


document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('description').setAttribute('alt', desc);


  });})