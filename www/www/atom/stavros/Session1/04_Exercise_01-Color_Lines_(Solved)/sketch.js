var x = 0;
function setup() {
  createCanvas(100, 100,);
  noLoop();
}

function draw() {
  background(204);
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(x, 0, x, height);

}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
