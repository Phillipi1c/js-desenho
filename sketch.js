function setup() {
    createCanvas(400, 400);
    
    background("orange");
  }
  
  function draw() {
    
    stroke("green");
    fill("blue");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);
    }
  }
  