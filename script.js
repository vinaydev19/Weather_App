const APIKey = `9638019b0ce4cd919514be167835c1a8`;
// let cityName = document.getElementById("Search").value;
const Search_btn = document.getElementById("Search_btn");
let weatherDisplay = document.querySelector(".weather_info");
// console.log(cityName);

async function weatherApp() {
  let cityName = document.getElementById("Search").value;
  console.log(cityName);
  let resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=9638019b0ce4cd919514be167835c1a8&q=${cityName}`
  );
  let data = await resp.json();
  console.log(data);
  document.getElementById("temp").innerHTML = `${data.main.temp}°C`;
  document.getElementById("cityname").innerHTML = cityName;
  document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
  document.getElementById("Wind_speed").innerHTML = `${data.wind.speed} Km\h`;
}

Search_btn.addEventListener("click", () => {
  weatherDisplay.computedStyleMap.display = "block";
  weatherApp();
  //   console.log(cityName);
});
