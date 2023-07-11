const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// the menu should appear on all the 4 main pages, so it will stand here globally regardless of the pathname
navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false"){
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// this part only executes on the destination page, i did this because on the others pages these DOM elements won't exist
if(window.location.pathname == '/pages/destination.html'){
  const destButtons = Array.from(
    document.querySelector("#destinations-list").children
  );
  const destPicture = document.querySelector("#current-destination-img");

  const destName = document.querySelector("#destination-name");
  const destDesc = document.querySelector("#destination-desc");
  const destDist = document.querySelector("#destination-dist");
  const destTime = document.querySelector("#destination-time");

  const destinationInfo = [
    {
      name: "Moon",
      desc: `See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      dist: `384,400 km`,
      time: `3 days`,
    },
    {
      name: "Mars",
      desc: `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`,
      dist: `225 mil. km`,
      time: `9 months`,
    },
    {
      name: `Europa`,
      desc: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      dist: `628 mil. km`,
      time: `3 years`,
    },
    {
      name: `Titan`,
      desc: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      dist: `1.6 bil. km`,
      time: `7 years`,
    },
  ];

  const clearSelectedBtns = () => {
    destButtons.forEach((btn) => {
      btn.setAttribute("aria-selected", false);
    });
  };

  const renderDestination = (pos) => {
    destPicture.innerHTML = `
  <source srcset="../assets/destination/image-${destinationInfo[pos].name}.webp" type="image/webp">
  <img src="../assets/destination/image-${destinationInfo[pos].name}.png" alt="${destinationInfo[pos].name}">
  `;

    destName.textContent = destinationInfo[pos].name;
    destDesc.textContent = destinationInfo[pos].desc;
    destDist.textContent = destinationInfo[pos].dist;
    destTime.textContent = destinationInfo[pos].time;
  };

  destButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      clearSelectedBtns();
      renderDestination(destButtons.indexOf(btn));
      btn.setAttribute("aria-selected", true);
    });
  });

  renderDestination(0); // default destination when script loads
}

