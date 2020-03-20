const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

const weekDay = [ 
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let w = new Date();

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    const forecast = jsObject.list.filter 
    (x => x.dt_txt.includes ('18:00:00'));;
    console.log(forecast);

    for (let i = 0; i < jsonObject.list[i].length; i++) { 

    let weatherReport = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let temperature = document.createElement('p');


    h3.textContent = weekDay[w.getDay()];
    temperature.textContent = Math.round(jsObject.list[i].main.temp);

    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
    image.setAttribute('alt', jsObject.list[i].weather[0].description);
    
    weatherReport.appendChild(h3);
    weatherReport.appendChild(image);
    weatherReport.appendChild(temperature);

    document.querySelector('div.forecast').appendChild(weatherReport);

    }})