//change the shapes and how to change the colours and shapes due to the use of
//the mouse and the keyboard
let selection = 0

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  frameRate(10);
  //noLoop;
}

function draw() {
  background(10);
  //Create 100 rings using the for-loop
  for (var i = 0; i < 300; i++) {
    push(); //store the matrix before translate
    //Random position between the size of the canvas
    translate(random(width), random(height));
    //Random rotation
    rotate(random(2*PI));
    //Random scale
    scale(random(1.5), random(1.5));
    //Random stroke color
    stroke(random(255), random(255), random(255));

    //Selection of colors
    //Based on the key pressed (defined outside the for-loop),
    //the selection variable will either be 0, 1, or 2.
    //This selected one of the colors defined below

    if (selection===0) ellipse(0, 0, 40, 40);
    if (selection===1) rect(0, 0, 40, 40);
    if (selection===2) triangle(15, 37, 29, 10, 43, 37);
    if (selection===3) arc(25, 25, 40, 40, 0, PI+QUARTER_PI, PIE);
    if (selection===4) quad(19, 15, 43, 10, 35, 31, 15, 38);

    pop(); //reset the matrix to original state
  }

  //According to the key pressed, change the number of the selection variable
  if (key === 'c') selection = 0;
  if (key === 'r') selection = 1;
  if (key === 't') selection = 2;
  if (key === 'a') selection = 3;
  if (key === 'q') selection = 4;

}
