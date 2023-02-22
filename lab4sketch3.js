function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myTriangle(20, 50, 100, 200, 300, 100);
  myEllipse(30, 40, 100, 200);
  mySquare(100, 200, 50)
  mySprite();
}
function myTriangle(x1, y1, x2, y2, x3, y3, myColor){
  fill (100, 200, 255)
  triangle(x1, y1, x2, y2, x3, y3);
}
function myEllipse(x, y, ellipseWidth, ellipseHeight, myColor){
  fill(50, 70, 100)
  ellipse(x, y, ellipseWidth, ellipseHeight);
}
function mySquare(x, y, squareSize, myColor){
  fill(80, 100, 60)
  square(x, y, squareSize);
}
function mySprite(x, y, z){
  fill("brown");
  rect(5, 5, 100);
  ellipse(55, 55, 80);
  ellipse(22, 22, 20);
  ellipse(88, 22, 20);
  if (mouseIsPressed == true){
    rect(170, 50, 40, 40);
  rect(170, 90, 40, 40);
  rect(130, 90, 40, 40);
  rect(210, 90, 40, 40);
  }
  
}
