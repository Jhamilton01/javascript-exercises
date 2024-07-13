const convertToCelsius = function(temp) {
  celcius = 0;
  celcius = ((temp - 32)*(5/9));

  celcius = Math.round(celcius*10) / 10;
  return celcius;

};

const convertToFahrenheit = function(temp) {
  farenheit = 0;
  farenheit = (temp * (9/5)+32)

  farenheit = Math.round(farenheit*10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
