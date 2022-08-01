let searchBtn = document.querySelector('.search-btn')
let countryInput = document.querySelector('.country-inp')
let result = document.querySelector(".result")
searchBtn.addEventListener('click' , function(){
    let countryName = countryInput.value 
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  fetch(finalUrl).then(res=>res.json())
  .then(data=>{
    result.innerHTML = `
    
    <img src = "${data[0].flags.svg}"
    class="flag-img" />
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
    </div class="data-wrapper">
    <h4>Capital:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    <div>
    <div class="wrapper">
    </div class="data-wrapper">
    <h4>Capital:</h4>
    <span>${data[0].continents[0]}</span>
    </div>
    <div>

    <div class="wrapper">
    </div class="data-wrapper">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
    </div>
    <div>

    <div class="wrapper">
    </div class="data-wrapper">
    <h4>Currency:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
    </span>
    </div>
    <div>

    <div class="wrapper">
    </div class="data-wrapper">
    <h4>Common Languages:</h4>
    <span>${Object.values(data[0].languages).toString().split("").join("")}
    </span>
    </div>
    <div>
    
    `
  }).catch(()=>{
    if(countryName.length == 0){
    result.innerHTML=`<h3>the input Field cannot be empty</h3>`
    }else{
        result.innerHTML = `<h3>please enter a valid country name</h3>`
    }
  })
})












