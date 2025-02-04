document.addEventListener("DOMContentLoaded", function () {
    //! HERO 
    let heroElm = document.querySelector(".hero");

    //? oprettelse af elementer til Hero:
    // div til hero indhold:
    const heroDiv = document.createElement("div");
    heroDiv.classList.add(".hero");
    // Billede:
    const heroImg = document.createElement("img");
    heroImg.src = heroDiv.image;
    // Overskrift:
    const heroHeadline = document.createElement("h1");
    heroHeadline.textContent = hero.headline;
    // Copy tekst (beskrivelse):
    const heroCopy = document.createElement("p");
    heroCopy.textContent = hero.copy;
    // Ikon: 
    const heroIcon = document.createElement("img");
    heroIcon.src = hero.icon;

    //? Tilføjelse af elementer til HTML:
    heroDiv.appendChild(heroImg);
    heroDiv.appendChild(heroHeadline);
    heroDiv.appendChild(heroCopy);
    heroDiv.appendChild(heroIcon);

    // hero div tilføjes til heroElm (stedet der er lavet til hero i HTML)
    heroElm.appendChild(heroDiv);
    
    
    //! SERVICES
    
    
    //! FACILITIES
    
    
    
    //! SITES
    
    
    
    //! ADVANTAGES
    
    
    
    
    // eksempel på at udskrive alle overskrifter i services i konsollen:
    // services.forEach(service => console.log(service.headline))
    
    
  }); // ends DOMContentLoaded
  

