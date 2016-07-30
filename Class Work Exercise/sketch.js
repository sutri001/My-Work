var colors=["red","blue"]
var number = 1

function setup() {
  createCanvas(600,200)
  frameRate(1)
 
}

function draw() {
   background(random(colors))
  
  for(var i=10; i<310; i=i+30){
    ellipse(i,20,25,25)
  }
}

function mouseClicked() {
  console.log('mouseClick = ' + number)
  number ++;
}
