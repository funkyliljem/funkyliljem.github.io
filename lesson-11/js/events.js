const getURL= "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(getURL)
  .then(function (response) {
    //console.log(response);
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const events = jsonObject['towns'];
    console.log(events);

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Fish Haven"){
            
            let events = document.createElement('section');
            let h2 = document.createElement('h2');
            let event0 = document.createElement('p');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');

        h2.textContent = towns[i].name + "Upcoming Events";
        events0.textContent = towns[i].events;
        events1.textContent = towns[i].events;
        events2.textContent = towns[i].events;
        events3.textContent = towns[i].events;
     

        events.appendChild(h2);
        events.appendChild(event0);
        events.appendChild(event1);
        events.appendChild(event2);
        events.appendChild(event3);

      

        document.querySelector('#events').appendChild(events)

    }}
}
);