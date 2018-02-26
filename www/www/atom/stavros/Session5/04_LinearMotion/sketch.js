//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//04_Linear Motion

//Setup of variables
let x;
let y;
let ellipseSize = 50;

function setup(){
  createCanvas(400, 400);
  x = 0;
  y = height/2;
}

function draw(){
  background(160);
  //Add +1 pixel to the position of x (for every frame)
  x = x + 1;
  console.log(x);
  //If the position of the ellipse reaches the limit of the canvas,
  //then reset its position to 0 - ellipse appears from the left again
  if (x > 425){ //425 comes from 400 (width) + 25 (half size of ellipse)
    x = -25; //instead reset to 0, we reset to 0-25 (half size of ellipse)
  }
  //We only change the position of x (y is static to middle)
  ellipse(x, y, ellipseSize, ellipseSize);
}
