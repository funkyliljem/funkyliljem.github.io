const getURL= "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(getURL)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const towns = jsonObject['towns'];
    console.log(towns);

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven"){
            
            let fishHavenEvents = document.createElement('section');
            let h2 = document.createElement('h2');
            let event0 = document.createElement('p');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');

        h2.textContent = towns[i].name + " " + "Upcoming Events";
        event0.textContent = towns[i].events[0];
        event1.textContent = towns[i].events[1];
        event2.textContent = towns[i].events[2];
        event3.textContent = towns[i].events[3];
     

       fishHavenEvents.appendChild(h2);
       fishHavenEvents.appendChild(event0);
       fishHavenEvents.appendChild(event1);
       fishHavenEvents.appendChild(event2);
       fishHavenEvents.appendChild(event3);

      

        document.querySelector('#fishhaven-events').appendChild(fishHavenEvents)

    }}
}
);