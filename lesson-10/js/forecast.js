const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

let weekDay = []; 
    weekDay[0]="Sunday";
    weekDay[1]="Monday";
    weekDay[2]="Tuesday";
    weekDay[3]="Wednesday";
    weekDay[4]="Thursday";
    weekDay[5]="Friday";
    weekDay[6]="Saturday";


fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => 
        x.dt_txt.includes('18:00:00'));
        console.log(forecast);

    for (let i=0; i<jsObject.list.length; i++) {
        

    let forecasts = document.createElement('section');
    let h2 = document.createElement('h2');
    let image = document.createElement('img');
    let temperature = document.createElement('p');

    h2.textContent = weekDay[d.getDay()];
    temperature.textContent = Math.round(jsObject.list[i].main.temp);

    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
    image.setAttribute('alt', jsObject.list[i].jsObject.weather[0].description);
    
    forecasts.appendChild(header);
    forecasts.appendChild(image);
    forecasts.appendChild(temperature);

    document.querySelector('div.forecast').appendChild(forecasts);

    };
})
