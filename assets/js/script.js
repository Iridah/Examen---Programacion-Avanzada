/*declaracion de variables*programada*/
const boton = document.getElementById('btnRegistrar').addEventListener("click", getResultado)

/*funcion validacion*reciclada*/
//*puedo eliminar el form y enlazarlo con el addevent?*//
let form = document.getElementById("form");
form.addEventListener( "btnRegistrar", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textNombre = document.querySelector(".textNombre").value;
    let textAsunt = document.querySelector(".textAnimal").value;
    let textAnimal = document.querySelector(".textEdad").value; 
    let textMensaje = document.querySelector(".textMsg").value;
    let resultado = validar(textNombre,textAnimal, textEdad, textMsg);

    if (resultado == true){
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAnimal").innerHTML = "";
    document.querySelector(".errorEdad").innerHTML = "";
    document.querySelector(".errorMsg").innerHTML = "";
};

function exito() {
    //document.querySelector(".resultado").innerHTML = "Formulario validado, nos contactaremos a la brevedad";   
    setTimeout (() => {
        alert("La informacion ha sido guardada, desplegando...");
    }, 100);
};

function validar(nombre,animal, edad, msg) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z0-9 ]/i;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido, por favor.";
        pasamosLaValidacion = false;
    };
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
/*funcion traer*integrada al verificador*/
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
        /*const limiter = data.slice(0,20);*no creo que sea necesario*/
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