# DanceRevolution

![](https://github.com/alexg622/DanceRevolution/blob/master/images/Screen%20Shot%202018-06-22%20at%2012.03.40%20AM.png?raw=true)

![](https://github.com/alexg622/DanceRevolution/blob/master/images/Screen%20Shot%202018-06-22%20at%2012.04.02%20AM.png?raw=true)


# Background and Overview

DanceRevolution is made purely from Javascript, CSS3, and HTML5. This app has the functionality of generating random arrows for each game so that no two games are ever the same. I also came up with an algorithm to keep beats per minute since setInterval would not keep accurate time. The user can choose between two difficulty settings, normal, and expert. To play the game, click on a difficulty setting and catch the falling arrows using the arrows on your keypad. 

# Functionality & MVP

In DanceRevolution, users will be able to:
- [ ] Choose a difficulty setting
- [ ] Choose a song to play to
- [ ] Mute the music
- [ ] Pause or start a game
- [ ] Follow a pattern of steps to the music with the arrow keys

# Wireframes

DanceRevolution will be an app where the user can mute the music by clicking the button on the top left of the screen.

Users will have their score and combos displayed at the top right of the screen.

there will be an up, down, left, and right arrow at the bottom of the screen in the middle of the page. Arrows will fall down onto the dance pad and users will have to press the corresponding button to the arrow at the right time to receive a point.

Users will be able to select a song and difficulty level.  

![](https://github.com/alexg622/DanceRevolution/blob/master/DanceRevoultion2.png?raw=true)

![](https://github.com/alexg622/DanceRevolution/blob/master/DanceRevolution1.png?raw=true)

# Architecture and Technologies

DanceRevolution will use the following technologies:

- Vanilla Javascript for structure and game logic
- `HTML5 Canvas` for creation of arrow keys and a background canvas

`arrows.js`: Will handle holding the arrows for the game and dispensing them at the proper times
`game.js`: Will handle the game logic and keep track of a players combos and points


# Implementation Timeline

## Day 1:

- [ ] Set up canvas and arrow dimensions
- [ ] Set up user's arrows pad at the bottom of the screen
- [ ] Research how to get the arrows to fall into the user's arrows pad from the top of the screen

## Day 2:
- [ ] Complete the functionality of music for the app
- [ ] Implement the functionality of the mute button

## Day 3:
- [ ] Complete functionality of allowing users to interact with the falling arrows, gaining points when hitting their arrow in sync with a falling one.
- [ ] Complete functionality of the user's score and combos appearing on the right of the screen.

## day 4:
- [ ] Complete three songs
- [ ] Add medium difficulty for each song

## Day 5:
- [ ] Add hard difficulty for each song
- [ ] Allow user to pause the game

# Bonus Features
- [ ] Pop up modal for a user to choose a difficulty
- [ ] 6 different songs to choose from
