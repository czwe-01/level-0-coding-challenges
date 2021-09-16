function celciusToFahrenheit(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;

  return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);

  return celcius;
}

celciusToFahrenheit(20);
fahrenheitToCelcius(60);
