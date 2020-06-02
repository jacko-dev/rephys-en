function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  createEasyCam();
  size = prompt("Sphere size:")
  mass = 100;
  yVal = 0;  
  velocity = 1;
  accel = mass * 0.35; 
}
function update() {
  background(255);
  fill(255);
  stroke(0)
  sphere(size,24);
}
function draw() {
  update();
}