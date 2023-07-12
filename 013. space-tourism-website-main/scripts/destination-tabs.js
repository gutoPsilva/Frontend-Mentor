const destButtons = Array.from(
  document.querySelector("#destinations-list").children
);
const destPicture = document.querySelector("#current-destination-img");

const destName = document.querySelector("#destination-name");
const destDesc = document.querySelector("#destination-desc");
const destDist = document.querySelector("#destination-dist");
const destTime = document.querySelector("#destination-time");

const destinationsInfo = [
  {
    name: "Moon",
    desc: `See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    dist: `384,400 km`,
    time: `3 days`,
    pictUrl: {
      webp: "../assets/destination/image-moon.webp",
      png: "../assets/destination/image-moon.png",
    },
  },
  {
    name: "Mars",
    desc: `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`,
    dist: `225 mil. km`,
    time: `9 months`,
    pictUrl: {
      webp: "../assets/destination/image-mars.webp",
      png: "../assets/destination/image-mars.png",
    },
  },
  {
    name: `Europa`,
    desc: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    dist: `628 mil. km`,
    time: `3 years`,
    pictUrl: {
      webp: "../assets/destination/image-europa.webp",
      png: "../assets/destination/image-europa.png",
    },
  },
  {
    name: `Titan`,
    desc: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    dist: `1.6 bil. km`,
    time: `7 years`,
    pictUrl: {
      webp: "../assets/destination/image-titan.webp",
      png: "../assets/destination/image-titan.png",
    },
  },
];

// render functions
const clearSelectedBtns = () => {
  destButtons.forEach((btn) => {
    btn.setAttribute("aria-selected", false);
  });
};

const renderDestination = (pos) => {
  destPicture.innerHTML = `
  <source srcset="${destinationsInfo[pos].pictUrl.webp}" type="image/webp">
  <img src="${destinationsInfo[pos].pictUrl.png}" alt="${destinationsInfo[pos].name}">
`;

  destName.textContent = destinationsInfo[pos].name;
  destDesc.textContent = destinationsInfo[pos].desc;
  destDist.textContent = destinationsInfo[pos].dist;
  destTime.textContent = destinationsInfo[pos].time;
};

let i = 0;
renderDestination(i); // default destination is moon when script loads

// controller
destButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const buttonIndex = destButtons.indexOf(btn);
    clearSelectedBtns();
    renderDestination(buttonIndex);
    btn.setAttribute("aria-selected", true);
    i = buttonIndex; // in case someone clicks any position, the i position that's used for the arrows is updated
  });
});

document.body.addEventListener('keydown', (e) => {
  if(e.code == "ArrowLeft") i--;
  else if(e.code == "ArrowRight") i++;
  else return;
  i = i < 0 ? destButtons.length - 1 : i > 3 ? 0 : i;

  clearSelectedBtns();
  renderDestination(i);
  destButtons[i].setAttribute("aria-selected", true);
});