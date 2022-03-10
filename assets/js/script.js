/* API Key */
const apiKey = "";

// Declare City to Store Searched Variable */
var city = "";

/* Declare User Form Variable */
var userFormEl = document.getElementById("user-form");

/* Declare City Input Variable */
var cityInputEl = document.querySelector("#form-input");

/* Declare City Search Term Variable */
var citySearchTerm = document.querySelector("#city-search-term");

// TODO: Find a way to use localStorage to store persistent data (past city searches)
var formSubmitHandler = function (event) {
  // Stops page from refreshing
  event.preventDefault();

  // Gets value from the city input element and runs getCityWeather function
  var city = cityInputEl;
  console.log("Hello World!");
  if (city) {
    getCityWeather(city).trim();
    // Clear out old content
    cityContainerEl.textContent = "";
    cityInputEl.value = "";
  }

  /* TODO: Fix else statement to check for valid city name 
else {
 alert("Please enter a valid U.S. city name");
 }
 */
};

var getCityWeather = function (city) {
  // Format the One Call API - Weather Dashboard URL

  // current.uvi  = Current UV index
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      { city } +
      "&appid=" +
      { apiKey }
  );
};

// Add Event Listeners to Forms
userFormEl.addEventListener("submit", formSubmitHandler);
