const apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?zip=83549&units=imperial&APPID=4d740699e37a38e6fd92554001fa0cb3';

const temp = parseFloat(document.getElementById('current-temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

const windChill = Math.round(35.74+0.6215*temp-(35.75*(speed**0.16))+0.4275*(temp*(speed**0.16)));

if (temp <= 50 && speed > 3) {
    document.getElementById('windchill').innerHTML = windChill;
}
else {
    message = "N/A";
    }
    document.getElementById('windchill').innerHTML = message;
