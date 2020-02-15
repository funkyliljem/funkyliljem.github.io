const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);


let windChill=35.74+0.6215*tempF-(35.75*(speed**0.16))+0.4275*(tempF*(speed**0.16));
return windChill; 
}

let message;
if (temp <= 50 && windspeed >= 3) {
    message = "The wind chill is" + "windChill";
}
else {
    message = 'N/A the windchill does not apply';






function checkHeight() {
    let driver = parseFloat(document.getElementById('driverBox').value);
    let passenger = parseFloat(document.getElementById('passengerBox').value);

    let message;
    if (driver >= 54 || (temp >= 50 && windspeed >= 3)) {
        message = "The wind chill is" + ;
    }
    else {
        message = 'N/A the windchill does not apply';
    }

    document.getElementById('outputDiv').innerHTML = message;
}

function doInputOutput(){
    let tempF = parseFloat(document.getElementById('inputOne').value);
    let speed = parseFloat(document.getElementById('inputTwo').value);
    let f = windChill(tempF,speed);
    document.getElementById('outputDiv').innerHTML = f;
    }
    
    //Calculations on the windchill without user input or output
    function windChill(tempF,speed){
    let windChill=35.74+0.6215*tempF-(35.75*(speed**0.16))+0.4275*(tempF*(speed**0.16));
    return windChill; 
    }