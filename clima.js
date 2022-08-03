function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
  }else{
    console.log('Geolocation não suportado no browser!')
  }
}

function showPosition(position){
  let url = '';
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=9880390b971a88db0aef35db00300f3c`;

  fetchApi(url);
}

function fetchApi(url){

  fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    let clima = document.getElementById('clima');
    let city = data.name;
    let temp = data.main.temp;
    let tempCelsius = (temp - 32) * 5/9;
    clima.innerHTML = `${city} - ${tempCelsius.toFixed(0)}°C`;
  })

}

getLocation();

