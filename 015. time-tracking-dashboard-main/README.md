# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

<div align="center">
  <img src="images\screenshots\desktop.jpeg" alt="desktop screenshot">
  <img src="images\screenshots\tablet.jpeg" alt="tablet screenshot" style="width: 640px">
  <img src="images\screenshots\mobile.jpeg" alt="mobile screenshot" style="width: 375px">
</div>

### Links

- [Solution URL](https://github.com/gutoPsilva/FrontEnd-Mentor/tree/main/015.%20time-tracking-dashboard-main)
- [Live Site URL](https://gutopsilva.github.io/FrontEnd-Mentor/015.%20time-tracking-dashboard-main/dist/index.html)

## My process

### Built with

<!-- Badges -->
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![VSCode](https://img.shields.io/badge/-VSCODE-007ACC?style=for-the-badge&&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

- HTML5
- CSS3
- JS
- Git
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Google Fonts](https://fonts.google.com/) - Fonts Library

### What I learned

I had some trouble on the hover states, because the card components shouldn't trigger the background color change when hovering the options button (the three dots). With some research i found a solution on stackoverflow and implemented it on raw CSS as you can see below, the link to that question is on [Useful resources](#useful-resources).

```css
.options-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none; /* avoids that the parent hover doesn't trigger when hovering the ::before content */
  border-radius: 1rem; /* rounded-2xl*/
  transition: background-color .15s; /* transition */
}

.options-btn:hover::before { background-color: hsl(235 46% 20%); }
```

I also had no idea on how to ´fetch data´, to be honest i didn't even know that i had to use it to get the data from a local file, i thought it was only to get stuff from API's and make HTTP requests, i saw some youtube tutorials but never used it on a real project, so with a little `chatGPT` help i sucessfully did it! I'm not sure if i should've extract that data onto a local variable so i could manipulate it without fetching every time, so i used the fetch for each time render function was called.

```js
fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, i) => {
      const currentTime = item.timeframes[period].current;
      const previousTime = item.timeframes[period].previous;
      currentTimeList[i].textContent = `${currentTime}hrs`;
      previousTimeList[i].textContent = `${word} - ${previousTime}hrs`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
```

### Continued development

Second challenge with Tailwind CSS, and there's not much to say about it, it just makes everything much easier & fast. The special thing about this challenge is that i finally managed to use the `data.json` to load the content, i think i'll probably stick with this approach on future projects.

### Useful resources

- [Hovering child 'removes' the parent hover state](https://stackoverflow.com/questions/17923922/hover-on-child-should-turn-off-hover-effect-on-parent) - This helped me on the cards component hover effects. 
- [ChatGPT](https://chat.openai.com/) - It helped me fetch the data from `data.json`.

## Author

- GitHub - [gutoPsilva](https://github.com/gutoPsilva)
- Frontend Mentor - [@gutoPsilva](https://www.frontendmentor.io/profile/gutoPsilva)
- LinkedIn - [Gustavo Pereira da Silva](https://www.linkedin.com/in/gustavo-pereira-da-silva-b5b684247/)
