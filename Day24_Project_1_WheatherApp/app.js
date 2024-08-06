const apiKey = '162029e9e6878957ce31876d402cd650';

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the entire response
            displayWeather(data);
            getForecast(city); // Fetch forecast data
        })
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    console.log(data); // Add this line to inspect the response
    const city = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById('city').innerText = `City: ${city}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('condition').innerText = `Condition: ${condition}`;
    document.getElementById('weather-info').style.backgroundImage = `url(http://openweathermap.org/img/wn/${icon}.png)`;
}


function getForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayForecast(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    data.list.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        const temperature = forecast.main.temp;
        const condition = forecast.weather[0].description;
        const icon = forecast.weather[0].icon;

        const forecastElement = document.createElement('div');
        forecastElement.innerHTML = `
            <p>Date: ${date}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${condition}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${condition}">
        `;
        forecastContainer.appendChild(forecastElement);
    });
}
