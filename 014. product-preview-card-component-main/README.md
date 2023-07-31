# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

<div align="center">
  <img src="images\screenshots\desktop.jpeg" alt="desktop screenshot">
  <img src="images\screenshots\mobile.jpeg" alt="mobile screenshot" style="width: 375px">
</div>

### Links

- [Solution URL](https://github.com/gutoPsilva/FrontEnd-Mentor/tree/main/014.%20product-preview-card-component-main)
- [Live Site URL](https://gutopsilva.github.io/FrontEnd-Mentor/014.%20product-preview-card-component-main/dist/index.html)

## My process

### Built with

<!-- Badges -->
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

- HTML5
- CSS3
- Git
- Mobile-first workflow
- Github Pages
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Google Fonts](https://fonts.google.com/) - Fonts Library

### What I learned

This specific challenge helped me find out how to change the image source depending on the screen size directly on the HTML. The use of the <picture> tag is really useful when adding the 'media' attribute on it, i just added the min-width i wanted to change the image and boom!

```html
  <picture class="sm:w-55%">
    <!-- same min-width as 'sm:', to easily change the src of the img -->
    <source media="(min-width: 640px)" srcset="../images/image-product-desktop.jpg"> 
    <img src="../images/image-product-mobile.jpg" alt="Perfume Picture">
  </picture>
```

### Continued development

This is my first challenge using a framework, Tailwind CSS is AMAZING! Getting my hands on it while reading the proper documentation is making me realize that im improving a lot and also speeding my development. From now on i think i'll use only Tailwind CSS so i can master it, and after some challenges it'll be time to head onto React!

### Useful resources

- [Change img src depending on screen size](https://stackoverflow.com/questions/30460681/changing-image-src-depending-on-screen-size) - This helped me to change the image source file depending on the screen size.

## Author

- GitHub - [gutoPsilva](https://github.com/gutoPsilva)
- Frontend Mentor - [@gutoPsilva](https://www.frontendmentor.io/profile/gutoPsilva)
- LinkedIn - [Gustavo Pereira da Silva](https://www.linkedin.com/in/gustavo-pereira-da-silva-b5b684247/)