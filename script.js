const apiKey = "46d353500414379f457c16b195b01d5c"; // Replace with your actual API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === 200) {
      // Set current temperature and city
      document.getElementById("temp").innerHTML = `${data.main.temp}<span>°C</span>`;
      document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;

      // Set humidity
      document.getElementById("humDay1").innerHTML = `${data.main.humidity}<span>%</span>`;
    } else {
      alert("City not found!");
    }
  } catch (error) {
    alert("Failed to fetch weather data.");
  }
}
