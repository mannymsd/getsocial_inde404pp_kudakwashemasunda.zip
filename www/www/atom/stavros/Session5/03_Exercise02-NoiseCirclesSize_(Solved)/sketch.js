//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_Exercise02_NoiseCirclesSize_(Solved)

//Setup of variables
let r = 255;
let g = 255;
let b = 255;
let speed = 3;
let diameter = 50;
let x1;
let y1;

function setup() {
  createCanvas(500, 500);
  //On setup ellipse appears in the middle of the screen
  x1 = width/2;
  y1 = height/2;
  background(200);
}

function draw() {
  //Assign mouseX and mouseY to variables x1 and y1
  //Constrain them within the boundaries of the canvas
  x1 = mouseX;
  y1 = mouseY;
  x1 = constrain(x1, 0, width);
  y1 = constrain(y1, 0, height);

  //Create x2 and y2 and assign the reversed x1 and y1 values
  let x2 = map(x1, 0, width, width, 0);
  let y2 = map(y1, 0, height, height, 0);

  //Calculate the distance between the centre of canvas and x1 and y1
  //Based on the maximum distance we can have from the centre (350 pixels),
  //map the new range from 1 to 80
  //1: size of the circle when is close to the edges of the canvas
  //80: size of the circle when exactly on the centre of the canvas
  let distanceFromCenter = dist(width/2, height/2, x1, y1);
  let newSize = map(distanceFromCenter, 0, 350, 80, 1);

  //Change the color on mouse press
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  fill (r, g, b, 120);
  ellipse(x1, y1, newSize, newSize);
  ellipse(x2, y1, newSize, newSize);
  ellipse(x1, y2, newSize, newSize);
  ellipse(x2, y2, newSize, newSize);
}
