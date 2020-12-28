# iCade.js

This is exactly what it sounds like: a JavaScript library for building games for [the iCade](https://en.wikipedia.org/wiki/ICade).  I got one for Christmas and thought it would be fun to mess with.  This library creates a huge canvas (1024x1366 on my iPad) and provides an API for reading the iCade's controls.

## TO-DO LIST:

* Get audio working: I've tried WAV, I've tried MP3, I've tried OGG... does iOS Safari even _DO_ HTML5 audio?  I thought it did... maybe try Howler?
* Fine-tune the collision logic; i.e. if the ball bounces off the horizontal edge of the bat or a brick, also reverse horizontal speed.
* Set up the Game Over scenario (all 3 balls hit the bottom)
* Set up the high score system (localStorage?  Maybe build that high score API I've been thinking of?)
* Polish it up - add a menu screen, background music, etc.
* Test it completely - time to play! :)
* Write the docs on how to use iCade.js - I'll need them later. :)
* Move on to the next game - maybe experiment with WebAssembly Studio, or switch back to C/8-bit stuff.
