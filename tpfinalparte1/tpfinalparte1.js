// Comision 2
// Del Campo Gabriel
// 121123/3
// Catino Emanuel
// 93071/6

let imagenes=[];
let txt;
let sonidito;
let soniditoclick;
let estado=1;
let pantallasCant = 25;
let botonSiguiente=true;

function preload() {
 for (let num = 1; num < pantallasCant; num+=1) {
    imagenes[num] = loadImage("data/img" + num + ".jpg");
    txt = loadStrings("data/dialogos.txt");
    sonidito = loadSound('data/intrors.mp3');
    soniditoclick = loadSound('data/soniditoclick.mp3');
 }
}

function setup() {
  createCanvas(640,480);
  background(0);
  textSize(18);
 }

function draw() {
  fill(0);
  pantallas(estado, imagenes, txt);
  stroke(0);
  strokeWeight(1);
  boton1(botonSiguiente);              //boton de siguiente
  if(estado===1){
 
 }
  if(estado == 7){         //decision de las sillas
    botonDecision1();
    botonSiguiente=false;
 }
  if(estado == 11){         //decision de las puertas
    botonDecision2();
    botonSiguiente=false;
 }
  
  if([2, 4, 5, 6, 8, 9, 10, 12, 14, 15, 17, 18, 19, 21, 22, 23].includes(estado)) {
  botonSiguiente = true;
 }
   else if ([13, 16, 24].includes(estado)) {          //finales
   botonSiguiente = false;
   botonReinicio();
 }
}
