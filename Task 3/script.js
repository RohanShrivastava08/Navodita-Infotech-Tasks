// Fetch weather data from OpenWeather API
const fetchWeatherData = async (city) => {
    const apiKey = 'bd749faa074193d1c6ed972b5f2df348';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        return null;
    }
};

// Update weather information on the UI
const updateWeatherUI = (weatherData) => {
    const weatherOutput = document.getElementById('weather-output');
    
    if (weatherData) {
        const { name, main, weather } = weatherData;
        const { temp, humidity } = main;
        const weatherDescription = weather[0].description;

        weatherOutput.innerHTML = `
            <div>
                <h3>${name}</h3>
                <p>Temperature: ${temp}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Description: ${weatherDescription}</p>
            </div>
        `;
    } else {
        weatherOutput.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
};

// Event listener for the search button
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', async () => {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();

    if (city !== '') {
        const weatherData = await fetchWeatherData(city);
        updateWeatherUI(weatherData);
    } else {
        alert('Please enter a city name.');
    }
});
// Smooth scroll to sections when clicking navbar links
document.querySelectorAll('.navbar li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Form submission animation
const queryForm = document.getElementById('query-form');
queryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formFields = this.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.value = '';
    });

    alert('Your query has been submitted successfully!');
});
