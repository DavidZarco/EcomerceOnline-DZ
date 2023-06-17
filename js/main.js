// Local Storage
// Creando un Local Storage
localStorage.setItem("nombre", "Jose");
localStorage.setItem("nombre2", "Pepe");
localStorage.setItem("nombre", "Raul");
localStorage.setItem("nombre", "Ana");
localStorage.setItem("edad", 30);

//recuperando local storage
let nombre = localStorage.getItem("nombre");
console.log("Este es su nombre : " + nombre);
console.log("Este es su nombre : " + localStorage.getItem("nombre2"));
