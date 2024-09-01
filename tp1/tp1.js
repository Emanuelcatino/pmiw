//Emanuel catino 
// legajo 93071/6
// yt : https://youtu.be/KESOSpHf0oI

let tamañoCuadrado = 40;
let espaciado = 5;
let invertColors = false;
let colors = false;
let img; 

function preload() {

  img = loadImage('data/F_43.png');
}

function setup() {

  createCanvas(800, 400);
}

function draw() {
  if (invertColors) {
    background(255);
    fill(0);
  } else {
    background(0);
    fill(255);
  }

  if (colors) {
    background(255);
    fill('#C1721D');
  }

  let numX = width / (tamañoCuadrado + espaciado);
  let numY = height / (tamañoCuadrado + espaciado);
  
  for (let i = 0; i <= numX; i++) {
    for (let j = 0; j <= numY; j++) {
      let x = i * (tamañoCuadrado + espaciado);
      let y = j * (tamañoCuadrado + espaciado);
      let nuevoTamanoCuadrado = calculaTamano(x, y, tamañoCuadrado);
      dibujarCirculo(x, y, nuevoTamanoCuadrado);
      image(img, 0, 0, 400, 400);
    }
  }
}

function dibujarCirculo(x, y, size) {
  ellipseMode(CORNER);
  ellipse(x, y, size, size);
}

function calculaTamano(x_, y_, tamanoCuadrado) {

  let distancia = dist(mouseX, mouseY, x_, y_);
  return map(distancia, 2, width, tamanoCuadrado, 2);
}

function keyPressed() {
  if (key == 'r' || key == 'R') {
    invertColors = !invertColors;
    fill(random(255), random(255), random(255));
  }
  if (key == 'w' || key == 'W') {
    colors = !colors;
    fill(random(255), random(255), random(255));
  }
}
