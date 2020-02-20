/*
Yew Journ Chan
Weekly Assignment 4
Glitch Image Arrays
*/

var stateKey;
var stateStatic = 0;
var stateOne = 1;
var stateTwo = 2;
var stateThree = 3;
var stateFour = 4;
var stateFive = 5;
var r = 0;
let imgStatic; // Declare variable 'img'.
let img1;
let img2;
let img3;
let img4;
let img5;



// preload() will execture before setup()
function preload() {
  imgStatic = loadImage('assets/image1.jpg'); // Load static image
  img1 = loadImage('assets/image2.jpg');
  img2 = loadImage('assets/image3.jpg');
  img3 = loadImage('assets/image4.jpg');
  img4 = loadImage('assets/image5.jpg');
  img5 = loadImage('assets/image6.jpg');

}

function setup() {
	imageMode(CENTER);
	state = stateStatic
	createCanvas(1000, 1000);
}


//---------------------------------------------------------------
function draw() {
	//rotate image to represent vehicle turntable
	stroke(255);
  	fill(255);
  	translate(width/2, height/2);
  	r = r + 0.01
  	rotate(r)
  	translate(-width/2, -height/2);
  	ellipse(width/2, height/2, 200, 60);

	if(state == stateStatic) {
		background(0);
		drawStatic();
	}
	else if(state == stateOne) {
		background(0);
		drawOne();
	}
	else if(state == stateTwo) {
		background(0);
		drawTwo();
	}
	else if(state == stateThree) {
		background(0);
		drawThree();
	}
	else if(state == stateFour) {
		background(0);
		drawFour();
	}
	else if(state == stateFive) {
		background(0);
		drawFive();
	}
	else if(state == stateSix) {
		background(0);
		drawSix();
	}
}	

//----------------------------------------------------------------
function drawStatic() {
	 // Displays the image at center point
  	image(imgStatic, width/2, height/2);
  	if (mouseIsPressed) {
  		r = r / 10
  		textSize(32);
  		text('Aston Martin V8 Vantage', mouseX, mouseY);
  		fill(255);
  	}

	}
//----------------------------------------------------------------
function drawOne() {
	 // Displays the image at center point
  	image(img1, width/2,height/2);
  	if (mouseIsPressed) {
  	r = r^10
  	textSize(32);
  	text('Ferrari 458 Speciale', mouseX, mouseY);
  	fill(255, 153, 0);
  	}
  	
	}
//----------------------------------------------------------------
function drawTwo() {
	 // Displays the image at center point
  	image(img2, width/2, height/2);
  	if (mouseIsPressed) {
  	r = r - 10
  	textSize(32);
  	text('Mclaren P1 GTR', mouseX, mouseY);
  	fill(255, 153, 0);
  	}
  	
	}
//----------------------------------------------------------------
function drawThree() {
	 // Displays the image at center point
  	image(img3, width/2, height/2);
  	if (mouseIsPressed) {
  	r = r - 0.1
  	textSize(32);
  	text('Mercedes AMG-GT', mouseX, mouseY);
  	fill(255, 153, 0);
  	}
	}
//----------------------------------------------------------------
function drawFour() {
	 // Displays the image at center point
  	image(img4, width/2, height/2);
  	if (mouseIsPressed) {
  	r = r + 1
  	textSize(32);
  	text('Ferrari F40', mouseX, mouseY);
  	fill(255, 153, 0);
  	}
	}
//----------------------------------------------------------------
function drawFive() {
	 // Displays the image at center point
  	image(img5, width/2, height/2);
  	if (mouseIsPressed) {
  	r = r / 10
  	textSize(32);
  	text('Mercedes SLS AMG', mouseX, mouseY);
  	fill(255, 153, 0);
  	}
	}

//----------------------------------------------------------------
function keyPressed() {
	if(key == '0'){
		state = stateStatic;
	}
	if(key == '1'){
		print("changing to one");
		state = stateOne;
	}
	if(key == '2'){
		print("changing to two");
		state = stateTwo;
	}
	if(key == '3'){
		print("changing to three");
		state = stateThree;
	}
	if(key == '4'){
		print("changing to four");
		state = stateFour;
	}
	if(key == '5'){
		print("changing to five");
		state = stateFive;
	}
}
//----------------------------------------------------------------
