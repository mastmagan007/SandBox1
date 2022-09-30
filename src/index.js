// Challenge 1
/*function currentPos(position) {
  console.log(`Longitude: ${position.coords.longitude}`);
  console.log(`Latitude: ${position.coords.latitude}`);
}

navigator.geolocation.getCurrentPosition(currentPos); */

// Challenge 2
function weather(response) {
  //console.log(response);
  let tempNow = response.data.main.temp;
  let changeH1 = document.querySelector("h1");
  changeH1.innerHTML = `It is ${tempNow} degrees in ${response.data.name} `;
}
function currentTemp(position) {
  let apiKey = `0f228e3e7aa18774ac951c893270d5e1`;
  let lat = Math.round(position.coords.latitude);
  let long = Math.round(position.coords.longitude);
  let units = `metric`;
  let urlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;

  axios.get(urlCoords).then(weather);
}

navigator.geolocation.getCurrentPosition(currentTemp);
