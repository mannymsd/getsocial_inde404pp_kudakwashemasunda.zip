//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//exercise geometric universe

//Initialization function
function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  //frameRate(1);
  noloop();

}


function draw() {
  background(50);
  //circles in loops
  for (var i = 0; i < 300; i++){
    push();
    //sizes on the canvas
    translate(random(width), random(height));
    //rotation
    rotate(random(2*PI));
    //scale
    scale(random(1.5), random(1.5));
    //colour
    stroke(random(255), random(255), random(255));
    ellipse(0, 0, 40, 40);
    pop();
  }

}
