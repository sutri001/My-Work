var img
var img1
var img2

function preload() {
  img=loadImage("assets/watercolor.png")
  img1=loadImage("assets/bluewatercolor.jpg")
  img2=loadImage("assets/background.jpg")
}

function setup() {
   createCanvas(500,500)
   noCursor()
}

function draw() {
  background(255,4)
}

function mousePressed() {
  image(img, mouseX, mouseY, 100, 115)
}

function mouseMoved() {
  image(img, mouseX, mouseY, 100, 115)
}

function mouseReleased() {
  image(img1, mouseX, mouseY, 50, 50)
}
function mouseDragged() {
  image(img1, pmouseX, pmouseY, mouseX, mouseY)
}

function mouseWheel() {
  image(img2,0,0,width,height)
}
