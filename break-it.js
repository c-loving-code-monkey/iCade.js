// ----------------------------------------------------------------------------------------------------------
// GLOBAL VARIABLES
// ---------------------------------------------------------------------------------------------------------

let leftWall = {x: 0, y: 48, w: 32, h: 1366 },
    rightWall = {x: 992, y: 48, w: 32, h: 1366 },
    topWall = {x: 32, y: 48, w: 960, h: 32 },
    ball = {x: 64, y: 700, w: 32, h: 32 },
    testBrick = {x: 320, y: 480, w: 64, h: 32 }
    bat = {x: 64, y: 1300, w: 192, h: 32 },
    bricks = [], score = 0, balls = 3;

// ----------------------------------------------------------------------------------------------------------
// DRAWING FUNCTIONS
// ---------------------------------------------------------------------------------------------------------

/**
 * Clears the screen
 */
function clear() {
    iCade.screen.fillStyle = "black";
    iCade.screen.fillRect(0, 0, iCade.width, iCade.height);
}

/**
 * Draws the ball
 * @param {Rectangle} r An object with x, y, w and h
 * @remarks Note that even though the image is a circle, I'm using the
 * same bounding-box collision as I would use for rectangles.  If you
 * are a math guru and feel like changing it, feel free to do so. :)
 * Note also that "Rectangle" here is a duck-typed object; JS doesn't
 * do "interfaces" like TS, C#, C++ etc. so it's just an object.  But
 * this type of object will be used throughout this game.
 */
function drawBall(r) {
    iCade.screen.beginPath();
    iCade.screen.fillStyle = "yellow";
    iCade.screen.arc(r.x + r.w/2, r.y + r.h/2, r.w/2, 0, Math.PI * 2);
    iCade.screen.fill();
    iCade.screen.closePath();
}

/**
 * Draws the bat
 * @param {Rectangle} r An object with x, y, w and h
 */
function drawBat(r) {
    iCade.screen.fillStyle = "yellow";
    iCade.screen.fillRect(r.x, r.y, r.w, r.h);
    iCade.screen.fillStyle = "gold";
    iCade.screen.fillRect(r.x, r.y + r.h/2, r.w, r.h / 2);
}

/**
 * Draws a brick
 * @param {Rectangle} r An object with x, y, w and h
 * @todo Left off here
 */
function drawBrick(r) {
    // TO-DO
}

/**
 * Draws the score
 * @param {number} s The score
 */
function drawScore(s) {
    iCade.screen.fillStyle = "white";
    iCade.screen.font = "40px bold sans serif";
    iCade.screen.fillText("SCORE:    " + score, 4, 40, 1024);
}

/**
 * Draws the total number of balls at the top right
 * @param {number} b The total balls (1-3)
 */
function drawBallCount(b) {
    drawBall({x: 860, y: 8, w: 32, h: 32});
    if (b == 1) return;
    drawBall({x: 920, y: 8, w: 32, h: 32});
    if (b == 2) return;
    drawBall({x: 980, y: 8, w: 32, h: 32});
}

/**
 * Draws a wall
 * @param {Rectangle} r An object with x, y, w and h
 */
function drawWall(r) {
    // Draw the blue background
    iCade.screen.fillStyle = "navy";
    iCade.screen.fillRect(r.x, r.y, r.w, r.h);

    // Draw a little triangle to give it some more color
    iCade.screen.fillStyle = "blue";
    let w = r.w / 32, h = r.h / 32;
    for (let i=0; i<w; i++) {
        let left = i * 32;
        for (let j=0; j<h; j++) {
            let top = j * 32;
            iCade.screen.beginPath();
            iCade.screen.moveTo(r.x + left, r.y + top);
            iCade.screen.lineTo(r.x + left + 32, r.y + top);
            iCade.screen.lineTo(r.x + left + 32, r.y + top + 32);
            iCade.screen.fill();
            iCade.screen.closePath();
        }
    }
}

// ----------------------------------------------------------------------------------------------------------
// GAME LOGIC FUNCTIONS
// ---------------------------------------------------------------------------------------------------------

/**
 * Handles player input
 */
function input() {
    if (iCade.right && bat.x < 800) bat.x += 2;
    else if (iCade.left && bat.x > 32) bat.x -= 2;
}

/**
 * Called in iCade.load - this is the main game loop
 */
function loop() {
    clear();
    drawScore(score);
    drawBallCount(balls);
    drawWall(leftWall);
    drawWall(rightWall);
    drawWall(topWall);
    drawBat(bat);
    drawBall(ball);
    drawBrick(testBrick);
}
