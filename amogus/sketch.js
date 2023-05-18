let xtxt=20;
let obraz;
let zwiekszanie = 100;
let allah = 0
function setup() {
  createCanvas(400, 400);
  obraz = loadImage("free.png");
}

function draw() {
  if (zwiekszanie<100){
    allah = 1
  }
  else if(zwiekszanie>200){
    allah = 0
  }
    if (allah==1){
    zwiekszanie++
  }
  else{
    zwiekszanie--
  }
  
  //tlo
  background("black");
  fill("white")
  //imposter
circle(200,200,250);
  fill("red");
  ellipse(200,200,75,100);
  ellipse(175,250,25,50);
    ellipse(225,250,25,50);
    ellipse(200,200,75,100);
  //oko
  fill("lightblue");
  ellipse(200,190,75,35);
  //napis
      fill("white");
  textAlign(CENTER,CENTER)
  textStyle("bold")
  textSize(zwiekszanie*0.3);
  text("AMONG US",200,44);
  tekst();
  fill("white");
  //wirus pobierz
  image(obraz,0,250,zwiekszanie,100);
  if(mouseY>250 && mouseY<300 && mouseX<zwiekszanie && mouseIsPressed == true){              window.open('https://download.komputerswiat.pl/pobieranie/gry-i-rozrywka/gry-strategiczne/among-us');
  }
  textAlign(LEFT,LEFT);
    //pegi
  fill("green")
  rect(350,0,50,50)
  fill("white")
  //reklama zniżki
  textSize(30);
  text("+7",355,30,120)
  fill("red");
  rotate(0.2);
  textSize(15)
  text("-10% Z KODEM KRL", 40,30,10);
}


function tekst(){
  xtxt=xtxt-5;
  if(xtxt< -700){
    xtxt =1000
  }
  fill("white");
  textSize(65);
    text("THERE IS ONE IMPOSTOR AMOGUS",xtxt,370);
}