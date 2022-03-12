/* API Key */
const apiKey = "449a366ead9b85f401e6712d2454211d";

/* CITY DECLARATION - Declare City to Store Searched Variable */
var city = "";

/* USER FORM - Declare User Form Variable */
var userFormEl = document.getElementById("user-form");

/*CITY INPUT - Declare City Input Variable */
var cityInputEl = document.querySelector(".form-input");

/* CITY SEARCH HISTORY - Declare Container for City Search History */
var citySearchContainerEl = document.getElementById("city-history");

/* CURRENT WEATHER CONTAINER - Declare Current Weather Area */
var cityCurrentWeatherEl = document.getElementById("current-weather");

/* DAY ONE - FUTURE WEATHER */

var dayOne = document.getElementById("weather1");

/* DAY TWO - FUTURE WEATHER */
var dayTwo = document.getElementById("weather2");

/* DAY THREE - FUTURE WEATHER */
var dayThree = document.getElementById("weather3");

/* DAY FOUR - FUTURE WEATHER */
var dayFour = document.getElementById("weather4");

/* DAY FIVE - FUTURE WEATHER */
var dayFive = document.getElementById("weather5");

var formSubmitHandler = function (event) {
  // Stops page from refreshing
  event.preventDefault();

  var city = cityInputEl.value.trim();
  // Gets value from the city input element and runs getCityWeather function
  if (city) {
    getCityWeather(city);
    cityHistory(city);
    // Clear out old content
    cityInputEl.value = "";
  }
};

