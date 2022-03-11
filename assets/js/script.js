/* API Key */
const apiKey = "449a366ead9b85f401e6712d2454211d";

/* CITY DECLARATION - Declare City to Store Searched Variable */
var city = "";

/* PAST CITY DECLARATION - Declare pastCity to Store Past Searched Variable */
var pastCity = "";

/* USER FORM - Declare User Form Variable */
var userFormEl = document.getElementById("user-form");

/*CITY INPUT - Declare City Input Variable */
var cityInputEl = document.querySelector(".form-input");

/* CITY SEARCH TERM - Declare City Search Term Variable */
var citySearchTerm = document.querySelector("#city-search-term");

/* CITY SEARCH HISTORY - Declare Container for City Search History */
var citySearchContainer = document.getElementById("city-history");

/* CURRENT WEATHER ICON - Declare Current Weather Icon */
var cityWeatherIcon = document.getElementById("current-icon");

// TODO: Find a way to use localStorage to store persistent data (past city searches)
var formSubmitHandler = function (event) {
  // Stops page from refreshing
  event.preventDefault();

  var city = cityInputEl.value.trim();
  // Gets value from the city input element and runs getCityWeather function
  if (city) {
    getCityWeather(city);
    // Clear out old content
    cityInputEl.value = "";
  }
};

var getCityWeather = function (city) {
  // current.uvi  = Current UV index
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    apiKey;

  fetch(apiUrl).then(function (response) {
    console.log(response);

    if (response.ok) {
      response.json().then(function (data) {});

      // Else statement if city does not return with ok response
    } else {
      alert("Error - City " + response.statusText);
    }
  });
};

// Add Event Listeners to Forms
userFormEl.addEventListener("submit", formSubmitHandler);
