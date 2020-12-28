//#region CONSTANTS & GLOBAL VARIABLES

const LEVEL_1_BRICKS = [
	{x: 32, y: 240, w: 64, h: 32, c: "red" },
	{x: 96, y: 240, w: 64, h: 32, c: "red" },
	{x: 160, y: 240, w: 64, h: 32, c: "red" },
	{x: 224, y: 240, w: 64, h: 32, c: "red" },
	{x: 288, y: 240, w: 64, h: 32, c: "red" },
	{x: 352, y: 240, w: 64, h: 32, c: "red" },
	{x: 416, y: 240, w: 64, h: 32, c: "red" },
	{x: 480, y: 240, w: 64, h: 32, c: "red" },
	{x: 544, y: 240, w: 64, h: 32, c: "red" },
	{x: 608, y: 240, w: 64, h: 32, c: "red" },
	{x: 672, y: 240, w: 64, h: 32, c: "red" },
	{x: 736, y: 240, w: 64, h: 32, c: "red" },
	{x: 800, y: 240, w: 64, h: 32, c: "red" },
	{x: 864, y: 240, w: 64, h: 32, c: "red" },
	{x: 928, y: 240, w: 64, h: 32, c: "red" },
	{x: 32, y: 272, w: 64, h: 32, c: "orange" },
	{x: 96, y: 272, w: 64, h: 32, c: "orange" },
	{x: 160, y: 272, w: 64, h: 32, c: "orange" },
	{x: 224, y: 272, w: 64, h: 32, c: "orange" },
	{x: 288, y: 272, w: 64, h: 32, c: "orange" },
	{x: 352, y: 272, w: 64, h: 32, c: "orange" },
	{x: 416, y: 272, w: 64, h: 32, c: "orange" },
	{x: 480, y: 272, w: 64, h: 32, c: "orange" },
	{x: 544, y: 272, w: 64, h: 32, c: "orange" },
	{x: 608, y: 272, w: 64, h: 32, c: "orange" },
	{x: 672, y: 272, w: 64, h: 32, c: "orange" },
	{x: 736, y: 272, w: 64, h: 32, c: "orange" },
	{x: 800, y: 272, w: 64, h: 32, c: "orange" },
	{x: 864, y: 272, w: 64, h: 32, c: "orange" },
	{x: 928, y: 272, w: 64, h: 32, c: "orange" },
	{x: 32, y: 304, w: 64, h: 32, c: "green" },
	{x: 96, y: 304, w: 64, h: 32, c: "green" },
	{x: 160, y: 304, w: 64, h: 32, c: "green" },
	{x: 224, y: 304, w: 64, h: 32, c: "green" },
	{x: 288, y: 304, w: 64, h: 32, c: "green" },
	{x: 352, y: 304, w: 64, h: 32, c: "green" },
	{x: 416, y: 304, w: 64, h: 32, c: "green" },
	{x: 480, y: 304, w: 64, h: 32, c: "green" },
	{x: 544, y: 304, w: 64, h: 32, c: "green" },
	{x: 608, y: 304, w: 64, h: 32, c: "green" },
	{x: 672, y: 304, w: 64, h: 32, c: "green" },
	{x: 736, y: 304, w: 64, h: 32, c: "green" },
	{x: 800, y: 304, w: 64, h: 32, c: "green" },
	{x: 864, y: 304, w: 64, h: 32, c: "green" },
	{x: 928, y: 304, w: 64, h: 32, c: "green" },
	{x: 32, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 96, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 160, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 224, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 288, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 352, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 416, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 480, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 544, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 608, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 672, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 736, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 800, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 864, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 928, y: 336, w: 64, h: 32, c: "cyan" },
	{x: 32, y: 368, w: 64, h: 32, c: "blue" },
	{x: 96, y: 368, w: 64, h: 32, c: "blue" },
	{x: 160, y: 368, w: 64, h: 32, c: "blue" },
	{x: 224, y: 368, w: 64, h: 32, c: "blue" },
	{x: 288, y: 368, w: 64, h: 32, c: "blue" },
	{x: 352, y: 368, w: 64, h: 32, c: "blue" },
	{x: 416, y: 368, w: 64, h: 32, c: "blue" },
	{x: 480, y: 368, w: 64, h: 32, c: "blue" },
	{x: 544, y: 368, w: 64, h: 32, c: "blue" },
	{x: 608, y: 368, w: 64, h: 32, c: "blue" },
	{x: 672, y: 368, w: 64, h: 32, c: "blue" },
	{x: 736, y: 368, w: 64, h: 32, c: "blue" },
	{x: 800, y: 368, w: 64, h: 32, c: "blue" },
	{x: 864, y: 368, w: 64, h: 32, c: "blue" },
	{x: 928, y: 368, w: 64, h: 32, c: "blue" },
	{x: 160, y: 368, w: 64, h: 32, c: "blue" },
	{x: 224, y: 368, w: 64, h: 32, c: "blue" },
	{x: 288, y: 368, w: 64, h: 32, c: "blue" },
	{x: 352, y: 368, w: 64, h: 32, c: "blue" },
	{x: 416, y: 368, w: 64, h: 32, c: "blue" },
	{x: 480, y: 368, w: 64, h: 32, c: "blue" },
	{x: 544, y: 368, w: 64, h: 32, c: "blue" },
	{x: 608, y: 368, w: 64, h: 32, c: "blue" },
	{x: 672, y: 368, w: 64, h: 32, c: "blue" },
	{x: 736, y: 368, w: 64, h: 32, c: "blue" },
	{x: 800, y: 368, w: 64, h: 32, c: "blue" },
	{x: 864, y: 368, w: 64, h: 32, c: "blue" },
	{x: 928, y: 368, w: 64, h: 32, c: "blue" },
	{x: 32, y: 400, w: 64, h: 32, c: "purple" },
	{x: 96, y: 400, w: 64, h: 32, c: "purple" },
	{x: 160, y: 400, w: 64, h: 32, c: "purple" },
	{x: 224, y: 400, w: 64, h: 32, c: "purple" },
	{x: 288, y: 400, w: 64, h: 32, c: "purple" },
	{x: 352, y: 400, w: 64, h: 32, c: "purple" },
	{x: 416, y: 400, w: 64, h: 32, c: "purple" },
	{x: 480, y: 400, w: 64, h: 32, c: "purple" },
	{x: 544, y: 400, w: 64, h: 32, c: "purple" },
	{x: 608, y: 400, w: 64, h: 32, c: "purple" },
	{x: 672, y: 400, w: 64, h: 32, c: "purple" },
	{x: 736, y: 400, w: 64, h: 32, c: "purple" },
	{x: 800, y: 400, w: 64, h: 32, c: "purple" },
	{x: 864, y: 400, w: 64, h: 32, c: "purple" },
	{x: 928, y: 400, w: 64, h: 32, c: "purple" },
	{x: 160, y: 400, w: 64, h: 32, c: "purple" },
	{x: 224, y: 400, w: 64, h: 32, c: "purple" },
	{x: 288, y: 400, w: 64, h: 32, c: "purple" },
	{x: 352, y: 400, w: 64, h: 32, c: "purple" },
	{x: 416, y: 400, w: 64, h: 32, c: "purple" },
	{x: 480, y: 400, w: 64, h: 32, c: "purple" },
	{x: 544, y: 400, w: 64, h: 32, c: "purple" },
	{x: 608, y: 400, w: 64, h: 32, c: "purple" },
	{x: 672, y: 400, w: 64, h: 32, c: "purple" },
	{x: 736, y: 400, w: 64, h: 32, c: "purple" },
	{x: 800, y: 400, w: 64, h: 32, c: "purple" },
	{x: 864, y: 400, w: 64, h: 32, c: "purple" },
	{x: 928, y: 400, w: 64, h: 32, c: "purple" },
];
const boing = new Audio("./boing.wav");

