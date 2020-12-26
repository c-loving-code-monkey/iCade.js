/** 
 * Mini-library for the "Ion iCade" arcade cabinet
 * @author The Geek on Skates
 * @version 0.0.0
 * @license UNLICENSE
 */
let iCade = {

    width: 0,       /** The canvas width (defined in load()) */
    height: 0,      /** The canvas height (defined in load()) */
    screen: null,   /** The canvas's "context" object (set up in load()) */
    left: 0,        /** Whether or not the joystick's horizontal axis is pointing left */
    right: 0,       /** Whether or not the joystick's horizontal axis is pointing right */
    up: 0,          /** Whether or not the joystick's vertical axis is pointing up */
    down: 0,        /** Whether or not the joystick's vertical axis is pointing down */
    b1: 0,          /** Whether or not the top red button is pressed */
    b2: 0,          /** Whether or not the bottom red button is pressed */
    b3: 0,          /** Whether or not the top left black button is pressed */
    b4: 0,          /** Whether or not the bottom left black button is pressed */
    b5: 0,          /** Whether or not the top right black button is pressed */
    b6: 0,          /** Whether or not the bottom right black button is pressed */
    b7: 0,          /** Whether or not the top white button is pressed */
    b8: 0,          /** Whether or not the bottom white button is pressed */
    
    /** 
     * This does the initial setup for the canvas, the controls, and the main game loop
     * @param {Function} loop The code to be run in the main game loop
     */
    load: function(loop) {
        let c = document.createElement("canvas");
        c.width = 1024; c.height = 1366;
        iCade.width = 1024; iCade.height = 1366;
        c.style.position = "absolute";
        c.style.left = "0px"; c.style.top = "0px";
        c.style.width = "100vw"; c.style.height = "100vh";
        document.body.appendChild(c);
        iCade.screen = c.getContext("2d");
        window.addEventListener("keydown", iCade._b);
        iCade._l(loop);
    },

    /**
     * Handles the controls 
     * @param {Event} e An onkeydown event object
     */
    _b: function(e) {
        if (e.which == 87) iCade.up = 1; else if (e.which == 69) iCade.up = 0;
        else if (e.which == 88) iCade.down = 1; else if (e.which == 90) iCade.down = 0;
        else if (e.which == 65) iCade.left = 1; else if (e.which == 81) iCade.left = 0;
        else if (e.which == 68) iCade.right = 1; else if (e.which == 67) iCade.right = 0;
        else if (e.which == 89) iCade.b1 = 1; else if (e.which == 84) iCade.b1 = 0;
        else if (e.which == 72) iCade.b2 = 1; else if (e.which == 82) iCade.b2 = 0;
        else if (e.which == 85) iCade.b3 = 1; else if (e.which == 70) iCade.b3 = 0;
        else if (e.which == 74) iCade.b4 = 1; else if (e.which == 78) iCade.b4 = 0;
        else if (e.which == 73) iCade.b5 = 1; else if (e.which == 77) iCade.b5 = 0;
        else if (e.which == 75) iCade.b6 = 1; else if (e.which == 80) iCade.b6 = 0;
        else if (e.which == 79) iCade.b7 = 1; else if (e.which == 71) iCade.b7 = 0;
        else if (e.which == 76) iCade.b8 = 1; else if (e.which == 86) iCade.b8 = 0;
    },

    /**
     * Implements the main game loop
     * @param {Function} c The code to run in the loop
     */
    _l: function(c) {
        c(); requestAnimationFrame(function() {
            iCade._l(c);
        });
    }
};

