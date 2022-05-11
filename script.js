let city = 'Lviv'
let error = document.getElementsByClassName('error')[0]
let getCity = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0d441929e8549c4ac40010d601417c9&units=metric`)
        .then(value => value.json())
        .then(value => {
                if (value.name) {
                    let name = value.name;
                    let temp = Math.round(value.main.temp);
                    let feelsLike = Math.round(value.main.feels_like);
                    let weatherStatus = value.weather[0].main;
                    let weatherIcon = value.weather[0].icon;
                    let content = `
    <div class="leftContent">
        <div class="name"><b>${name}</b></div>
        <div class="weatherStatus">${weatherStatus}</div>
        <div class ='temp'><b>${temp} °C </b></div>
        <div class="feelsLike">Feels like:${feelsLike}°C</div>
    </div>
    <div class="raightContent">
        <div class="weatherStatus"> <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}"> </div>
    </div>`
                    weatherWrapper.innerHTML = content
                } else {
                    error.innerText = 'місто не знайдено,спробуйте ще раз!!!'
                }
            }
        )
}


getCity(city)

let formBtn = document.getElementById('formButton')
let mainBtn = document.getElementsByClassName('mainButton')[0];
let form = document.getElementsByClassName('formWrapper')[0]
let mainContent = document.getElementsByClassName('mainContent')[0];
let weatherWrapper = document.getElementsByClassName('weatherWrapper')[0]


mainBtn.onclick = function getForm() {
    form.classList.add('formWrapperVisible')
    mainContent.classList.add('mainContentInvisible')
}

formBtn.onclick = function () {
    let value = document.getElementById('city')
    city = value.value
    value.value = '';
    error.innerText = ''

    getCity(city)
    form.classList.remove('formWrapperVisible')
    mainContent.classList.remove('mainContentInvisible')
}







