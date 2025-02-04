document.addEventListener("DOMContentLoaded", function () {
  //! HERO
  let heroElm = document.querySelector(".hero");

  //? oprettelse af elementer til Hero (hero er ikke et array, og derfor bruges forEach ikke):
  // div til hero indhold:
  const heroDiv = document.createElement("div");
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
    servicesDiv.append(
      servicesIllustrations,
      servicesHeadline,
      servicesText,
      servicesLinktext
    );
    // services div tilføjes til servicesElm:
    servicesElm.appendChild(servicesDiv);
  });

  //! FACILITIES
  let facilitiesElm = document.querySelector(".facilities");

  //? oprettelse af elementer til facilities (overordnet det samme som for hero):
  // div til facilities indhold:
  const facilitiesDiv = document.createElement("div");
  // Overskrift:
  const facilitiesHeadline = document.createElement("h2");
  facilitiesHeadline.textContent = facilities.headline;
  // Options div:
  const facilitiesOptions = document.createElement("div");
  facilitiesOptions.classList.add("facilities__options");

  // forEach til hver option:
  facilities.options.forEach((option) => {
    const optionDiv = document.createElement("div");

    // Ikon
    const iconImg = document.createElement("img");
    iconImg.src = option.icon;

    // Overskrift
    const optionHeadline = document.createElement("h2");
    optionHeadline.textContent = option.headline;

    // Tekst
    const optionText = document.createElement("p");
    optionText.textContent = option.text;

    // Tilføj elementer til optionDiv
    optionDiv.append(iconImg, optionHeadline, optionText);

    // Tilføj optionDiv til facilitiesOptions:
    facilitiesOptions.appendChild(optionDiv);
  });

  //? Tilføjelse af elementer til HTML:
  facilitiesDiv.append(facilitiesHeadline, facilitiesOptions);
  // facilities div tilføjes til facilitiesElm:
  facilitiesElm.appendChild(facilitiesDiv);

  //! SITES
  let sitesElm = document.querySelector(".sites");


  //! ADVANTAGES
  //? Advantages er et array, og derfor bruges forEach:
  let advantagesElm = document.querySelector(".advantages");

  advantages.forEach((advantage) => {
    // div til services indhold:
    const advantagesDiv = document.createElement("div");

    // ikon:
    const advantagesIcon = document.createElement("img");
    advantagesIcon.src = advantage.icon;

    // headline:
    const advantagesHeadline = document.createElement("h2");
    advantagesHeadline.textContent = advantage.headline;

    // tekst:
    const advantagesText = document.createElement("p");
    advantagesText.textContent = advantage.text;

    //? Tilføjelse af elementer til HTML:
    advantagesDiv.append(
      advantagesIcon,
      advantagesHeadline,
      advantagesText
    );
    // advantages div tilføjes til advantagesElm:
    advantagesElm.appendChild(advantagesDiv);
  });

  // eksempel på at udskrive alle overskrifter i services i konsollen:
  // services.forEach(service => console.log(service.headline))
}); // ends DOMContentLoaded
