let obr1
let obr2
let obr3
let obr4
let obr5
let obr6
let obr7
let obr8
let obrzk
let z0
let wykonaj
let tak = true;
let tablica = [0,0]
let pary=0;
let kartay = [0,0,0,0,0,0,0,0,0]
let lista=[]

class karta
{ 
  constructor(x,y,id,karta)
  {
    this.karta=karta;
    this.id=id;
    this.pokaz=false;
    this.x = x;
    this.y = y; 
  }
  
  cord()
  {
    if(mouseX>this.x && mouseX<this.x+150 && mouseY>this.y && mouseY<this.y+185)
    {
    return true;
    }
  }
  display()
  {
      if(!this.pokaz)
      {
        rect(this.x,this.y,150,185);
        if(mouseIsPressed && !wykonaj && this.cord() && tak && tablica[0][0] !==this.id &&                   tablica[0]     [1] !==this.id)
        {          
          zrob(this.id,this.karta); 
        }        
      }
      else
      {
        image(this.karta,this.x,this.y,150,185);
      }
    } 
}

function preload()
{
  obr1 = loadImage("ciastek.png")
  obr2 = loadImage("osiol.png")
  obr3 = loadImage("fiona.png")
  obr4 = loadImage("shrek.png")
  obr5 = loadImage("wilk.png")
  obr6 = loadImage("ksiaze.png")
  obr7 = loadImage("lord.png");
  obr8 = loadImage("drzewo.png");
  obrzk = [[obr1,2],[obr2,2],[obr3,2],[obr4,2],[obr5,2],[obr6,2],[obr7,2],[obr8,1]];
}


function setup() 
{
  createCanvas(821, 600);
  
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {
    obrzk[x][1]--;
    kartay[0]=new karta(5,5,0,obrzk[x][0]);
  }
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  { 
    obrzk[x][1]--;
    kartay[1]=new karta(170,5,1,obrzk[x][0]);
  }
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  { 
    obrzk[x][1]--; 
    kartay[2]=new karta(5,210,2,obrzk[x][0]);
  }
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--; 
    kartay[3]=new karta(170,210,3,obrzk[x][0]);
  }
  do
  {  
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--;  
    kartay[4]=new karta(335,5,4,obrzk[x][0]);
  } 
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--; 
    kartay[5]=new karta(335,210,5,obrzk[x][0]);
  }     
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--; 
    kartay[6]=new karta(5,412.5,6,obrzk[x][0]);
  }    
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {   
    obrzk[x][1]--;
    kartay[7]=new karta(170,412,7,obrzk[x][0]);
  }       
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {   
    obrzk[x][1]--; 
    kartay[8]=new karta(335,412.5,8,obrzk[x][0]);
  }     
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--;  
    kartay[9]=new karta(500,412.5,9,obrzk[x][0]);
  }    
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {    
    obrzk[x][1]--;
    kartay[10]=new karta(500,210,10,obrzk[x][0]);
  }  
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {
    obrzk[x][1]--;
    kartay[11]=new karta(500,5,11,obrzk[x][0]);
  }
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  { 
    obrzk[x][1]--;
    kartay[12]=new karta(665,5,12,obrzk[x][0]);
  } 
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {
    obrzk[x][1]--;
    kartay[13]=new karta(665,210,13,obrzk[x][0]);
  }
  do
  {
    x = floor(random(0,8));
  }
  while(obrzk[x][1] == 0)
  {
    obrzk[x][1]--;
    kartay[14]=new karta(665,412,14,obrzk[x][0]);
  }
}


function draw() 
{
  background(400)
  if(pary<8)
  {
    for(let y in kartay)
    {
      kartay[y].display()
    }
    if(mouseIsPressed)
    {
      wykonaj = true;
    }
    else
    {
      wykonaj = false;
    } 
  }  
}


function zrob(k1,k2)
{
  if(tablica[0] == 0)
  {
    tablica[0] = [k1,k2]
    kartay[k1].pokaz = true;
  }
  else if(tablica[1] == 0)
  {
    tablica[1] = [k1,k2]
    kartay[k1].pokaz = true;
  } 
  if(k2==obr8)
  {
    if(tablica[0][1] !== obr8)
    {
      kartay[tablica[0][0]].pokaz = false;
    }
    tablica[0] = [k1,k2]
    tablica[1] = [k1,k2]
    lista=[]
    for(let x in kartay)
    {
      if(kartay[x].pokaz == false)
      {
      kartay[x].pokaz = false;
      lista.push(x)
      }
    }
  }
  if(tablica[1] !== 0)
  {
  tak = false;
  setTimeout(() =>{
      
  tak = true;
  if(tablica[0][1] == obr8)
  {
    alert("Przegrałeś!")
    location.reload()
  }
  if(tablica[0][1] !== tablica[1][1])
  {
    kartay[tablica[0][0]].pokaz = false;
    kartay[tablica[1][0]].pokaz = false;
  }
  else if(tablica[0][1] !== obr8)
  {
    pary++;
  }
  if(pary==7)
    {
      alert("WYGRAŁEŚ!");
      location.reload()
    }
  tablica = [0,0]
    },800);    
  }
}