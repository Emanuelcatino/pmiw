// Del Campo Gabriel y Catino Emanuel
// Comision 2

let jugador;
let enemigo;
let balas = [];
let balasEnemigo = [];
let perdiste = false;
let victoria = false; 
let musica;
let imgfondo; 
let imgjugador; 
let imgenemigo; 
let imgintro
let imgganaste
let imgperdiste
let imgcreditos
let estado = "inicio"; 

function preload() {
  imgfondo = loadImage('data/img18.jpg'); 
  imgjugador = loadImage('data/rigby.png'); 
  imgenemigo = loadImage('data/diablo.png'); 
  imgintro = loadImage('data/intro.jpg'); 
  imgganaste = loadImage('data/ganaste.jpg'); 
  imgperdiste = loadImage('data/perdiste.jpg');     
  imgcreditos = loadImage('data/creditos.jpg'); 
  musica = loadSound("data/musica.mp3");   
}

function setup() {
  createCanvas(640, 480);
  jugador = new Jugador();                // Se crea el jugador y el enemigo
  enemigo = new Enemigo();
}

function draw() {                           // Se dibujan las distintas pantallas para los estados
  background(0);

  if (estado === "inicio") {
    mostrarPantallaInicio();
  } else if (estado === "jugando") {
    jugar();
  } else if (estado === "ganaste") {
    mostrarPantallaGanaste();
  } else if (estado === "perdiste") {
    mostrarPantallaPerdiste();
  } else if (estado === "creditos") {
    mostrarPantallaCreditos();
  }
}

function jugar() {                                   //JUEGO (pantalla de estado "jugando")
  image(imgfondo, 0, 0, width, height);

  dibujarBarraDeVida(enemigo, "Diablo", 20, true);
  dibujarBarraDeVida(jugador, "Rigby", height - 40, false);

  jugador.actualizar();
  jugador.mostrar();

  enemigo.actualizar();
  enemigo.mostrar();

  actualizarBalas();

  if (jugador.vida <= 0) estado = "perdiste";
  if (enemigo.vida <= 0) estado = "ganaste";
}

function actualizarBalas() {                           // Actualiza y dibuja las balas para el jugador y el enemigo
  for (let i = balas.length - 1; i >= 0; i--) {
    balas[i].actualizar();
    balas[i].mostrar();

    if (balas[i].impacta(enemigo)) {
      enemigo.recibirDaño(20);
      balas.splice(i, 1);
    }
  }

  for (let i = balasEnemigo.length - 1; i >= 0; i--) {
    balasEnemigo[i].actualizar();
    balasEnemigo[i].mostrar();

    if (balasEnemigo[i].impacta(jugador)) {
      jugador.recibirDaño(10);
      balasEnemigo.splice(i, 1);
    }
  }
}

function keyPressed() {              //Botones para las distintas pantallas
  if (estado === "inicio") {
    if (key === 'j') { estado = "jugando";
    musica.play();
    }
  }
    if (estado === "creditos") {
    if (key === '1') estado = "inicio"; 
  } else if (estado === "perdiste" || estado === "ganaste") {
    if (key === 'r') {
      reiniciarJuego(); 
      musica.stop();    
    }
  } else if (estado === "jugando" && keyCode === 32) {
    balas.push(new Bala(jugador.x, jugador.y)); // disparar balas con el espacio
  }
}

function mousePressed(){             //Boton para ir a creditos 
  if(mouseX>10 && mouseX<10+100 && mouseY>10 && mouseY<10+30 && mouseIsPressed===true){
    estado = "creditos"  
  }
}

function reiniciarJuego() {         // reiniciar las clases del juego
  jugador = new Jugador();
  enemigo = new Enemigo();
  balas = [];
  balasEnemigo = [];
  estado = "inicio";
}
