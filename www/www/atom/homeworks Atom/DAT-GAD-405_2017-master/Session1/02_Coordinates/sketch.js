//DAT405 / GAD405
//nested forloop(Exercise 02)

let size = 50;
//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(500, 500);
  noLoop();
  }

  function draw(){
  fill(215,200,170);

  //run the nested loop for x and y
  for(let y=0; y<10; y++){
    for(let x=0; x<10; x++){
      //will draw a shape corresponding to position
      //generate position for x and y
      //the shapes will be redrwan depending on the number of loops mentioned
      rect(size * x, size * y, size, size);
    }
  }

  for(let y = 0; y < 10; y++){
    for(let x = 0; x< 10; x++){
    //will draw a shape corresponding to position
    //generate position for x and y
    //the shapes will be redrwan depending on the number of loops mentioned
    fill(random(0,255), random(0,255), random(0,255))
    rect(size * x + size/4, size * y + size/4, size/2, size/2);
  }
 }
}
