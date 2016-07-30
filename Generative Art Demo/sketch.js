var x
var y
var d
var colors=["#000", "#ccc", "#0AF","#FFF"]

function setup() {
  createCanvas(1000,600)
  noStroke()
  
  for(var i=0; i<30000; i=i+1) {
    
  //set our variables to new values
  x= random(0,width)
  y= random(0,height)
  d= random(10,30)
  //pick a random color from our array
  var currentColor= random(colors)
  //use our new color for our paint drip fill
  fill(currentColor)
  //draw our paint drip circle
  ellipse(x,y,d,d)
  }
  
}
function mousePressed() {
 save("generatedartdemo")
}