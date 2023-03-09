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

- Live Site URL: (to be added soon)

## About the Project

### Status

🛠 Currently working on :
- Fixing CSS styling for smaller devices
- Looking for different libraries to use so I can fix the Invalid Hook Call Warning. It seems like the error is coming from having more than one `react` and `react-dom` dependecies besides my app. After doing some research online, I looked into the package.json files of the libraries I downloaded and they both have `react` and `react-dom` in the devDependencies.

### Built with

- HTML
- CSS
- React
- Vite

### Reflection

This was a week long project built from scratch while taking the fourth module of Learn React for Free course by Bob Ziroll on Scrimba. Project goals included using React skills learned including React hooks like useState and useEffect.

I added the following extra features not covered in the lecture:

- making dice with dots with CSS to use instead of dice with Arabic numerals
- tracking the number of rolls made to win the game
- tracking the time it took to win the game
- saving and bringing locally stored best time to display using localStorage

One of the main challenges I ran into was saving and tracking the best time to win the game. Originally, I was trying to save all of the times tracked into an array in the localStorage, but realized that the purpose of keeping track of the time in my app was to renew the best time. Therefore, I decided to renew the time saved in the localStorage only when the time is shorter than the one already saved. This decision made the process simpler and fulfilled the goal of tracking only the best time.

The technologies implemented in this project are React, HTML, JavaScript, JSX, and CSS. I chose to use Vite boilerplate to minimize initial setup and invest more time into creating component functions that made what I intended actually work.

## Author

Soojeong Park

[@codingsooj] (https://twitter.com/codingsooj)