let leftWall = {x: 0, y: 48, w: 32, h: 1366 },
	rightWall = {x: 992, y: 48, w: 32, h: 1366 },
	topWall = {x: 32, y: 48, w: 960, h: 32 },
	ball = {x: 416, y: 700, w: 32, h: 32, hspeed: 0, vspeed: 0 },
	bat = {x: 384, y: 1280, w: 192, h: 32 },
	bricks = [], score = 0, balls = 3;

//#endregion
//#region DRAWING FUNCTIONS

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
 * @param {Brick} r An object with x, y, w, h and c (color)
 */
function drawBrick(r) {
	iCade.screen.fillStyle = "dark" + r.c;
	iCade.screen.fillRect(r.x, r.y, r.w, r.h);
	iCade.screen.fillStyle = r.c;
	iCade.screen.fillRect(r.x + r.w/8, r.y, r.w * 0.75, r.h * 0.75);
}

/**
 * Draws the score
 * @param {number} s The score
 */
function drawScore(s) {
	iCade.screen.fillStyle = "white";
	iCade.screen.font = "40px bold sans serif";
	iCade.screen.fillText("SCORE:	" + score, 4, 40, 1024);
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

/**
 * Draws the screen (calls all the other drawing functions)
 */
function updateScreen() {
	clear();
	drawScore(score);
	drawBallCount(balls);
	drawWall(leftWall);
	drawWall(rightWall);
	drawWall(topWall);
	drawBat(bat);
	drawBall(ball);
	for (let i=0; i<bricks.length; i++)
		drawBrick(bricks[i]);
}

//#endregion
//#region GAME LOGIC FUNCTIONS

/**
 * Handles player input
 */
function input() {
	if (iCade.right && bat.x < 800) bat.x += 32;
	else if (iCade.left && bat.x > 32) bat.x -= 32;
}

/**
 * Called in iCade.load - this is the main game loop
 */
function loop() {
	input();
	if (collision(ball, bat) && ball.vspeed > 0) {
		ball.vspeed *= -1;
		boing.play();
	}
	else if (collision(ball, topWall))
			ball.vspeed *= -1;
	else if (collision(ball, leftWall) || collision(ball, rightWall)) {
		ball.hspeed *= -1;
	}
	if (ball.y >= iCade.height) {
		balls--;
		// if (balls == 0) game over
		setBall();
	}
	for (let i=0; i<bricks.length; i++) {
		if (collision(ball, bricks[i])) {
			bricks.splice(i, 1);
			score += 10;
			new Audio("crack.wav").play();
			ball.vspeed *= -1;
		}
	}
	ball.x += ball.hspeed;
	ball.y += ball.vspeed;
	fasterBall();
	updateScreen();
}

/**
 * Checks if two rectangles collide
 * @param {Rectangle} r1 The first rectangle
 * @param {Rectangle} r2 The second rectangle
 * @returns {boolean} True if they collide, false if they don't
 */
function collision(r1, r2) {
	return (r1.x <= r2.x + r2.w && r1.x + r1.w >= r2.x
			&& r1.y <= r2.y + r2.h && r1.y + r1.h >= r2.y);
}

/**
 * Gradually increases the ball's vertical speed as the game goes on
 */
function fasterBall() {
	if (ball.vspeed > -20 && ball.vspeed < 20) {
		if (ball.vspeed < 0) {
			ball.vspeed -= 0.0001;
			return;
		}
		ball.vspeed += 0.0001;
	}
}

/**
 * Sets/re-sets the ball to its starting position and speed, with a bit of randomness thrown in
 */
function setBall() {
	ball.x = 416; ball.y = 700;
	ball.hspeed = Math.random() * 10;
	if (Math.random() < 0.5) ball.hspeed *= -1;
	ball.vspeed = 2 + Math.random();
}

/**
 * This gets called when the game first starts.
 */
function main() {
	setBall();
	bricks = LEVEL_1_BRICKS;
	iCade.load(loop);
}

//#endregion
