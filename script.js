function convertTemperature(temperature, degree){
if (degree === "C") {
    temperature = ((temperature-32)*1.8);
  console.log (temperature + " F");
}

if (degree === "F"){
  temperature = ((temperature*1.8)+32);
  console.log(temperature + " C");
}
}

convertTemperature(212, "C");
convertTemperature(32, "C");
convertTemperature(65, "C");
convertTemperature(0, "F");
