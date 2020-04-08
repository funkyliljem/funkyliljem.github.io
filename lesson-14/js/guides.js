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
let h3 = document.createElement('h3');
let cert = document.createElement('p');
let years = document.createElement('p');
let email = document.createElement('p');
let blurb = document.createElement('p');
let image = document.createElement('img');

h3.textContent = guides[i].name;
cert.textContent = "Certification Level:" +' ' + guides[i].cert;
years.textContent = "Years of Experience:" + ' ' + guides[i].years;
email.textContent = "E-mail:" +' ' + guides[i].email;
blurb.textContent = "About Me:" +' ' + guides[i].blurb;

image.setAttribute('src', guides[i].imageurl);
image.setAttribute('alt', guides[i].name + ' ' + guides[i].cert);

guide.appendChild(h3);
guide.appendChild(cert);
guide.appendChild(years);
guide.appendChild(email);
guide.appendChild(blurb);
guide.appendChild(image);

document.querySelector('div.guides').appendChild(guide);

    }
  });