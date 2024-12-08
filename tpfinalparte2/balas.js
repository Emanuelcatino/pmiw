class Bala {
  constructor(x, y, esEnemigo = false) {
    this.x = x;
    this.y = y;
    this.tamaño = 10;
    this.velocidad = esEnemigo ? 5 : -7;
    this.esEnemigo = esEnemigo;
  }

  actualizar() {
    this.y += this.velocidad;
  }

  mostrar() {
    fill(this.esEnemigo ? 255 : 255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.tamaño);
  }

  impacta(objetivo) {
    let d = dist(this.x, this.y, objetivo.x, objetivo.y);
    return d < this.tamaño / 2 + objetivo.tamaño / 2;
  }
}
