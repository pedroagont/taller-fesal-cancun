console.log('Hola desde ejercicio! 👋💻');

// EJERCICIO:
// Escribir un programa que pida nuestro nombre y lo imprima en el DOM como un título (HTML)

// 1. Solicitar con un INPUT el nombre del usuario y almacenarlo en una variable
var nombreUsuario = prompt('Escribe tu nombre');

// 2. Identificar desde JS el elemento del HTML que vamos a modificar
var titulo = document.querySelector('.titulo');

// 3. Colocar en el elemento del HTML el nombre del usuario proveniente del input
titulo.innerHTML = 'Hola, soy ' + nombreUsuario + ' 👋👨🏻‍🏫';

// YEIIIIIII!!! FELICIDADES, LO LOGRAMOS!!! 🥳
// MÁS INFO SOBRE JS https://www.w3schools.com/js/
