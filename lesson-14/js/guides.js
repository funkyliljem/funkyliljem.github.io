const requestURL = 'https://api.jsonbin.io/b/5e8d72de980e481b8aa0c4f7/2';

fetch(requestURL)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const guides = jsonObject['guides'];

    for (let i = 0; i < guides.length; i++ ) {
  
let guide = document.createElement('section');
let h2 = document.createElement('h2');
let cert = document.createElement('h3');
let years = document.createElement('h3');
let email = document.createElement('h3');
let blurb = document.createElement('p');
let image = document.createElement('img');

h2.textContent = guides[i].name;
cert.textContent = "Certification Level:" +' ' + guides[i].cert;
years.textContent = "Years of Experience:" + ' ' + guides[i].years;
email.textContent = "E-mail:" +' ' + guides[i].email;
blurb.textContent = "About Me:" +' ' + guides[i].blurb;

image.setAttribute('src', guides[i].imageurl);
image.setAttribute('alt', guides[i].name + ' ' + guides[i].cert);

guide.appendChild(h2);
guide.appendChild(cert);
guide.appendChild(years);
guide.appendChild(email);
guide.appendChild(blurb);
guide.appendChild(image);

document.querySelector('div.guides').appendChild(guide);

    }
  });