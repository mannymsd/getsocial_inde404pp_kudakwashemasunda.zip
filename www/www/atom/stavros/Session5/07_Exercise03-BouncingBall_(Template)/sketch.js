//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//07_Bouncing Ball Exercise (Template)
//For this exercise make sure that the ellipse does not
//appear from the other side, but rather bounds back from the edges
//When it bounces back, it also changes a random color

//Setup of variables
let x;
let y;
let speedX;
let speedY;

function setup(){
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  //Randomize speedX and SpeedY
  //Positive means the ellipse moves forward,
  //and negative it moves backwards
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
}

function draw(){
  background(100);

  //For a new frame accumulate a new value to x and y
  //based on the random speedX and speedY
  x += speedX;
  y += speedY;

  //If ellipse goes off screen (right side of canvas),
  //then reset position to 0 (aappears from the left)
  if (x>425) x = -25;
  //If ellipse goes off screen (left side of canvas),
  //then reset position to 400 (appears from the right)
  if (x<-25) x = 425;
  //Same applies here, but for the y coordinates
  if (y>425) y = -25;
  if (y<-25) y = 425;

  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}
