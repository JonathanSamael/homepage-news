# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Make a hamburguer menu with css and JavaScript

### Screenshot

![Screenshot](./design/screenshot.png)

### Links

- Solution URL: [GitHub solution](https://github.com/JonathanSamael/homepage-news)
- Live Site URL: [View on GitHub Pages](https://jonathansamael.github.io/homepage-news/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Variables, methods and functions in JavaScript

### What I learned

New properties to apply in CSS and JS.

```css
.overlay {
    position: fixed;
    display: none;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
}
```

```js
function toggleMenu() {
    overlay.classList.toggle("show-overlay")
    itemsMenu.classList.toggle("show-menu")
}
```

## Author

- Instagram - [@jonathan_samael_](https://www.instagram.com/jonathan_samael_/)
- Frontend Mentor - [@JonathanSamael](https://www.frontendmentor.io/profile/JonathanSamael)
- LinkedIn - [@jonathan-amaral](https://www.linkedin.com/in/jonathan-amaral/)
