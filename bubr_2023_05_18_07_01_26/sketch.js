let speed;
let bubr;
let patyki;
let points = 0;
let nowazmienna = [];



class belki{
  constructor(x,y){
  this.x = x
  this.y = y
  }
  display(){
    fill("#654321")
    rect(this.x,this.y,60,20)
    this.move() 
  }
  move(){
    this.x=this.x-2
    if(this.x<-450){
      this.x = width+50
    }
     if(dist(this.x,this.y,bober.x,bober.y)<50){
        this.x = width+50
       this.y = random(0,350);
       points++
    }
  }
}

class bobr{
constructor(x,y){
  this.x=50
  this.y=100
}
  move(){
  if(mouseIsPressed==true && this.y>-25){
     speed= -5;
  }
  else if(this.y>300){
      this.y=300
  }
  else{
      speed = 7;
  }
  this.y = this.y+speed
  }
  display(){
  image(bubr,this.x,this.y,50,50);
  }
}

function setup(){
  createCanvas(400, 400);
  bubr =  loadImage("bubr.png")
  patyki = new belki(width+50,random(0,400))
  bober = new bobr()
  for(x=0;x<15;x++){
   nowazmienna.push(new belki(x*50 +width+50,random(0,300)))
  }

}

function draw() {
  background("lightblue");
  fill("green")
  rect(-1,350,500,500)
    for(x=0;x<nowazmienna.length;x++){
      nowazmienna[x].display()
    }
  bober.display()
  bober.move()
  textSize(15)
    text("punkty: "+points,300,15)
}
