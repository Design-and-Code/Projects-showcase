const formobj = document.querySelector(".location-form");

const details = document.querySelector(".details");
const card = document.querySelector(".card");

const img = document.querySelector(".card .img");
const icon = document.querySelector(".icon img");

//update the UI with deatils
const updateUI = (data)=>{

    const location = data.cityDetails;
    const weather = data.weatherDetails;

    if(card.classList.contains("d-none"))card.classList.remove("d-none");

    details.innerHTML = `
        <h5 class="city my-2">${location.EnglishName}</h5>
        <div class="weather my-2">${weather.WeatherText}</div>
        <div class="display-4 my-3">
            <span class="temp">${weather.Temperature.Metric.Value}</span>
            <span class="temp-trail">&deg;C</span>
        </div>
    `
    //update daytime img
    dayTime = weather.IsDayTime?"day":"night";
    img.setAttribute("src",`assets/${dayTime}.svg`);

    //update weather icon
    icon.setAttribute("src",`assets/icons/${weather.WeatherIcon}.svg`);

}

//get weather information from getWeather
const updateCity = async (city) => {

    const citycode = await getCity(city);
    const weather = await getWeather(citycode['Key']);
    
    return {
        cityDetails : citycode,
        weatherDetails : weather
    };
}

formobj.addEventListener("submit",(e)=>{
    
    //prevent refreshing upon submit (default behaviour)
    e.preventDefault();

    //get city name from form input of index page
    const city = formobj.locationinput.value.trim();

    //do not fire on empty submits
    if(city !== "")
    {
        updateCity(city)
        .then(data=>updateUI(data))
        .catch(err=>console.log(err));

        //clear the form after updating the city
        formobj.reset();
        formobj.childNodes[1].blur();
    }
    
})