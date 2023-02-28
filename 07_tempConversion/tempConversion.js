const convertToCelsius = function(temp) {

  let tempC = (temp - 32) * (5/9);

  if(!Number.isInteger(tempC)) {

    tempC = tempC.toFixed(1);
    tempC = Number(tempC);
  }

  return tempC;
};

const convertToFahrenheit = function(temp) {

  let tempK = (temp * (9/5)) + 32;

  if(!Number.isInteger(tempK)) {

    tempK = tempK.toFixed(1);
    tempK = Number(tempK);
  }

  return tempK;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
