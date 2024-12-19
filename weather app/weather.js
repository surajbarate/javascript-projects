const apikey = "6f106ef2bd51ef4fd64bce20824af957";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();
        if (response.ok) {
            document.querySelector("#city-name").innerHTML = data.name;
            document.querySelector("#temperature-value").innerHTML = data.main.temp + "°C";
            document.querySelector("#wind-speed").innerHTML = data.wind.speed + " m/s";
            document.querySelector("#cloud-info").innerHTML = data.clouds.all;
            document.querySelector("#humidity-value").innerHTML = data.main.humidity + "%";
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
const defaultCity = "Mumbai";

weather(defaultCity);

document.querySelector("#search-btn").addEventListener('click', () => {
    const cityInput = document.querySelector("#city-input").value;
    const city = cityInput.trim() === "" ? defaultCity : cityInput;
	if(city){
    weather(city);
	}
	else{
		alert("city is not found....")
	}
});
