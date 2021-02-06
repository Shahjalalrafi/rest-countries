// const details = 'https://restcountries.eu/rest/v2/all'
// const list = document.querySelector('.my-list')
// let para = document.getElementById('para')

// function data() {
//     fetch(details)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             let country = data[3].name
//             let crt = document.createElement('li')
//             crt.innerText = country

//             list.appendChild(crt).addEventListener('click', function() {
//                  para.innerText = data[3].subregion
//                  const img = document.createElement('img')
//                  img.setAttribute('src', data[3].flag)
//                  img.style.width = 200+ 'px'
//                  para.appendChild(img)
//             })

//         })
// }

// data()


let container = document.querySelector('.container')
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayData(data))

function displayData(countries) {
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i]
        const div = document.createElement('div')
        const heading = document.createElement('h1')
        const p = document.createElement('p')
        const countryName = country.name
        const countryCapital = country.capital
        heading.innerHTML = countryName
        p.innerHTML = countryCapital
        div.appendChild(heading)
        div.appendChild(p)
        container.appendChild(div)
    }
}