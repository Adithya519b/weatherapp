const apiKey = "697cfa0cd602448c90b135327262406";

const city = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");

async function getWeather(location){

const url =
`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

try{

const response = await fetch(url);

const data = await response.json();

if(data.error){

alert(data.error.message);

return;

}

document.getElementById("cityName").innerHTML =
data.location.name;

document.getElementById("temp").innerHTML =
data.current.temp_c + "°C";

document.getElementById("condition").innerHTML =
data.current.condition.text;

document.getElementById("humidity").innerHTML =
data.current.humidity + "%";

document.getElementById("wind").innerHTML =
data.current.wind_kph + " km/h";

document.getElementById("country").innerHTML =
data.location.country;

document.getElementById("time").innerHTML =
data.location.localtime;

document.getElementById("icon").src =
"https:" + data.current.condition.icon;

}
catch(error){

alert("Unable to fetch weather.");

}

}

searchBtn.addEventListener("click",()=>{

if(city.value!="")
getWeather(city.value);

});

city.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

getWeather(city.value);

}

});

// Default City

getWeather("London");