const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const weekTemp = document.querySelector('#temp');

    weekTemp.textContent = Math.round(jsObject.main.temp);

    const fivedayforecast = jsObject.list.filter(x => 
    x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);


    for (let i=0; i<fivedayforecast.length; i++)  {
    document.getElementById(`forecast${i+1}`).
    textContent = fivedayforecast[i].main.temp;}



   const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
   const desc = jsObject.weather[0].description;  // note how we reference the weather array
   document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
   document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
   document.getElementById('icon').setAttribute('alt', desc);
 
  });
   
