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
let fulldate = daynames[d.getDay()] + "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion";

document.getElementById("currentdate").textContent = fulldate;