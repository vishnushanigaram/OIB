function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperatureInput').value);
    let unit = document.getElementById('unitInput').value;
    let result = '';
    
    if (isNaN(temperature)) {
        document.getElementById('result').innerHTML = "Please enter a valid number!";
        return;
    }
    switch(unit) {
        case 'Celsius':
            result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
            break;
        case 'Fahrenheit':
            result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'Kelvin':
            result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

    document.getElementById('result').innerHTML = result;
}