var getCityWeather = function (city) {
  // current.uvi  = Current UV index
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    // Add in user's city input
    city +
    // Set the units to imperial
    "&units=imperial" +
    // Add in API Key
    "&appid=" +
    apiKey;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        // CREATE CURRENT WEATHER ELEMENTS //
        var cityName = document.createElement("h3");
        var currentDate = document.createElement("p");
        var weatherIcon = document.createElement("img");

        // WEATHER ICON URL //
        var iconUrl = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

        // GET WEATHER ELEMENTS FROM HTML //
        var currentTemp = document.getElementById("current-temp");
        var currentHum = document.getElementById("current-hum");
        var currentWind = document.getElementById("current-wind");
        // **TODO: Need to find a way to pull the UV index
        var currentUV = document.getElementById("current-uv");

        // SET CITY NAME AND DATE TEXT CONTENT //
        cityName.textContent = data.city.name;

        // **TODO: Need to revisit/adjust this
        currentDate.textContent = data.list[0].dt_txt;

        // SET ATTRIBUTE FOR ICON URL //
        weatherIcon.setAttribute("src", iconUrl);

        // Prepending name, icon, and date to the current weather element
        cityCurrentWeatherEl.prepend(cityName);
        cityCurrentWeatherEl.prepend(weatherIcon);
        cityCurrentWeatherEl.prepend(currentDate);

        // SET WEATHER ELMENTS TO DATA POINTS FROM API URL //
        currentTemp.innerText = data.list[0].main.temp + "  °F";
        currentHum.innerText = data.list[0].main.humidity + " %";
        currentWind.innerText = data.list[0].wind.speed + " MPH";

        // **TODO: Figure out how to grab UV Index + present color for favorable, moderate, or severe //
        currentUV.innerHTML =
          "<p> UV Index: <span class ='current bg-danger rounded py-2 px-2 text-white'> Hello World!</span></p>";

        // DAY 1 DATA //

        var day1Icon = document.createElement("img");

        var dayOneUrl = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;

        var day1Temp = document.getElementById("temp-1");
        var day1Wind = document.getElementById("wind-1");
        var day1Hum = document.getElementById("hum-1");
        //** TODO: Add in Day 1 Date

        // **TODO: Need to revisit/adjust this

        currentDate.textContent = data.list[1].dt_txt;
        dayOne.prepend(day1Icon);
        
        day1Icon.setAttribute("src", dayOneUrl);
        day1Temp.innerText = data.list[1].main.temp + "  °F";
        day1Wind.innerText = data.list[1].main.humidity + " %";
        day1Hum.innerText = data.list[1].wind.speed + " MPH";

        // DAY 2 DATA //

        var day2Icon = document.createElement("img");

        var dayTwoUrl = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;

        var day2Temp = document.getElementById("temp-2");
        var day2Wind = document.getElementById("wind-2");
        var day2Hum = document.getElementById("hum-2");
        //** TODO: Add in Day 2 Date

        // **TODO: Need to revisit/adjust this
        currentDate.textContent = data.list[2].dt_txt;

        dayTwo.prepend(day2Icon);

        day2Icon.setAttribute("src", dayTwoUrl);
        day2Temp.innerText = data.list[2].main.temp + "  °F";
        day2Wind.innerText = data.list[2].main.humidity + " %";
        day2Hum.innerText = data.list[2].wind.speed + " MPH";

        // DAY 3 DATA //
        var day3Icon = document.createElement("img");

        var dayThreeUrl = `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`;

        var day3Temp = document.getElementById("temp-3");
        var day3Wind = document.getElementById("wind-3");
        var day3Hum = document.getElementById("hum-3");
        //** TODO: Add in Day 3 Date

        // **TODO: Need to revisit/adjust this
        currentDate.textContent = data.list[3].dt_txt;

        dayThree.prepend(day3Icon);
   
        day3Icon.setAttribute("src", dayThreeUrl);
        day3Temp.innerText = data.list[3].main.temp + "  °F";
        day3Wind.innerText = data.list[3].main.humidity + " %";
        day3Hum.innerText = data.list[3].wind.speed + " MPH";

        // DAY 4 DATA //
        var day4Icon = document.createElement("img");

        var dayFourUrl = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`;

        var day4Temp = document.getElementById("temp-4");
        var day4Wind = document.getElementById("wind-4");
        var day4Hum = document.getElementById("hum-4");
        //** TODO: Add in Day 4 Date

        // **TODO: Need to revisit/adjust this
        currentDate.textContent = data.list[4].dt_txt;

        dayFour.prepend(day4Icon);

        day4Icon.setAttribute("src", dayFourUrl);
        day4Temp.innerText = data.list[4].main.temp + "  °F";
        day4Wind.innerText = data.list[4].main.humidity + " %";
        day4Hum.innerText = data.list[4].wind.speed + " MPH";

        // DAY 5 DATA //
        var day5Icon = document.createElement("img");

        var dayFiveUrl = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`;

        var day5Temp = document.getElementById("temp-5");
        var day5Wind = document.getElementById("wind-5");
        var day5Hum = document.getElementById("hum-5");
        //** TODO: Add in Day 5 Date

        // **TODO: Need to revisit/adjust this
        currentDate.textContent = data.list[5].dt_txt;

        dayFive.prepend(day5Icon);
   
        day5Icon.setAttribute("src", dayFiveUrl);
        day5Temp.innerText = data.list[5].main.temp + "  °F";
        day5Wind.innerText = data.list[5].main.humidity + " %";
        day5Hum.innerText = data.list[5].wind.speed + " MPH";
      });

      // Else statement if city does not return with ok response
    } else {
      alert("Error - City " + response.statusText);
    }
  });
};

// **TODO: Set up city history function - this will allow users to see past cities they've searched
var cityHistory = function () {
  // Add an onClick handler to each li to run the search again

  // Step #1: Create the Element
  var searchTermOne = document.createElement("li");

  // Step #2: Append it to the unordered list

  citySearchContainerEl.append(searchTermOne);

  // Step #3: Add inner HTML

  searchTermOne.innerHTML =
    "<button type= 'text-align-center' class='btn'> Hello World! </button>";

  // Step #4: Add the Event Listener Handler

  // searchTermOne.addEventListener("click", alert("Hello World!"));
  // Look up event.target to get the "city" name out of the element that was clicked
  // Event handler will need to get the name of the city out of the element that was clicked on and
};

// **TODO: Find a way to use localStorage to store persistent data (past city searches)

// Add Event Listeners to Forms
userFormEl.addEventListener("submit", formSubmitHandler);
