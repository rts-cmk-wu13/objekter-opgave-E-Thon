document.addEventListener("DOMContentLoaded", function () {
  //! HERO
  let heroElm = document.querySelector(".hero");

  //? oprettelse af elementer til Hero (hero er ikke et array, og derfor bruges forEach ikke):
  // div til hero indhold:
  const heroDiv = document.createElement("div");
  // Billede:
  const heroImg = document.createElement("img");
  heroImg.src = hero.image;

  // hero container:
  const heroContainer = document.createElement("section");
  heroContainer.classList.add("hero__container");
  // Overskrift:
  const heroHeadline = document.createElement("h1");
  heroHeadline.textContent = hero.headline;
  // Copy tekst (beskrivelse):
  const heroCopy = document.createElement("p");
  heroCopy.textContent = hero.copy;

  // Button:
  const heroBtn = document.createElement("a");
  heroBtn.classList.add("button");
  const heroIcon = document.createElement("img");
  heroBtn.href = "#";
  heroIcon.src = hero.icon;
  heroIcon.classList.add("icon");

  //? Tilføjelse af elementer til HTML:
  // container og img tilføjes hero div:
  heroDiv.append(heroContainer, heroImg);

  // elementer til hero container tilføjes:
  heroContainer.append(heroHeadline, heroCopy, heroBtn);

  // elementer tilføjes til "button" (som er et link):
  heroBtn.append(heroIcon, "Explore");

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
    const servicesHeadline = document.createElement("h3");
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
    const optionIcon = document.createElement("img");
    optionIcon.src = option.icon;
    optionIcon.classList.add("icon");

    // Overskrift
    const optionHeadline = document.createElement("h4");
    optionHeadline.textContent = option.headline;

    // Tekst
    const optionText = document.createElement("p");
    optionText.textContent = option.text;

    // Link
    const optionLink = document.createElement("a");
    optionLink.textContent = option.link;

    //? Tilføjelse af elementer:
    // Tilføj elementer til optionDiv
    optionDiv.append(optionIcon, optionHeadline, optionText, optionLink);

    // Tilføj optionDiv til facilitiesOptions:
    facilitiesOptions.appendChild(optionDiv);
  });

  //? Tilføjelse af elementer til HTML:
  facilitiesDiv.append(facilitiesHeadline, facilitiesOptions);
  // facilities div tilføjes til facilitiesElm:
  facilitiesElm.appendChild(facilitiesDiv);

  //! SITES
  let sitesElm = document.querySelector(".sites");
  //? Enkeltstående kodelinjer kombineret med arrays til oprettelse af elementer (samme koncept som ved facilites)
  const sitesDiv = document.createElement("div");

  // headline:
  const sitesHeadline = document.createElement("h2");
  sitesHeadline.textContent = sites.headline;
  // text:
  const sitesText = document.createElement("p");
  sitesText.textContent = sites.text;
  // btnicon:
  const sitesBtnicon = document.createElement("img");
  sitesBtnicon.src = sites.btnicon;
  sitesBtnicon.classList.add("icon");
  // places:
  const sitesPlaces = document.createElement("div");
  sitesPlaces.classList.add("sites__places");
  // forEach til places array:
  sites.places.forEach((place) => {
    const placesDiv = document.createElement("div");

    // img:
    const placesImg = document.createElement("img");
    placesImg.src = place.img;

    // name:
    const placesName = document.createElement("h3");
    placesName.textContent = place.name;

    // city:
    const placesCity = document.createElement("p");
    placesCity.textContent = place.city;

    //? Tilføjelse af elementer til HTML:
    placesDiv.append(placesImg, placesName, placesCity);
    // places div tilføjes til sitesElm:
    sitesPlaces.appendChild(placesDiv);
  });

  //? Tilføjelse af elementer til HTML:
  sitesDiv.append(sitesHeadline, sitesText, sitesBtnicon, sitesPlaces);
  // sites div tilføjes til sitesElm:
  sitesElm.appendChild(sitesDiv);

  //! ADVANTAGES
  //? Advantages er et array, og derfor bruges forEach:
  let advantagesElm = document.querySelector(".advantages");

  advantages.forEach((advantage) => {
    // div til services indhold:
    const advantagesDiv = document.createElement("div");

    // ikon:
    const advantagesIcon = document.createElement("img");
    advantagesIcon.src = advantage.icon;
    advantagesIcon.classList.add("icon");

    // headline:
    const advantagesHeadline = document.createElement("h4");
    advantagesHeadline.textContent = advantage.headline;

    // tekst:
    const advantagesText = document.createElement("p");
    advantagesText.textContent = advantage.text;

    //? Tilføjelse af elementer til HTML:
    advantagesDiv.append(advantagesIcon, advantagesHeadline, advantagesText);
    // advantages div tilføjes til advantagesElm:
    advantagesElm.appendChild(advantagesDiv);
  });

  // eksempel på at udskrive alle overskrifter i services i konsollen:
  // services.forEach(service => console.log(service.headline))
}); // ends DOMContentLoaded
