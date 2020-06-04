function setup() {
  var canvas = createCanvas(1000,1000,WEBGL);
  canvas.parent('sketch-holder');
  background(0);
  x=0
  yes=0;
  ytotal=0;
  yeh=0;
  force=0;
  gravitydivide=9.81;
  y=0;
}
function draw(){
  background(255);
  y++;
  stroke(0)
  strokeWeight(4)
  yeh-=0.000299
  yes-=0.000195;
  force-=0.0145;
  gravitydivide-=0.3004614;
  gravity=9.81/gravitydivide
  ytotal=y * (gravity/0.2665)
  translate(0,ytotal);
  rotateY(yeh*0.2);
  rotateX(force*0.2);
  rotateZ(0.2*yeh+force);
  box(100);
}
