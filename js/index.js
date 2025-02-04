document.addEventListener("DOMContentLoaded", function () {
  //! HERO
  let heroElm = document.querySelector(".hero");

  //? oprettelse af elementer til Hero (hero er ikke et array, og derfor bruges forEach ikke):
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
  heroDiv.append(heroImg, heroHeadline, heroCopy, heroIcon);
  // hero div tilføjes til heroElm (stedet der er lavet til hero i HTML)
  heroElm.appendChild(heroDiv);

  //! SERVICES
  //? services er et array, og derfor bruges forEach:
  let servicesElm = document.querySelector(".services");

  services.forEach((service) => {
    // div til services indhold:
    const servicesDiv = document.createElement("div");
    servicesDiv.classList.add(".service");

    // illustration:
    const servicesIllustrations = document.createElement("img");
    servicesIllustrations.src = service.illustration;

    // headline:
    const servicesHeadline = document.createElement("h2");
    servicesHeadline.textContent = service.headline;

    // tekst:
    const servicesText = document.createElement("p");
    servicesText.textContent = service.text;

    // link tekst:
    const servicesLinktext = document.createElement("a");
    servicesLinktext.textContent = service.linktext;

    //? Tilføjelse af elementer til HTML:
    servicesDiv.append(servicesIllustrations, servicesHeadline, servicesText, servicesLinktext);
    // services div tilføjes til servicesElm:
    servicesElm.appendChild(servicesDiv);
  });

  //! FACILITIES
  let facilitiesElm = document.querySelector(".facilities");

  //! SITES
  let sitesElm = document.querySelector(".sites");

  //! ADVANTAGES
  let advantagesElm = document.querySelector(".advantages");

  // eksempel på at udskrive alle overskrifter i services i konsollen:
  // services.forEach(service => console.log(service.headline))
}); // ends DOMContentLoaded
