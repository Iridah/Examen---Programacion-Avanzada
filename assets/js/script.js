/*declaracion de variables*programada*/
const boton = document.getElementById('btnRegistrar');

/*funcion validacion*reciclada*/
boton.addEventListener( "btnRegistrar", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textAnimal = document.querySelector(".textAnimal").value;
    let textEdad = document.querySelector(".textEdad").value; 
    let textMsg = document.querySelector(".textMsg").value;
    let resultado = validar(textAnimal, textEdad, textMsg);

    if (resultado == true){
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorAnimal").innerHTML = "";
    document.querySelector(".errorEdad").innerHTML = "";
    document.querySelector(".errorMsg").innerHTML = "";
};

function exito() {  
    setTimeout (() => {
        alert("La informacion ha sido guardada, desplegando...");
    }, 100);
};

function validar(nombre,animal, edad, msg) {
    let pasamosLaValidacion = true;
    let validacionAnimal = /[a-zA-Z0-9 ]/i;
    if (validacionAnimal.test(animal) == false) {
        document.querySelector(".errorAnimal").innerHTML = "Elija uno de los animales listados, por favor.";
        pasamosLaValidacion = false;
    };
    let validacionEdad = /[a-zA-Z0-9 ]/i;
    if (validacionEdad.test(edad) == false) {
        document.querySelector(".errorEdad").innerHTML = "Ingrese la edad, por favor.";
        pasamosLaValidacion = false;
    };
    let validacionMsg = /[a-zA-Z0-9 ]/i;
    if (validacionMsg.test(msg) == false) {
        document.querySelector(".errorMsg").innerHTML = "El campo no puede quedar en blanco.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
};

/*definicion de herencias*programada*/
class Animal{
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
}

/*ingreso de variables*programada*/
const leon1 = new Leon("","","","","","")
const lobo1 = new Lobo("","","","","","")
const oso1 = new Oso("","","","","","")
const Serp1 = new Serpiente("","","","","","")
const Agui1 = new Aguila("","","","","","")

/*async y await*reciclada y modificada*/
async function getResultado (){
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const resultado = await fetch(url);
        const data = await resultado.json()
        console.log(limiter)
        limiter.forEach(value =>{ /*tengo la sensacion que necesitare el foreach, pero no el contenido de este*/
            // const myLi = document.createElement("li");
            // const mytitle = document.createElement("h1");
            // mytitle.textContent = value.title;
            // myLi.appendChild(mytitle);
            // const myBody = document.createElement('p');
            // myBody.textContent = value.body;
            // myLi.appendChild(myBody);
            // menuList.appendChild(myLi);
        });
    } catch (error) {
        console.log(error);
    };
};