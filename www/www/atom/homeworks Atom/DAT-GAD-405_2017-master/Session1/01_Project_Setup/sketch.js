//DAT405 / GAD405
//loops and random colour(Exercise 03)

let size = 50;
//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
  frameRate(3);
  drawing speed 3 fps

  }

  function draw(){
  background(0);

  let m1 = map(mouseX,0,width,0,255);
  let m2 = map(mouseY,0,height,0,255);
  let m3 = map(mouseX,0,width,255,0);
  let m4 = map(mouseY,0,height,255,0);

  let c1 = colour(255,0,0,m1);
  let c2 = colour(0,255,0,m2);
  let c3 = colour(0,0,255,m3);
  let c4 = colour(255,0,255,m4);

  fill(c1);
  rect(0,0,size,size);
  fill(c2);
  rect(0,size,size,size);
  fill(c3);
  rect(size,0,size,zise);
  fill(c4);
  rect(size,size,size,size);

 }
}
