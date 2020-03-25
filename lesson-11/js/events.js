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

    for (let i = 0; i < events.length; i++ ) {
        if (events[i].name == "Fish Haven"){
            
            let events = document.createElement('section');
            let h2 = document.createElement('h2');
            let event = document.createElement('p');

        h2.textContent = towns[i].name + "Upcoming Events";
        events.textContent = towns[i].events[""];
     

        events.appendChild(h2);
        events.appendChild(event);
      

        document.querySelector('#events').appendChild(events)

    }}
}
);