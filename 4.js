//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 4: Ciclo For - Array

// Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
// 1. Crear un array para almacenar las notas:
//entiendo a esto como creacion de un array para cantidad de notas ingresadas

// 2.Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
//entiendo a esto como un array donde iran efectivamente las notas*

// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
// aqui es un prompt con parseInt para que lo que suba sea numero y sea entero (se que puedo usar parseFloat, pero quiero que sean redondeadas las notas).*

// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.
//aqui entendi que mediante un for tengo que asociar (unir), la cantidad de notas ingresadas a cada estudiante.

// 5. Imprime en consola las notas ingresadas usando el array notas.
// esto lo entiendo como crear un array.length


let notascantidad = parseInt (prompt ("ingrese la cantidad de notas que desea publicar porfavor"));
let notas = [];
 
for( let i = 0; i < notascantidad; i++){
    let nota = parseInt (prompt (`ingresa la nota del estudiante ${i}`));
    notas[i] = nota;
}

for (let i = 0; i < notas.length ; i++){
   document.write(`La nota del estudiante ${i} es ${notas[i]}<br>`)
}

