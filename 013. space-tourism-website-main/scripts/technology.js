const numberedBts = Array.from(document.querySelector("#technology-bts").children);

const techPict = document.querySelector("#tech-img");
const techName = document.querySelector("#tech-name");
const techDesc = document.querySelector("#tech-desc");

const techInfo = [
  {
    name: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: {
      portrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "../assets/technology/image-launch-vehicle-landscape.jpg",
    },
  },
  {
    name: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: {
      portrait: "../assets/technology/image-spaceport-portrait.jpg",
      landscape: "../assets/technology/image-spaceport-landscape.jpg",
    },
  },
  {
    name: "Space capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: {
      portrait: "../assets/technology/image-space-capsule-portrait.jpg",
      landscape: "../assets/technology/image-space-capsule-landscape.jpg",
    },
  },
];

let i = 0;

const updateImage = pos => { // 720px img change
  let width = window.innerWidth;
  if (width < 720) {
    techPict.innerHTML = `
    <img src="${techInfo[pos].image.landscape}" alt="${techInfo[pos].name}">
    `;
  } else {
    techPict.innerHTML = `
    <img src="${techInfo[pos].image.portrait}" alt="${techInfo[pos].name}">
    `;;
  }
};

const clearSelectedBtns = () => {
  numberedBts.forEach(btn => {
    btn.setAttribute("aria-selected", false);
  });
};

const renderTechnology = pos => {
  updateImage(pos);
  techName.textContent = techInfo[pos].name;
  techDesc.textContent = techInfo[pos].desc;
};

//controler
numberedBts.forEach(btn => {
  btn.addEventListener("click", () => {
    const buttonIndex = numberedBts.indexOf(btn);
    clearSelectedBtns();
    renderTechnology(buttonIndex);
    btn.setAttribute("aria-selected", true);
    i = buttonIndex;
  });
});

renderTechnology(i); // load launch vehicle info by default

window.onresize = () => {
  updateImage(i);
};