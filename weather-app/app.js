const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Delhi';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3376b7e3b6msh08e5c5fa9e402aep176045jsndd8c3ac75447',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

async function fetchWeather() {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchWeather();