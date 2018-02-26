//DAT405 / GAD405
//exercise 4

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(800, 700);


  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(1);
  let y;
  let speedX;
  let speedY;
  let r;
  let g;
  let b;

  function setup(){
    createCanvas(400, 400);
    x = width/2;
    y = height/2;
    speedX = random(-5., 1);
    speedY = random(-5., 1);
    r = random(255);
    g = random(255);
    b = random(255);
  }

  function draw(){
    background(100);


    x += speedX;
    y += speedY;


  if (y>375) {
speedY = -speedY;
r = random(255);
g = random(255);
b = random(255);
}

if (y<25) {
speedY = -speedY;
r = random(255);
g = random(255);
b = random(255);
}

fill(r,g,b);
ellipse(x, y, 50, 50);
}
