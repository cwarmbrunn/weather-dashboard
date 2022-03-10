/* API Key */
const apiKey = "54ac21503fc0753a2540e683d733804c";

// Declare City to Store Searched Variable */
var city = "";
/* Declare User Form Variable */
var userFormEl = document.getElementById("#user-form");
/* Declare City Input Variable */
var cityInputEl = document.querySelector("#city");
/* Declare City Search Term Variable */
var citySearchTerm = document.querySelector("#city-search-term");

// TODO: Find a way to use localStorage to store persistent data (past city searches)
var formSubmitHandler = function (event) {
  // Stops page from refreshing
  event.preventDefault();

  // Gets value from the city input element
  var city = cityInputEl.trim();
  if (city) {
    getCityWeather(city);
    // Clear out old content
    cityContainerEl.textContent = "";
    cityInputEl.value = "";
  } else {
    alert("Please enter a city name");
  }
};

var getCityWeather = function (city) {
  // Format the One Call API - Weather Dashboard URL

  // current.uvi  = Current UV index
  fetch(
    "https://api.openweathermap.org/data/2.5/onecall?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  );
};
