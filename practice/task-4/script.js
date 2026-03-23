// // const condition = current.condition.text.toLowerCase();

// async function getWeather(){
// let city = document.getElementById("city").value;
// let apiKey = "f55f99b617b440f9af662028261803";
// let url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
// let response = await fetch(url);
// let data = await response.json();
// console.log(data);
// document.getElementById("result").innerHTML = `
//             <h4>${data.location.localtime}</h4>
//             <h2>${data.location.name},${data.location.region},${data.location.country}</h2>
//             <img src="https:${data.current.condition.icon}">
//             <p>Temperature: ${data.current.temp_c}°C</p>
//             <p>${data.current.condition.text}</p>

//             <p>Humidity: ${data.current.humidity}%</p>
//             <p>Wind Speed: ${data.current.wind_kph} km/h</p>`;

// const condition = data.current.condition.text.toLowerCase();

// if (condition.includes("sunny")) {
//     document.body.style.backgroundColor = "yellow";
// }
// else if (condition.includes("cloud")) {
//     document.body.style.backgroundColor = "gray";
// }
// else if (condition.includes("rain")) {
//     document.body.style.backgroundColor = "lightblue";
// }
// else {
//     document.body.style.backgroundColor = "white";
// }

// document.getElementById("city").addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         getWeather();
//     }
// });
// }

const cityInput = document.getElementById("city");
cityInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        getWeather();
    }
});
async function getWeather() {
    const cityInput = document.getElementById("city");
    let city = cityInput.value.trim();
    if (!city) {
        document.getElementById("result").innerHTML = "<p style='color: red;'>Please enter a valid city name.</p>";
        return;
    }
    try {
        let apiKey = "f55f99b617b440f9af662028261803";
        let url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }
        document.getElementById("result").innerHTML = `
            <h4>${data.location.localtime}</h4>
            <h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
            <img src="https:${data.current.condition.icon}">
            <p>Temperature: ${data.current.temp_c}&deg;C</p>
            <p>${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        `;
        const condition = data.current.condition.text.toLowerCase();
        const constion =
            document.body.style.backgroundImage = "none";
        document.body.style.background = "lightblue";

        if (condition.includes("sunny")) {
            document.body.style.backgroundImage = "url('./images/pexels-bella-white-201200-635279.jpg')";
            document.body.style.backgroundSize = "cover";
        }
        else if (condition.includes("cloud")) {
            document.body.style.backgroundImage = "url('./images/cloud.jpg')";
            document.body.style.backgroundSize = "cover";
        }
        else if (condition.includes("rain")) {
            document.body.style.backgroundImage = "url('./images/pexels-chetanvlad-1529360.jpg')";
            document.body.style.backgroundSize = "cover";
        }
        else {
            document.body.style.backgroundImage = "url('./images/pexels-fabianwiktor-994605.jpg')";
            document.body.style.backgroundSize = "cover";
        }
        cityInput.value = "";

    } catch (error) {
        console.error("Weather fetch error:", error);
        document.getElementById("result").innerHTML = `<p style='color: red;'>Error: ${error.message}</p>`;
    }
}