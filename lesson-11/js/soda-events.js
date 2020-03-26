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
        if (towns[i].name == "Soda Springs"){
            
            let sodaEvents = document.createElement('section');
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
     

       sodaEvents.appendChild(h2);
       sodaEvents.appendChild(event0);
       sodaEvents.appendChild(event1);
       sodaEvents.appendChild(event2);
       sodaEvents.appendChild(event3);

      

        document.querySelector('#sodaEvents').appendChild(sodaEvents)

    }}
}
);