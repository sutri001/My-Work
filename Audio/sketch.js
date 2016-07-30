function setup() {
  createCanvas(800,500)
  osc = new p5.Oscillator()
  osc.setType('sine')
  osc.start()
  background(0)
}

function draw() {
  noCursor()
}

function mousePressed() {
  ellipse(mouseX, mouseY,40,40)
}

function mouseMoved() {
  line(mouseX,mouseY,5,100)
  stroke(255)
  osc.freq( mouseX, 0.30 )
}
