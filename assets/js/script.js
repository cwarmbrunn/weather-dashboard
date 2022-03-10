/* Declare User Form Variable */
var userFormEl = document.getElementById("#user-form");
/* Declare City Input Variable */
var cityInputEl = document.querySelector("#city");
/* Declare City Container Variable */
var cityContainerEl = document.querySelector("#weather-container");
/* Declare City Search Term Variable */
var citySearchTerm = document.querySelector("#city-search-term");
/* Declare City Buttons Variable */
var cityButtonsEl = document.querySelector("#city-buttons");

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
  // var apiUrl = "" +
};
