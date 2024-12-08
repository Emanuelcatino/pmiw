function boton1(botonSiguiente) {
  if (botonSiguiente) {
    fill(160, 16, 240);
    rect(520, 430, 100, 30);
    fill(255, 255, 255);
    text('Siguiente', 532, 450);
  }
}

function botonDecision1(){
  fill(255);
  rect(100,400,150,30);
  rect(416,400,110,30);
  fill(0);
  text('Ordenar las sillas',106,420);
  text('Distraerse',430,420);
  if(mouseX>100 && mouseX<100+150 && mouseY>400 && mouseY<400+30 && mouseIsPressed===true){
    estado=estado+1
    soniditoclick.play();
  }
  if(mouseX>416 && mouseX<416+110 && mouseY>400 && mouseY<400+30 && mouseIsPressed===true){
    estado=estado+10
    soniditoclick.play();    
  }
 }

function botonDecision2(){
  fill(255);
  rect(70,400,70,30);
  rect(416,400,150,30);
  fill(0);
  text('Nada', 85,420);
  text('Forzar la entrada',423,420);
  if(mouseX>70 && mouseX<70+70 && mouseY>400 && mouseY<400+30 && mouseIsPressed===true){
    estado=estado+1  
     soniditoclick.play();   
 }
  if(mouseX>416 && mouseX<416+150 && mouseY>400 && mouseY<400+30 && mouseIsPressed===true){
    estado=estado+3
    soniditoclick.play();    
  }
}

function botonReinicio(){
  fill(0,0,0);
  rect(10,15,150,30);
  fill(255,255,255);
  text('Volver a Jugar',27,35);
  if(mouseX>10 && mouseX<10+150 && mouseY>15 && mouseY<15+30 && mouseIsPressed === true){
    estado=1;
    sonidito.play();    
    botonSiguiente=true;  
  }
}

function mousePressed(){
  if(mouseX>520 && mouseX<520+100 && mouseY>430 && mouseY<430+30 && botonSiguiente===true){ 
    estado++;
  }
}
