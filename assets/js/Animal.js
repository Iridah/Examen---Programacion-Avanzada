class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this.nombre = nombre;
      this.edad = edad;
      this.img = img;
      this.comentarios = comentarios;
      this.sonido = sonido;
    }
  
    get Nombre() {
      return this.nombre;
    }
  
    get Edad() {
      return this.edad;
    }
  
    get Img() {
      return this.img;
    }
  
    set Comentarios(newComentarios) {
      this.comentarios = newComentarios;
    }
  
    get Sonido() {
      return this.sonido;
    }
  }
  
  class Leon extends Animal {
    Rugir() {
      return this.sonido;
    }
  }
  
  class Lobo extends Animal {
    Aullar() {
      return this.sonido;
    }
  }
  
  class Oso extends Animal {
    Gruñir() {
      return this.sonido;
    }
  }
  
  class Serpiente extends Animal {
    Sisear() {
      return this.sonido;
    }
  }
  
  class Aguila extends Animal {
    Chillar() {
      return this.sonido;
    }
  }
  
  export { Animal, Leon, Lobo, Oso, Serpiente, Aguila };
  