let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey = 'd3a29824d6e009cbfea3cbbc3f1b19cf'


let boton = document.getElementById('botonBusqueda')
let inputCiudad = document.getElementById('ciudadEntrada')
let datosClima = document.getElementById('datosClima')

let difKelvin = 273.15 

boton.addEventListener('click', () => {
    let ciudad = inputCiudad.value
    funcionFetch(ciudad)
    inputCiudad.value = ''
})

let funcionFetch = ciudad => {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => {
            mostrarDatos(response)
        })
}

let mostrarDatos = response => {
    datosClima.innerHTML = ''

    const tempCelsius = response.main.temp - difKelvin
    const city = response.name
    const descripcion = response.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = city

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `The current temperature of ${city} is ${(tempCelsius).toFixed(1)}° C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `Weather description: ${descripcion}`

    datosClima.appendChild(ciudadTitulo)
    datosClima.appendChild(temperaturaInfo)
    datosClima.appendChild(descripcionInfo)

    datosClima.style.paddingTop = '1.5rem'
}