fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayData(data))

const displayData = countries => {
    const countriesDiv = document.querySelector('.container')

    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'countryDiv'
        const countryInfo = `
            <h3>${country.name}</h3>
        `
        
        countryDiv.innerHTML = countryInfo
        countryDiv.addEventListener('click', function() {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${country.capital}</p>
            <img src="${country.flag}">
            `
            countryDiv.appendChild(div)
        })
        countriesDiv.appendChild(countryDiv)
    })
}