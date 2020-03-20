let weekDate = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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

let n = new Date();
let dayName = weekDate[n.getDay()];
let monthName = months[n.getMonth()];
let fulldate = weekDate[n.getDay()] + ", " + months[n.getMonth()] + " " + n.getDate() + ", " +
n.getFullYear();

document.getElementById("currentdate").textContent = fulldate;