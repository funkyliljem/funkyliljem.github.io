const requestURL='https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject) 
    const prophets = jsonObject['prophets']

    for (let i = 0; i < prophets.length; i++ ) {
  
let card = document.createElement('section');
let h2 = document.createElement('h2');
let image= document.createElement('image');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + ' '
+ prophets[i].birthdate + ' ' + prophets[i].birthplace;
image.setAttribute('src', prophets[i].imageurl);

card.appendChild(h2);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);

    };
  });
