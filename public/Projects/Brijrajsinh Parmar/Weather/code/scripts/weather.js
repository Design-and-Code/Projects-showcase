const APIkey = '3wdQJ7xXaPGVd0Fp0bsKHplGlDzIMMcp';

//get location
const getCity = async (city)=>{
    
    const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const trail = `?apikey=${APIkey}&q=${city}`;

    const RAWresponse = await fetch(base+trail);
    if(RAWresponse.status !== 200)
    {
        return new Error("Failed to Fetch Location");
    }

    const response = await RAWresponse.json();

    return response[0];
}

//get weather conditions
const getWeather = async (location)=>{
    const base = "https://dataservice.accuweather.com/currentconditions/v1/";
    const trail = `${location}?apikey=${APIkey}`;

    const RAWresponse = await fetch(base+trail);
    if(RAWresponse.status !== 200)
    {
        return new Error("Failed to Fetch Weather");
    }

    const response = await RAWresponse.json();

    return response[0];
}

