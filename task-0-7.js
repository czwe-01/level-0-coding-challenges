function celciusToFahrenheit(celcius) {
  let fahrenheit = celcius * (9 / 5) + 32;

  console.log(fahrenheit);
  return fahrenheit;
}

function fahrenheitToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);

  console.log(celcius);
  return celcius;
}

celciusToFahrenheit(20);
fahrenheitToCelcius(60);
