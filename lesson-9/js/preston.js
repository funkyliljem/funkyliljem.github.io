const requestURL='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
  
let card = document.createElement('section');
let h2 = document.createElement('h2');
let motto = document.createElement('p');
let yearFounded = document.createElement('p');
let currentPopulation = document.createElement('p');
let averageRainfall = document.createElement('p');
let image = document.createElement('img');

h2.textContent = towns[i].name;
motto.textContent = "Motto:" + ' ' + towns[i].motto;
yearFounded.textContent = "Year Founded:" + ' ' + towns[i].yearFounded;
currentPopulation.textContent = "Population:" +' ' + towns[i].currentPopulation;
averageRainfall.textContent = "Average Rainfall:" + ' ' + towns[i].averageRainfall;

card.appendChild(h2);
card.appendChild(motto);
card.appendChild(yearFounded);
card.appendChild(currentPopulation);
card.appendChild(averageRainfall);
card.appendChild(image);

image.setAttribute('src', "images/" + towns[i].photo);
image.setAttribute('alt', towns[i].name);

document.querySelector('div.cards').appendChild(card);
    }
    }
  });