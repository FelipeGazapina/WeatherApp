const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')


function updateUI(data){

    //desestroturando propriedades do objeto
    const {cityDets, weather} = data

    // atualizando detalhes template
    details.innerHTML = `
        <h5 class="my-3">
        ${cityDets.EnglishName}
    </h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    //atualizando imagem dia e noite e icon imagens
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src', iconSrc)

    let timeSrc = weather.IsDayTime ? 'img/dat.svg' : 'img/night.svg';

    time.setAttribute('src',timeSrc)

    // removendo d-none classe
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

async function updateCity(city){
    
    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key)
    
    return {cityDets,weather}

}

cityForm.addEventListener('submit', e => {
    // não deixa a pagina atualizar
    e.preventDefault()

    //pega o valor posto no input
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //atualizar ui com a nova city
    updateCity(city).then(data => {
        updateUI(data)
    }).catch(e =>{
        console.log(e)
    })
})