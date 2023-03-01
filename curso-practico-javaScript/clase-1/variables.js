let nombre = "Sara";
let apellido = "Arias";
let NombreUsuario = "@fulanito";
let edad = 19;
let correoElectronico = "la@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 500000;
let deudas = 1000;

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciones.
function nombreCompleto(name, lastName) {

    return name + " " + lastName;
    
}

nombreCompleto("Sara", "Arias");

//////////////////////////////////////////////////////////////////////////////

function saludo(name, lastName, userName) {

    const completeName = nombreCompleto(name, lastName);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + userName + ".");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Condicionales.
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedess tomar los cursos gratis");
    
}else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    
}else if (tipoDeSuscripcion == "Expert") {

    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    
}else if(tipoDeSuscripcion == "ExpertPlus"){

    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ciclos.

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
    

}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10

 while (i >= 2) {

    console.log("El valor de i es: " + i);
    i--;

    
 }



 ////////////////////////////////////////////////////////////
 //Ejercicio.

 let respuesta;

 while (respuesta != "4") {

    let pregunta = prompt("Cuanto es 2 + 2")
    respuesta = pregunta;
    
 }

 /////////////////////////////////////////////////////////////////////////////////

 //Listas.

 //Imprimir el primer objeto del array.

 function imprimirPrimerElementoArray(array) {
    console.log(array[0]);
    
 }

 imprimirPrimerElementoArray(["fresa", "mango", "banano"]);


 //Imprimir elemento array 1 por 1.

 function imprimirElementoPorElemento(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }

 }

 imprimirElementoPorElemento(["fresa", "mango", "banano"]);

 //Imprimir todos los objetos.

 let obj = {
    nombre:"Sara",
    apellido: "Arias",
    comidaFav:"Pasta"
 };

 function funcionImprimirObj(obj) {
    let array = Object.values(obj);
    for (let i = 0; i < array.length; i++) {

        console.log(array[i]);
        
    }
    
 }

 funcionImprimirObj(obj);


 ///////////////////////////////////////////////////////////////////////
function conseguirSuscripcion(suscripcion) {
    

 if (suscripcion== "Free") {
    console.log("Solo puedess tomar los cursos gratis");
    return;
    
}if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
    
}if (suscripcion == "Expert") {

    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return;
    
}if(suscripcion == "ExpertPlus"){

    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
}

console.warn("Esta suscripcion no existe");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Convirtiendolo en objeto y array.

const tipoDeSuscripciones = {
    free: "Solo puedess tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"

}

const ejemploSuscripciones = "basic";

function conseguirSuscripcion(suscripcion) {
    if (tipoDeSuscripciones[suscripcion]) {
        console.log(tipoDeSuscripciones[suscripcion]);
        return;

    }
    console.warn("Este tipo de datos no existe");
    
}


 







 





