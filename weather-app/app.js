const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3376b7e3b6msh08e5c5fa9e402aep176045jsndd8c3ac75447',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

// const cloud_pct = document.querySelector("#cloud_pct");
const feels_like = document.querySelector("#feels_like");
const humidity = document.querySelector("#humidity");
const max_temp = document.querySelector("#max_temp");
const min_temp = document.querySelector("#min_temp");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const temp = document.querySelector("#temp");
const wind_degrees = document.querySelector("#wind_degrees");
const wind_speed = document.querySelector("#wind_speed");
const submit = document.querySelector("#submit");
const city = document.querySelector("#city");
const cityName= document.querySelector("#cityName");
 async function getWeather(city){
	cityName.innerHTML=city;
	try {
		const response = await fetch(url + city, options);
		const result = await response.json();
		
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		// Update DOM elements safely
		if (cloud_pct) cloud_pct.innerHTML = result.clouds.all;
		if (feels_like) feels_like.innerHTML = result.main.feels_like;
		if (humidity) humidity.innerHTML = result.main.humidity;
		if (max_temp) max_temp.innerHTML = result.main.temp_max;
		if (min_temp) min_temp.innerHTML = result.main.temp_min;
		if (sunrise) sunrise.innerHTML = result.sys.sunrise;
		if (sunset) sunset.innerHTML = result.sys.sunset;
		if (temp) temp.innerHTML = result.main.temp;
		if (wind_degrees) wind_degrees.innerHTML = result.wind.deg;
		if (wind_speed) wind_speed.innerHTML = result.wind.speed;

		console.log(result);
	} catch (error) {
		console.error("Error fetching weather:", error);
	}
}
	




submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");