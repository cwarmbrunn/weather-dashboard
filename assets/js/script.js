/* API Key */
const apiKey = "449a366ead9b85f401e6712d2454211d";

/* CITY DECLARATION - Declare City to Store Searched Variable */
var city = "";

/* USER FORM - Declare User Form Variable */
var userFormEl = document.getElementById("user-form");

/* CITY INPUT - Declare City Input Variable */
var cityInputEl = document.querySelector(".form-input");

/* CITY SEARCH HISTORY - Declare Container for City Search History */
var citySearchContainerEl = document.getElementById("city-history");

/* CURRENT WEATHER CONTAINER - Declare Current Weather Area */
var cityCurrentWeatherEl = document.getElementById("city-details");

//* CURRENT UV INDEX - Declare UV Index Container
var UVI = document.getElementById("uvi");

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

let citySearchHistory = JSON.parse(localStorage.getItem(city)) || [];

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
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        // Set lat variable
        var lat = data.city.coord.lat;

        console.log(data.city.coord.lat);
        // Set lon variable
        var lon = data.city.coord.lon;

        console.log(data.city.coord.lon);

        // Get UV Index
        let UVQueryURL =
          "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          apiKey +
          "&cnt=1";
        fetch(UVQueryURL).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              console.log(data);
              console.log(data[0].value);

              // Conditional if value is greater than 7 and less than 11
              if (data[0].value > 7 && data[0].value < 11) {
                UVI.className = "bg-danger text-white rounded py-2 px-2";
                UVI.innerText = data[0].value;

                // Conditional if value is greater than 2 and less than 7
              } else if (data[0].value > 2 && data[0].value < 7) {
                UVI.className = "bg-warning text-white rounded py-2 px-2";
                UVI.innerText = data[0].value;
                // Conditional if value is greater than 0 and less than 2
              } else if (data[0].value > 0 && data[0].value < 2) {
                UVI.className = "bg-success text-white rounded py-2 px-2";
                UVI.innerText = data[0].value;
              }
            });
          } else {
            alert("Error -" + response.statusText);
          }
        });

        // CREATE CURRENT WEATHER ELEMENTS //
        var cityName = document.createElement("h3");
        var currentDate = document.getElementById("current-date");
        var weatherIcon = document.createElement("img");

        // WEATHER ICON URL //
        var iconUrl = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

        // GET WEATHER ELEMENTS FROM HTML //
        var currentTemp = document.getElementById("current-temp");
        var currentHum = document.getElementById("current-hum");
        var currentWind = document.getElementById("current-wind");

        // SET CITY NAME AND DATE TEXT CONTENT //
        cityName.textContent = data.city.name;

        currentDate.innerText = data.list[0].dt_txt;

        // SET ATTRIBUTE FOR ICON URL //
        weatherIcon.setAttribute("src", iconUrl);

        cityCurrentWeatherEl.innerHTML = "";

        // Prepending name, icon, and date to the current weather element
        cityCurrentWeatherEl.prepend(cityName);
        cityCurrentWeatherEl.prepend(weatherIcon);
        cityCurrentWeatherEl.prepend(currentDate);

        // SET WEATHER ELEMENTS TO DATA POINTS FROM API URL //
        currentTemp.innerText = data.list[0].main.temp + "  °F";
        currentHum.innerText = data.list[0].main.humidity + " %";
        currentWind.innerText = data.list[0].wind.speed + " MPH";

        // DAY 1 DATA //

        var day1Icon = document.createElement("img");

        var day1Date = document.getElementById("date1");

        var dayOneUrl = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`;

        var day1Temp = document.getElementById("temp-1");
        var day1Wind = document.getElementById("wind-1");
        var day1Hum = document.getElementById("hum-1");

        day1Date.innerText = data.list[4].dt_txt;

        // Clear Day One Inner HTML
        dayOne.innerHTML = "";
        dayOne.prepend(day1Icon);

        day1Icon.setAttribute("src", dayOneUrl);

        day1Temp.innerText = data.list[4].main.temp + "  °F";
        day1Wind.innerText = data.list[4].wind.speed + " MPH";
        day1Hum.innerText = data.list[4].main.humidity + " %";

        // DAY 2 DATA //

        var day2Icon = document.createElement("img");

        var day2Date = document.getElementById("date2");

        var dayTwoUrl = `https://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`;

        var day2Temp = document.getElementById("temp-2");
        var day2Wind = document.getElementById("wind-2");
        var day2Hum = document.getElementById("hum-2");

        day2Date.textContent = data.list[12].dt_txt;

        // Clear Day Two Inner HTML
        dayTwo.innerHTML = "";

        dayTwo.prepend(day2Icon);

        day2Icon.setAttribute("src", dayTwoUrl);
        day2Temp.innerText = data.list[12].main.temp + "  °F";
        day2Wind.innerText = data.list[12].wind.speed + " MPH";
        day2Hum.innerText = data.list[12].main.humidity + " %";

        // DAY 3 DATA //
        var day3Icon = document.createElement("img");

        var dayThreeUrl = `https://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`;

        var day3Date = document.getElementById("date3");

        var day3Temp = document.getElementById("temp-3");
        var day3Wind = document.getElementById("wind-3");
        var day3Hum = document.getElementById("hum-3");

        day3Date.textContent = data.list[20].dt_txt;

        // Clear Day Three Inner HTML
        dayThree.innerHTML = "";
        dayThree.prepend(day3Icon);

        day3Icon.setAttribute("src", dayThreeUrl);
        day3Temp.innerText = data.list[20].main.temp + "  °F";
        day3Wind.innerText = data.list[20].wind.speed + " MPH";
        day3Hum.innerText = data.list[20].main.humidity + " %";

        // DAY 4 DATA //
        var day4Icon = document.createElement("img");

        var dayFourUrl = `https://openweathermap.org/img/w/${data.list[28].weather[0].icon}.png`;

        var day4Date = document.getElementById("date4");

        var day4Temp = document.getElementById("temp-4");
        var day4Wind = document.getElementById("wind-4");
        var day4Hum = document.getElementById("hum-4");

        day4Date.textContent = data.list[28].dt_txt;

        // Clear Day Four Inner HTML
        dayFour.innerHTML = "";

        dayFour.prepend(day4Icon);

        day4Icon.setAttribute("src", dayFourUrl);
        day4Temp.innerText = data.list[28].main.temp + "  °F";
        day4Wind.innerText = data.list[28].wind.speed + " MPH";
        day4Hum.innerText = data.list[28].main.humidity + " %";

        // DAY 5 DATA //
        var day5Icon = document.createElement("img");

        var dayFiveUrl = `https://openweathermap.org/img/w/${data.list[36].weather[0].icon}.png`;

        var day5Date = document.getElementById("date5");

        var day5Temp = document.getElementById("temp-5");
        var day5Wind = document.getElementById("wind-5");
        var day5Hum = document.getElementById("hum-5");

        day5Date.textContent = data.list[36].dt_txt;

        // Clear Day Five Inner HTML
        dayFive.innerHTML = "";

        dayFive.prepend(day5Icon);

        day5Icon.setAttribute("src", dayFiveUrl);
        day5Temp.innerText = data.list[36].main.temp + "  °F";
        day5Wind.innerText = data.list[36].wind.speed + " MPH";
        day5Hum.innerText = data.list[36].main.humidity + " %";
      });

      // Else statement if city does not return with ok response
    } else {
      alert("Error - City " + response.statusText);
    }
  });
};

// **TODO: Set up city history function - this will allow users to see past cities they've searched
var cityHistory = function (city) {
  // Add an onClick handler to each li to run the search again

  // Step #1: Create the Element
  var searchTerm = document.createElement("li");

  // Step #2: Append it to the unordered list

  citySearchContainerEl.appendChild(searchTerm);

  // Step #3: Add inner HTML

  searchTerm.innerHTML = `<button type= 'text-align-center' class='btn searchTerm'> ${city} </button>`;

  // Step #4: Save to localStorage
  // Use localStorage to collect the city term when a city is searched
  var searchHistory = {
    cityTerm: city,
  };
  citySearchHistory.push(searchHistory);
  localStorage.setItem("city", JSON.stringify(citySearchHistory));

  // Step #5: Add the Event Listener Handler and have it run the getCityWeather(city) function when clicked
  $(".searchTerm").on("click", function () {
    localStorage.getItem($(this).text());

    // Set the city variable equal to the city information from the clicked button and trim any extra spaces
    var city = $(this).text().trim();

    //Run the getCityWeather(city) function
    getCityWeather(city);
  });
};

// Add Event Listeners to Forms
userFormEl.addEventListener("submit", formSubmitHandler);
