const memberDots = Array.from(document.querySelector("#member-dots").children);

const memberPict = document.querySelector("#member-pict");
const memberRole = document.querySelector("#member-role");
const memberName = document.querySelector("#member-name");
const memberDesc = document.querySelector("#member-desc");

const membersInfo = [
  {
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    role: "Commander",
    pictUrl: {
      webp: "../assets/crew/image-douglas-hurley.webp",
      png: "../assets/crew/image-douglas-hurley.png",
    },
  },
  {
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    role: "Mission Specialist",
    pictUrl: {
      webp: "../assets/crew/image-mark-shuttleworth.webp",
      png: "../assets/crew/image-mark-shuttleworth.png",
    },
  },
  {
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    role: "Pilot",
    pictUrl: {
      webp: "../assets/crew/image-victor-glover.webp",
      png: "../assets/crew/image-victor-glover.png",
    },
  },
  {
    name: "Anousheh Ansari",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    role: "Flight Engineer",
    pictUrl: {
      webp: "../assets/crew/image-anousheh-ansari.webp",
      png: "../assets/crew/image-anousheh-ansari.png",
    },
  },
];

// render
const clearSelectedDots = () => {
  memberDots.forEach(dot => {
    dot.setAttribute("aria-selected", false);
  });
};

const renderMember = pos => {
  memberPict.innerHTML = `
    <source srcset="${membersInfo[pos].pictUrl.webp}" type="image/webp">
    <img src="${membersInfo[pos].pictUrl.png}">
  `;

  memberRole.textContent = membersInfo[pos].role;
  memberName.textContent = membersInfo[pos].name;
  memberDesc.textContent = membersInfo[pos].desc;
}

let i = 0;
renderMember(i);

// controller
memberDots.forEach(dot => {
  dot.addEventListener('click', () => {
    const dotIndex = memberDots.indexOf(dot);
    clearSelectedDots();
    renderMember(dotIndex);
    dot.setAttribute("aria-selected", true);
    i = dotIndex; // in case someone clicks any position, the i position that's used for the arrows is updated
  });
});

document.body.addEventListener('keyup', e => {
  if (e.code == "ArrowLeft") i--;
  else if (e.code == "ArrowRight") i++;
  else return;
  i = i < 0 ? memberDots.length - 1 : i > 3 ? 0 : i; 

  clearSelectedDots();
  renderMember(i);
  memberDots[i].setAttribute("aria-selected", true);
});