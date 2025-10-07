// weatherService.js
async function getWeather(city) {
  const response = await fetch(`https://api.example.com/weather?city=${city}`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return data;
}

module.exports = { getWeather };
