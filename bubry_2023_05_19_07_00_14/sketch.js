function setup() {
  createCanvas(400, 400);  
  background(52,168,83);
  fill(0,0,0);
  ellipse(200,200,100,30);
  ellipse(70,119,100,30);
  ellipse(300,60,100,30);
  ellipse(297,350,100,30);
  kretik(200,200)
  kretik(70,120)
  kretik(300,60)
  kretik(295,350)
  
}
function kretik(x,y) {
   //krecik
  noStroke();
  fill(125,93,43);
  ellipse(x+1,y-23,60,60);//głowa
  fill(255,237,209);
  ellipse(x+1,y-13,33,28);
  fill(0,0,0);
  circle(x+10,y-38,10,10);//oko prawe
  circle(x-10,y-38,10,10);//oko lewe
  circle(x+1,y-28,10,10);//nos
  ellipse(x+1,y-13,20,5);//usta
} 
function draw(){
  background(52,168,83);
  fill(0,0,0);
  ellipse(200,200,100,30);
  ellipse(70,119,100,30);
  ellipse(300,60,100,30);
  ellipse(297,350,100,30);
  kretik(200,200)
  kretik(70,120)
  kretik(300,60)
  kretik(295,350)
  mjolnir();
}
function mjolnir(){
  fill("grey");
  rect(mouseX-20,mouseY-20,50,20);
  fill("brown");
  rect(mouseX,mouseY,10,40)
}

