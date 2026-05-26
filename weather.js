async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "466ddaa21a8de191e9f608bd11a56acb";

let url = "https://api.openweathermap.org/data/2.5/weather?q="
+ city +
"&appid="
+ apiKey +
"&units=metric";

try{

let response = await fetch(url);

let data = await response.json();

if(data.cod != 200){
alert(data.message);
return;
}

document.getElementById("cityName").innerHTML = data.name;

document.getElementById("temp").innerHTML =
"🌡 Temperature : " + data.main.temp + " °C";

document.getElementById("condition").innerHTML =
"☁ Condition : " + data.weather[0].description;

document.getElementById("humidity").innerHTML =
"💧 Humidity : " + data.main.humidity + "%";

document.getElementById("wind").innerHTML =
"🌬 Wind Speed : " + data.wind.speed + " m/s";

}
catch(error){

alert("Weather not loading");

}

}