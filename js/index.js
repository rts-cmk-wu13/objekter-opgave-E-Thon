//! HERO 
let header = document.querySelector(".header");

hero.forEach(function(headerHero) {
    const heroDiv = document.createElement("div");
    heroDiv.textContent = headerHero.hero;
    header.appendChild(heroDiv);

})


//! SERVICES


//! FACILITIES



//! SITES



//! ADVANTAGES




//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
