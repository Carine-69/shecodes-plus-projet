function updatedWEather(response) {
    let temperatureElement = document.querySelector(".temp-standard"); // Change to querySelector
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-data");
    let descriptionElement  = document.querySelectorAll("#description");
    let humidityElement = document.querySelector("#humidity");
    let windspeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
   

    cityElement.innerHTML = response.data.city;
    descriptionElement[0].innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatData(date);
    temperatureElement.innerHTML = Math.round(temperature) + "°C";
}



function formatData(date){
    let minutes = date.getMinutes();
      let hours = date.getHours();
    let days = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
];
 if(minutes <10) {
       minutes = `0${minutes}`;
    }

       
       
             let day = days[date.getDay()];
  return `${day}  ${hours}:${minutes}`
  
}
function searchCity(city) {
    let apiKey = "78o1309884534590dt047b4a23f7d6b9"; 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(updatedWEather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city");
    searchCity(city.value); 
}

let searchFormElement = document.querySelector(".searchForm");
searchFormElement.addEventListener("submit", handleSearchSubmit);