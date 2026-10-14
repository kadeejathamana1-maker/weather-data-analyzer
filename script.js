function analyzeWeather() {
    let city = document.getElementById("city").value;
    let temperature = document.getElementById("temperature").value;
    let humidity = document.getElementById("humidity").value;
    let rainfall = document.getElementById("rainfall").value;

    if (city === "" || temperature === "" ||
        humidity === "" || rainfall === "") {
        document.getElementById("result").innerHTML =
            "Please fill in all the fields.";
        return;
    }

    temperature = Number(temperature);
    humidity = Number(humidity);
    rainfall = Number(rainfall);

    if (humidity < 0 || humidity > 100 ||
        rainfall < 0 || temperature < -100 ||
        temperature > 70) {
        document.getElementById("result").innerHTML =
            "Please enter valid weather values.";
        return;
    }

    let temperatureStatus;
    let humidityStatus;
    let rainfallStatus;

    if (temperature > 30) {
        temperatureStatus = "Hot";
    } else if (temperature >= 20) {
        temperatureStatus = "Moderate";
    } else {
        temperatureStatus = "Cold";
    }

    if (humidity >= 70) {
        humidityStatus = "High";
    } else if (humidity >= 40) {
        humidityStatus = "Moderate";
    } else {
        humidityStatus = "Low";
    }

    if (rainfall > 0) {
        rainfallStatus = "Rainfall recorded";
    } else {
        rainfallStatus = "No rainfall";
    }

    document.getElementById("result").innerHTML =
        "<h3>Weather Analysis</h3>" +
        "<b>City:</b> " + city + "<br>" +
        "<b>Temperature:</b> " + temperatureStatus + "<br>" +
        "<b>Humidity:</b> " + humidityStatus + "<br>" +
        "<b>Rainfall:</b> " + rainfallStatus;
}