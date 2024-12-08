class Jugador {
  constructor() {
    this.x = width / 2;
    this.y = height - 80;
    this.tamaño = 60;
    this.velocidad = 5;
    this.vida = 100; 
  }

  actualizar() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }

    this.x = constrain(this.x, this.tamaño / 2, width - this.tamaño / 2);
  }

  mostrar() {
    image(imgjugador, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
  }

  recibirDaño(cantidad) {
    this.vida -= cantidad;
    if (this.vida <= 0) {
      perdiste = true;
    }
  }
}
