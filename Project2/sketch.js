var x = 0
var currentColor
var r = 9

function setup() {
  
  createCanvas(600,600)
  background(0)
  currentColor = color (255)
  noStroke()
}

function draw() {
  // the x coordinate of our shape
  //make the radius of our rotation be 200
  //centers our rotation on the middle of our x axis
  var circleX = sin(x) * r + width/2
  currentColor= color(random(0,255), random(0,255), random(0,255),75)
 
  // the y coordinate of our shape
  //make the radius of our rotation be 200
  //centers our rotation on the middle of our x axis
  var circleY = cos(x) * r + width/2
  currentColor= color(random(0,255), random(0,255), random(0,255),75)
  
  ellipse(circleX,circleY,10,10)
  fill(currentColor)
  x = x + .05
  r = r + .10
  
  if (frameCount > 3750)
    noLoop()
}


