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

let i = 2;

const updateImage = pos => { // 720px img change
  let width = window.innerWidth;
  if (width < 720){
    techPict.setAttribute('src', techInfo[i].image.landscape);
  }else{
    techPict.setAttribute("src", techInfo[i].image.portrait);
  }
};

// techPict.src = techInfo[pos].image.portrait;
// techPict.src = techInfo[pos].image.portrait;


const clearSelectedBtns = () => {
  numberedBts.forEach(btn => {
    btn.setAttribute("aria-selected", false);
  });
};

const renderTechnology = pos => {
  clearSelectedBtns();
  techName.textContent = techInfo[pos].name;
  techDesc.textContent = techInfo[pos].desc;
  updateImage(pos);
};

window.onload = window.onresize = renderTechnology(i);