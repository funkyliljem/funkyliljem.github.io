const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);

const windChill = math.round(35.74+0.6215*temp-(35.75*(speed**0.16))+0.4275*(temp*(speed**0.16));

if (temp <= 50 && speed > 3) {
    message = windchill; 
}
else {
    message = "N/A";
}
document.getElementById('windchill').innerHTML =`${windChill}`;