//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//06_Motion Random Speed (No Background)

//Setup of variables
let x;
let y;
let speedX;
let speedY;
let r, g, b = 255; //Initialize r,g,b each to 255

function setup(){
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  //Randomize speedX and speedY
  //Positive means the ellipse moves forward,
  //and negative it moves backwards
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);

  textSize(16);
  noStroke();
  background(160);
}

function draw(){
  //For a new frame accumulate a new value to x and y
  //based on the random speedX and speedY
  x = x + speedX;
  y = y + speedY;

  //If ellipse goes off screen (right side of canvas),
  //then reset position to 0 (aappears from the left)
  if (x>425){ //width plus 25 (half size of ellipse)
    r = random (255);
    g = random (255);
    b = random (255);
    x = -25; //appear to 0-25 (half size of ellipse)
    speedX = random(-5., 5.); //Randomize speed
    speedY = random(-5., 5.);
  }
  //If ellipse goes off screen (left side of canvas),
  //then reset position to 400 (appears from the right)
  if (x<-25){
    r = random (255);
    g = random (255);
    b = random (255);
    x = 425;
    speedX = random(-5., 5.); //Randomize speed
    speedY = random(-5., 5.);
  }
  //Same applies here, but for the y coordinates
  if (y>425){
    r = random (255);
    g = random (255);
    b = random (255);
    y = -25;
    speedX = random(-5., 5.); //Randomize speed
    speedY = random(-5., 5.);
  }
  if (y<-25){
    r = random (255);
    g = random (255);
    b = random (255);
    y = 425;
    speedX = random(-5., 5.); //Randomize speed
    speedY = random(-5., 5.);
  }

  fill(r, g, b);
  ellipse(x, y, 50, 50);
}
