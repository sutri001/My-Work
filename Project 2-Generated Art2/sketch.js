var x = []
var y = []
var currentColor

function setup() {
  createCanvas(1200,705)
  background(0,90)
  currentColor = color(0,25)
  //assign the starting x and y point for each circle
  for(var i=0; i<100; i=i+1) {
    x[i] = random(0, width)
          // width/2: means it will start in the center instead of it being random 
    y[i] = random(0, height)
  stroke(0,25)
  //noStroke()
  }
}

function draw() {
  for(var i=0; i<50; i=i+1) {
    //draw circles
    ellipse(x[i],y[i],50,15)
    //move circles in random direction
    x[i] = x[i] + random(-5,5)
    y[i] = y[i] + random(-5,5)
    currentColor= color(random(0,255), random(0,255), random(0,255),45)
    fill(currentColor)
    
    if (frameCount > 1200)
    noLoop()
  }
}

function mousePressed() {
  save("randomgeneratedart")
  }

