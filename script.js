var temperature = 0;
function convertTemperature(temperature, degree){
if (degree === "C") {
  temperature = (temperature*1.8)+32;
  console.log (temperature + "F");
}

if (degree === "F"){
  (temperature-32)*1.8;
  console.log(temperature + "C");
}
}

convertTemperature(18, "F");
