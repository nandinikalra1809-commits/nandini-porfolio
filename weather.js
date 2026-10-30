function () {
  const form = document.getElementById("weatherForm");
  const cityInput = document.getElementById("weatherCity");
  const statusText = document.getElementById("weatherStatus");
  const result = document.getElementById("weatherResult");
  const conditionsEl = document.getElementById("weatherConditions");
  const tempEl = document.getElementById("weatherTemp");
  const windEl = document.getElementById("weatherWind");
  const checkButton = document.getElementById("weatherCheck");

  if (!form || typeof CONFIG === "undefined") {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (!city) {
      statusText.textContent = "Enter a city name.";
      return;
    }

    if (!CONFIG.weatherApiKey) {
      statusText.textContent = "Add your weather API key in config.js first.";
      return;
    }

    checkButton.disabled = true;
    result.hidden = true;
    statusText.textContent = "Checking weather...";

    try {
      const url =
        CONFIG.weatherBaseUrl +
        "?q=" +
        encodeURIComponent(city) +
        "&units=metric&appid=" +
        encodeURIComponent(CONFIG.weatherApiKey);
      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Check your weather API key.");
        }
        if (response.status === 404) {
          throw new Error("City not found.");
        }
        throw new Error("Weather request failed (HTTP " + response.status + ").");
      }

      const data = await response.json();
      const conditions = data.weather && data.weather[0] && data.weather[0].description
        ? data.weather[0].description
        : "Unavailable";
      const temp = typeof data.main?.temp === "number" ? data.main.temp : null;
      const wind = typeof data.wind?.speed === "number" ? data.wind.speed : null;

      conditionsEl.textContent = conditions;
      tempEl.textContent = temp === null ? "Unavailable" : temp.toFixed(1) + " °C";
      windEl.textContent = wind === null ? "Unavailable" : wind.toFixed(1) + " m/s";
      result.hidden = false;
      statusText.textContent = data.name ? "Weather for " + data.name : "";
    } catch (error) {
      statusText.textContent = "Weather unavailable. " + error.message;
    } finally {
      checkButton.disabled = false;
    }
  });
})();
