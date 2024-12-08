function mostrarPantallaInicio() {
  image(imgintro, 0, 0)
  fill(255, 204, 0);
  strokeWeight(3);
  stroke(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("Presiona la tecla J, para comenzar", width / 2, height / 2 + 170);
  fill(255, 204, 0);
  rect(10, 10, 100, 30);
  fill(255, 255, 255);
  text('Creditos', 60, 25);
}

function mostrarPantallaCreditos() {
  image(imgcreditos, 0, 0)
  fill(255, 204, 0);
  strokeWeight(3);
  stroke(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("Creadores: Del Campo Gabriel y Catino Emanuel", width / 2, height / 2 + 180); 
  text("Presiona 1, para volver al inicio", width / 2 - 130, height / 2 - 210);
}

function mostrarPantallaGanaste() {
  image(imgganaste, 0, 0)
  fill(255, 204, 0);
  strokeWeight(5);
  stroke(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Presiona la tecla R, para reiniciar", width / 2, height / 2 - 170);
}

function mostrarPantallaPerdiste() {
  image(imgperdiste, 0, 0)
  fill(255, 204, 0);
  strokeWeight(5);
  stroke(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Presiona la tecla R, para reiniciar", width / 2, height / 2 - 170);
}
