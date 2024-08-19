const searchBox = document.querySelector("#searchBox");
const searchIcon = document.querySelector("#searchIcon");
const weatherImg = document.querySelector("#weatherImg-box img");
const tempratureEL = document.querySelector("#temprature");
const tempCityEL  = document.querySelector("#temp-city");

const humidityEL = document.querySelector("#humidity");
const windSpeedEL = document.querySelector("#wind-speed");

const apiKey = "d2ecec3ad43489f4c********";

// let city = tempCityEL.textContent

// searchIcon.addEventListener("click",weatherFetch);

async function weatherFetch(){

    let cityName =  searchBox.value;
    console.log(cityName)
    let apiId = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    let weatherDetails = await fetch(apiId);
    let weatherData = await weatherDetails.json();
    // console.log(weatherData);

    let TempValue = Math.round(weatherData.main.temp);
    let HumidityVal = weatherData.main.humidity;
    let cityNameVal = weatherData.name;
    let WeatherType = weatherData.weather[0].main;
    let windSpeed = Math.round(weatherData.wind.speed);

    // update value 
    tempratureEL.innerHTML = TempValue;
    tempCityEL.innerHTML = cityNameVal;
    humidityEL.innerHTML = HumidityVal;
    windSpeedEL.innerHTML = windSpeed;

    if(WeatherType === "Clouds"){
        weatherImg.setAttribute("src", "./weather-app-images/clouds.png");
    }
    else if(WeatherType === "Mist"){
        weatherImg.setAttribute("src", "./weather-app-images/mist.png");
    }
    else if(WeatherType === "Clear"){
        weatherImg.setAttribute("src", "./weather-app-images/clear.png");
    }
    else if(WeatherType === "Drizzle"){
        weatherImg.setAttribute("src", "./weather-app-images/drizzle.png");
    }
    else if(WeatherType === "Rain"){
        weatherImg.setAttribute("src", "./weather-app-images/rain.png");
    }
    else if(WeatherType === "Snow"){
        weatherImg.setAttribute("src", "./weather-app-images/snow.png");
    }
    else{
        weatherImg.setAttribute("alt", "No Image found");
    }



}
// let placeholder = searchBox.placeholder;

// weatherFetch();
// var cityName = "Mumbai";
searchIcon.addEventListener("click",()=>{
    weatherFetch();

    searchBox.value = "Enter Next City..."
})


//Weather Type = Mist, Clouds,
