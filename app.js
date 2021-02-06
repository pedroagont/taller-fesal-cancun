console.log('Hola Mundo desde app.js! 👋🤖');

// VARIABLES
// Para declarar variables usamos la palabra reservada var y seguido del nombre de la variable
var numero;

// Asignar valor a una variable
numero = 100;

// Declarar y asignar
var nombre = 'Pedro';
var usuario = '@pedroagont';
var telefono = 9988458554;
var animalFavorito = '🦆';


// TIPOS DE DATOS
// Números
var numX = 365;
var numY = 3.1416;

// Strings/cadenas de carácteres
var nombreAlumno = 'Ricardo';
var presentacion = 'Hola, mi nombre es Pedro y soy feliz';
var simbolos = 'Saludo$$$!';

// Boolean true/false
var esMayorDeEdad = true;
var tieneCovid = false;
var isAlive = true;

// Arreglos / arrays / listas
// Se declara entre corchetes []
var alumnos = ['Andrea Castejón', 'Ale Ortega', 'Dara Herrera', 'Fabio Herrera', 'Ingrid Gama'];
var telefonos = [9988458554, 99881673546, 5553123121];
var arrayMixto = ['Pedro', 27, 'Hombre', 'Cancún', true];

console.log(alumnos);

// Para acceder a elementos del arreglo, hacemos uso de corchetes y la posición del elemento deseado
console.log(alumnos[0]);
console.log(alumnos[3]);

//Para conocer el tamaño/largo del arreglo usamos la propiedad length
console.log(alumnos.length);

// Objeto (diccionarios en python)
// Se declara entre llaves {}
var objetoLiteral = { propiedad: 'valor' };
var persona = {
  nombre: 'Pedro González',
  genero: 'Hombre',
  edad: 27,
  ciudad: 'Cancún',
  isAlive: true,
  musica: ['Doc Severinsen', 'Stanley Turrentine'],
  mascota: {
    nickname: 'Snacky',
    raza: 'Salchica'
  }
}

console.log(persona);

// Para acceder a alguna propiedad del objeto, simplemente la llamamos separada con un punto del objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.musica);
console.log(persona.mascota);


// INPUTS
var colorFavorito = prompt('Escribe cuál es tu color favorito');
console.log(colorFavorito);

// OUTPUTS
console.log('Esto es un output por si no sabías!');
alert('Tu color favorito es ' + colorFavorito);

// DOM + JS
// Es la forma en la que interactuamos/construimos el HTML desde el JS
var autor = document.querySelector('.autor');
console.log(autor);

autor.innerHTML = 'Pedro A. González 🚀';
