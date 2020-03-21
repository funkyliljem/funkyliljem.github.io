const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

const weekDay = [];
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes ('18:00:00'));
    console.log(forecast);

    for (i = 0; i < forecast.length; i++) { 

    let w = new Date(forecast[i].dt_txt);
    console.log(w.getDay());

    let weatherReport = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let temperature = document.createElement('p');

    h3.textContent = weekDay[w.getDay()];
    temperature.textContent = Math.round(forecast[i].main.temp);

    image.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png');
    image.setAttribute('alt', forecast[i].weather[0].description);
    
    weatherReport.appendChild(h3);
    weatherReport.appendChild(image);
    weatherReport.appendChild(temperature);

    document.querySelector('#forecast').appendChild(weatherReport);

    }})