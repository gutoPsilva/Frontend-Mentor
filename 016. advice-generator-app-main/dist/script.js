const button = document.querySelector("#adviceBtn");
const adviceP = document.querySelector("#adviceText");
const adviceID = document.querySelector("#adviceID");

const renderAdvice = (text, id) => {
  adviceP.textContent = text;
  adviceID.textContent = id;
};

const fetchData = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const advice = data.slip.advice;
    const id = data.slip.id;
    renderAdvice(advice, id);
  } catch (err) {
    console.log(err);
  }
};

button.addEventListener("click", () => {
  fetchData();
});

document.body.addEventListener('keyup', (e) => {
  if(e.key === "Enter"){
    fetchData();
  }
});

fetchData();
