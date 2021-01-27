const keyApi = 'GHcsBx9rItGF77GA5x4AHkGTpEDsPILY'

// get weather information
async function getWeather(cityCode){
    
    const base ='http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityCode}?apikey=${keyApi}`

    try {
        const response = await fetch(base + query)
        const data = await response.json()
        return data[0]
    } catch (error) {
        console.log(error)
    }
}

// get city information
async function getCity(city){

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${keyApi}&q=${city}`

    try {
        const response = await fetch(base + query)
        const data = await response.json()
        return data[0]
        } catch (error) {
        console.log(error)
    }
}




