// const APIKey = `9638019b0ce4cd919514be167835c1a8`;
const Search_btn = document.getElementById("Search_btn");

async function weatherApp() {
  let cityName = document.getElementById("Search").value;
  let resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=9638019b0ce4cd919514be167835c1a8&q=${cityName}`
  );

  if (resp.status === 404) {
    document.getElementById("error").style.display = "block";
  }

  let data = await resp.json();
  document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.getElementById("cityname").innerHTML = cityName;
  document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
  document.getElementById("Wind_speed").innerHTML = `${data.wind.speed} Km\h`;

  let imgChange = document.querySelector(".weather_types_img");

  if (data.weather[0].main === "Clouds") {
    imgChange.src = `/images/clouds.png`;
  } else if (data.weather[0].main === "Clear") {
    imgChange.src = `/images/clear.png`;
  } else if (data.weather[0].main === "Rain") {
    imgChange.src = `/images/rain.png`;
  } else if (data.weather[0].main === "Drizzle") {
    imgChange.src = `/images/drizzle.png`;
  } else if (data.weather[0].main === "Mist") {
    imgChange.src = `/images/mist.png`;
  }

  document.querySelector("#result").style.display = "block";
}

Search_btn.addEventListener("click", () => {
  weatherApp();
});
