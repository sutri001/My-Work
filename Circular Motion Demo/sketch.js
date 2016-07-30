var x = 0

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(255)
  // the x coordinate of our shape
  //make the radius of our rotation be 200
  //centers our rotation on the middle of our x axis
  var circleX = sin(x) * 200 + width/2
 
  
   // the y coordinate of our shape
  //make the radius of our rotation be 200
  //centers our rotation on the middle of our x axis
  var circleY = cos(x) * 200 + width/2

  
  ellipse(circleX,circleY,20,20)
  x = x + .05
}