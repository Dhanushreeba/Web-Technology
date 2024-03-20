let city;
async function getWeatherData(city) {
  let response=await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85bdc3279976a32366473f93bef1784b`
    );
  return response;
}    
  //  getWeatherData().then = ((res) =>{
    

  //       console.log(res.name);
  //       document.getElementById('location').textContent = res.name;
  //       console.log(res.main.temp);
  //       document.getElementById('temperature').textContent = res.main.temp;
  //       console.log(res.wind.speed);
  //       document.getElementById('wind-speed').textContent = res.wind.speed; 
  //     const handlecity = () =>{ 
  //     let cityName=documnet.getElementById("cityName").value;
  //     let response=getWeatherData(cityName);
  //     let convertingJSON=response.then((response)=>response.json())
  //     console.log(convertingJSON)
  //     convertingJSON.then((result)=>{
  //       console.log(result.name)
  //     });
  //     };

const handleCity = () =>{
  let cityName=document.getElementById("cityName").value;
  city=cityName;
  console.log(city);

};
