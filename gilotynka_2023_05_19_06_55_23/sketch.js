//                     !  Przeczytać przed uruchomieniem  !


//Jak grać?

//Klikaj litery na klawiaturze aby wpisywać hasło 🤠
//========================================

// Gra o Nazwie Save the WNW(czyt.dablju en dablju) 

//========================================

// Credits:
// Main developer: Jakub "Apostoł Pański 🙏"Karolowsky

// Audio, script and big essa: Aleksy "Dr. Sztangen 🏋" Goodman

// Helper👷(pomoc przy audio, lekkie wsparcie przy kodzie) : Kubuś "kiszony🥒" Mikocky

//========================================

// Fabuła gry
//Musisz uratować WnW przed wscielklymi "mudzinami"
//które chcą ściąć mu głowę gilotyna ponieważ
// wgral im oprogramowanie które zaktualizowało system
// na Windows 11 I pobrało Microsoft Edge

//========================================

//    ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
//Wszystkie postacie są kreacją fikcyjna, wszelkie nawiązania są przypadkowe I nie mają związku ze światem rzeczywistym. 😎

//========================================
let zycia = 10;
let graj=0;
let zgadnietelitery = 0;
let x = 100;
let dopieroklik = 0;
let maxx = 100;
let glowa = 200;
let smierc =100;
let button
let poz2= 300;
let obraz, wsciekleptaki;
// SZPAKU 
// let szpak;
let litery = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","ą","x","y","z"];
let zgadniete = [];
let slowa = ["hubert","dracha","gegra","glanc","silownia","bober","mikrus","kwasy","dzida"];
function setup() {
    createCanvas(400, 400);
    slowo = slowa[round(random(slowa.length-1))];
    obraz = loadImage("bie.png")
    soundFormats('mp3', 'ogg');
    wciekleptaki = loadSound('wscieklyptak.mp3');
    button = createButton('ZAGRAJ PONOWNIE');
    button.size(85);
    button.hide()
    button.position(155, 360);
    button.mousePressed(again);
    smutek = loadSound('smutek.mp3');
  //SZPAKU
  // szpak = loadSound('szpak.mp3');
}
function again(){
  zycia = 10;
  x = 100;
  dopieroklik = 0;
  maxx = 100
  glowa = 200;
  smierc =100;
  poz2= 300;
  zgadnietelitery = 0;
  slowo = slowa[round(random(slowa.length-1))];
  button.hide();
  zgadniete.length = 0;
  zgadniete = [];
  wciekleptaki.stop();
  smutek.stop();
  graj=0;
  //SZPAKU
  // szpak.stop();
  // szpak.play();
}
function rysuj_haslo(){
  //KJ
  rysujj = '';
  for(let i of slowo){
    literaze = '_';
    for(let xdd of zgadniete){
      if(xdd == i){
        literaze = xdd;
      }
    }
    rysujj = rysujj + literaze  + " ";
    textSize(35);
    textAlign(CENTER, BASELINE);
  }
  //KJ
  text(rysujj,200,poz2);
  
}

function zgadywanie(){
  for(let lod of litery){
    if(keyIsPressed && key == lod){
        juzjest = 0;
        for(let lod2 of zgadniete){
          if(lod == lod2){
            juzjest = 1;
          }
        }
        if(juzjest == 0){
          zgadniete.push(lod);
          for(let x2 of slowo){
            if(x2 == lod){
              zgadnietelitery++;
            }
          }
        }
      }
    
    
    if(keyIsPressed && dopieroklik == 1 && key == lod){
      dopieroklik = 0;
      superer = 0;
      for(let lod2 of slowo){
        if(lod == lod2){
          superer = 1;
        }
      }
      if(superer == 0){
        zycia--;
      }
    }else if(!keyIsPressed){
      dopieroklik = 1;
    }
  }
}

//STREFA WIZUALNA

function draw() {
  x++;
    if(x>maxx){
      x=maxx;
      
    }
  zgadywanie();
    //AD
background (220);
  // text(slowo,200,85);
  noStroke()
  fill("rgb(119,31,31)");
  rect(195,130,10,x-100)
  fill("silver")
rect(175,x,51,41)
  fill("brown");
rect(175,220,50,30)
rect(175,190,50,15)
rect(175,205,15,15)
rect(210,205,15,15)
rect(175,250,10,10)
rect(215,250,10,10)
  rect(175,130,10,60)
    rect(215,130,10,60)
  rect(175,120,50,10)
  if(glowa>280){
    poz2 = glowa+20;
    fill("red");
    stroke(BOLD);
    textSize(18);
    text("WNW ÓMARŁ 😭😭😭😭",200,85);
    button.show()
    if(graj==0){
    smutek.play();
      graj=1;
    }
  }
  if(zgadnietelitery == slowo.length){
    fill("green");
    stroke(BOLD);
    textSize(17);
    text("OCALIŁEŚ WNW😃😃😃😃😃",200,85);
    button.show();
    if(graj==0){
    wciekleptaki.play();
      graj=1;
    }
  }
  fill("brown");
  image(obraz,185,glowa,30,30);
  textSize(70);
  rysuj_haslo();
  text(zgadniete,200,50);
if(zycia==10){
  maxx = 100
    //AD
}
if(zycia==9){
  maxx=105
}
  if(zycia==8){
  maxx=110
}
    if(zycia==7){
  maxx=115
}
    if(zycia==6){
  maxx=120
}
    if(zycia==5){
  maxx=125
}
    if(zycia==4){
  maxx=135
}
    if(zycia==3){
  maxx=145
}
    if(zycia==2){
  maxx=155
}
    if(zycia==1){
  maxx=165
}
    if(zycia==0){
  maxx=maxx+2
  maxx=180;
      
}
if(maxx==180){
  if(x==maxx){
    glowa = glowa+3
  }
  //AD
      if(glowa>450){
        glowa = 450
      }
}
}
//Aleksy Dobrodziej
//Jakubowski Karol
//"Kuba Mikodsky"
