const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const getInfo = (event) =>{
    event.preventDefault();
    let cityVal = cityName.ariaValue;
    if(cityVal === ""){
       city_name.innerText = `plz write the name before search`;
    }else{
        let url = (`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=5eff0d66ec21737a9e040cce5c67df27`)
        const response = await fetch(url);
    }
}
submitBtn.addEventListener('click',getInfo)