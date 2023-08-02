const buttonsList = [...document.querySelector("#period-list").children];
const currentTimeList = [...document.querySelectorAll("[data-current-time]")];
const previousTimeList = [...document.querySelectorAll("[data-previous-time")];

const clearSelectedBtns = () => {
  buttonsList.forEach(btn => btn.classList.remove('active-period'));
};

const renderPeriodInfo = i => {
  const period = {
    0: "daily",
    1: "weekly",
    2: "monthly",
  }[i] || 'weekly';

  const word = {
    0: "Day",
    1: "Week",
    2: "Month",
  }[i] || "Week";

  // get JSON data & render it
  fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, i) => {
      const currentTime = item.timeframes[period].current;
      const previousTime = item.timeframes[period].previous;
      currentTimeList[i].textContent = `${currentTime}hrs`;
      previousTimeList[i].textContent = `Last ${word} - ${previousTime}hrs`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
};

buttonsList.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    clearSelectedBtns();
    btn.classList.add('active-period');
    renderPeriodInfo(i);
  });
});

