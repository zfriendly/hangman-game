# Hangman Game
Creating a front-end game of hangman.

# Front-End Game Project Requirements

The game must:

* Render in the browser
* Include separate HTML / CSS / JavaScript files
* Use Javascript for DOM manipulation
* Be deployed online, using Github Project pages and/or to a custom domain.
* Use semantic markup for HTML and CSS (adhere to best practices)
* Show a good commit history with frequent commits
* Additionally, project should stick with KISS (Keep It Stupid Simple) and DRY (Don't Repeat Yourself) principles.

## Prerequisites

- GitHub account
- Knowledge of:
  - JavaScript
  - DOM
  - APIs
  - CSS

## My Process

1. Wireframed and built out the HTML and some basic CSS.
2. Instead of focusing on the JS, I focused too much on CSS styling, which ended up being a pain.
3. Built the keyboard creator function in the DOM.
4. Built out two separate functions for getting words:
   1. Random word generation which fetches a word from the [Random Word API](https://random-word-api.herokuapp.com/).
   2. User-inputted word generator, using a form.
5. Wrote, and re-wrote, the checkforMatch function. Initially I tried using two forEach functions, but found that it wasn't going to allow me to verify when the user had won or lost, so I pivoted to using an indexOf method to simplify the structure, checking if the guess was incorrect FIRST, then adding the display to the letter AFTER.
6. Went back and restyled everything in CSS to match the new functionality.
7. Added a number of new features, including sounds, a music-player, new cursor types (the gun), other images, etc.
8. Worked on responsiveness. I should have started with this in mind, which would've made all of my CSS more flexible, but I'm slowly learning the importance of this!

## Deployed with:

I used GitHub to host my site, which can be found [**HERE**](https://zfriendly.github.io/hangman-game/).

## Attributions

All API data came from [Random Word API](https://random-word-api.herokuapp.com/).

Cowboy image courtesy of [Neka Schultz](http://www.nekaschultz.com/gifs).

## Contributing/Future Additions

Feel free to find me on [GitHub](https://github.com/zfriendly) if you're interested in contributing. I had a couple of things I wanted to work on moving forward:
1. Having the event listeners removed once a letter was guessed.
2. Adding a tumbleweed animation (already designed) roll across the screen every 5-10 seconds.
3. Adding local storage so that your score can be tracked even after you reload your browser.
4. Adding more adaptability to the cowboy image so you can interact with him during the gameplay.
5. Making the game more responsive between mobile sizes and laptop sizes.

## Screenshots

#### Hangman Game UI:
![Functionality](https://i.imgur.com/3obfDtG.png)

#### Winning Modal Overlay Screen:
![Winning Screen](https://i.imgur.com/dgE6iPI.png)

## Author

- [Zack Friendly](https://github.com/zfriendly)
