var x = []
var y = []
var circleColor = []
var colors=[]
var numberOfCirlces = 300

function setup() {
  createCanvas(1200,800)
  strokeWeight(3)
  colors = [
    color(0,0,0,40),
    color(255,255,255,40),
    color(51,153,255,40),
    color(255,200,102,40),
    color(255,255,110,40)
  ]
  //assign the starting x and y point for each circle
  for(var i=0; i<numberOfCirlces; i=i+1) {
    x[i] = random(0, width)
    y[i] = random(0, height)
    circleColor[i]= random(colors)
  }
}

function draw() {
  for(var i=0; i<numberOfCirlces; i=i+1) {
    // draw circles
    //ellipse(x[i],y[i],50,50)
    // move circles in random direction
    x[i] = x[i] + random(-5,5)
    y[i] = y[i] + random(-5,5)
    
  for(var j=0; j<numberOfCirlces; j=j+1) {
    //find distance to every other circle
    var distance = dist(x[i],y[i],x[j],y[j])
    if(distance < 70) {
      stroke(circleColor[i])
      line(x[i],y[i],x[j],y[j])
    }
    }
  }
  if (frameCount > 200) {
    noLoop()
  }
}