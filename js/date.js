let daynames = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"
];

let months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = d.getFullYear();

document.getElementById("currentdate").textContent = fulldate; 


 