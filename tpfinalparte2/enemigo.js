class Enemigo {
  constructor() {
    this.x = width / 2;
    this.y = height / 6;
    this.tamaño = 60;
    this.velocidad = 3;
    this.vida = 100;
    this.direccion = 1;
    this.intervaloDisparo = 60; 
    this.temporizadorDisparo = 0;
  }

  actualizar() {
    this.x += this.velocidad * this.direccion;
    if (this.x > width - this.tamaño / 2 || this.x < this.tamaño / 2) {
      this.direccion *= -1;
    }

    this.temporizadorDisparo++;
    if (this.temporizadorDisparo >= this.intervaloDisparo) {
      this.disparar();
      this.temporizadorDisparo = 0;
    }
  }

  mostrar() {
    image(imgenemigo, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
  }

  impacta(jugador) {
    let d = dist(this.x, this.y, jugador.x, jugador.y);
    return d < this.tamaño / 2 + jugador.tamaño / 2;
  }

  recibirDaño(cantidad) {
    this.vida -= cantidad;
    if (this.vida <= 0) {
      this.morir();
    }
  }

  morir() {
    this.vida = 0; 
  }

  disparar() {
    balasEnemigo.push(new Bala(this.x, this.y + this.tamaño / 2, true));
  }
}
