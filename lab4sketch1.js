function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myTriangle(20, 50, 100, 200, 300, 100);
  myEllipse(30, 40, 100, 200);
  mySquare(100, 200, 50)
}
function myTriangle(x1, y1, x2, y2, x3, y3){
  triangle(x1, y1, x2, y2, x3, y3);
}
function myEllipse(x, y, ellipseWidth, ellipseHeight){
  ellipse(x, y, ellipseWidth, ellipseHeight);
}
function mySquare(x, y, squareSize){
  square(x, y, squareSize);
  
  
}
