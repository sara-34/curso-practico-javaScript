//Sirve para llamar etiquetas
const h1 = document.querySelector("h1")
const p = document.querySelector("p")
//Lamamos clase de la siquiente manera.
const  parrafo= document.getElementsByClassName("parrafo")
//llamamos id de la siguiente manera.
const pid = document.getElementById("pid")
//Si queremos seleccionar un input.
const input = document.querySelector("input")
//Para averiguar varios cambios dentro del console.log utilizamos {}
console.log({
    h1,
    p,
    parrafo,
    input,
    pid,

});
console.log(input.value);
//Todo esto funciona solo si lo miramos en la consola del navegador en node.js no funciona.

h1.innerHTML = "Hola mundo <br> feo";
h1.innerText = "hola mundo";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");
// classlist.add sirve para añadir clases a nuestro html directamente
h1.classList.add("rojo") 
//classlist.remode sirve para remover clases directamente del html.
h1.classList.remove("morado")

//Nos devuelve true o false.
h1.classList.contains("morado")


//Modificar nuestro value de input.

input.value = "10101"

//Cambio de elemento desde 0.


const img = document.createElement("img");
img.setAttribute("src","https://images.pexels.com/photos/15093101/pexels-photo-15093101.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load")
console.log(img);

//Con esto agregamos en alguna clase nuestro elemento para que se vea en la pgina principal de html.

pid.appendChild(img);

//Eliminar.





 


