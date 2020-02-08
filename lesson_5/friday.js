let now = new Date();
let dayOfWeek = now.getDay();
let message; 
    
    
    if (dayOfWeek == 0 || dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 6) {
    message = ("None!");
    }
     
    else if (dayOfWeek == 5) {
    message = ("Saturday = Preston Pancakes in the Park! 9:00a.m. Saturday at the city park!");
    
    }
    document.getElementById("outputDiv").innerHTML = message;
