# Tenzies

A quick and simple game of Tenzi built with React.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Demo Link](#demo-link)
- [About the Project](#about-the-project)
  - [Status](#status)
  - [Built with](#built-with)
  - [Reflection](#reflection)
- [Author](#author)

## Overview

### Screenshots

Desktop version:<br/><br/>
<img src="./tenzies-desktop.png" width="800">

Mobile version:<br/><br/>
<img src="./tenzies-mobile.png" width="300">

### Demo Link

- Live Site URL: https://soojeong-park-ca.github.io/tenzies/

## About the Project

### Status

🛠 Currently working on fixing CSS styling for smaller devices...

### Built with

- HTML5
- CSS
- React
- Vite

### Reflection

This was a week long project built from scratch while taking the fourth module of Learn React for Free course by Bob Ziroll on Scrimba. Project goals included using React skills learned including React hooks like useState and useEffect.

I added the following extra features not covered in the lecture:

- making dice with CSS to use instead of dice with Arabic numerals
- tracking the number of rolls made to win the game
- tracking the time it took to win the game
- saving and bringing locally stored best time to display using localStorage

One of the main challenges I ran into was saving and tracking the best time to win the game. Originally, I was trying to save all of the times tracked into an array in the localStorage, but realized that the purpose of keeping track of the time in my app was to renew the best time. Therefore, I decided to renew the time saved in the localStorage only when the time is shorter than the one already saved. This decision made the process simpler and fulfilled the goal of tracking only the best time.

The technologies implemented in this project are React, HTML, JavaScript, JSX, and CSS. I chose to use Vite boilerplate to minimize initial setup and invest more time into creating component functions that made what I intended actually work.

## Author

Soojeong Park

@codingsooj https://twitter.com/codingsooj
