class Mancha {
    constructor(grandes, finas, grises) {
      this.grandes = grandes;
      this.finas = finas;
      this.grises = grises;
    }
  
    dibujar() {
      let cualgrandes = int(random(this.grandes.length));
      let cualfinas = int(random(this.finas.length));
      let cualgrises = int(random(this.grises.length));
  
      // Si mouseX > 334 = manchas grandes negras. 
      if (mouseX > 334) {
        tint(22,11,5);
        image(this.grandes[cualgrandes], random(0, 550), random(0, windowHeight), 300, 300);
      }
      // < 167 = manchas finas negras.
      else if (mouseX < 167) {
        tint(22,11,5);
        image(this.finas[cualfinas], random(0, 550), random(0, windowHeight), 300, 300);
      }
      // e/ 167 y 334 = manchas grises.
      else {
        tint(0,0,0);
        image(this.grises[cualgrises], random(0, 550), random(0, windowHeight), 300, 300);
      }
    }
  }