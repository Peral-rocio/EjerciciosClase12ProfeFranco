//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 8: Rojo y Verde

// Para este ejercicio vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único. Rojo: 505
// Verde 505
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!


 //REALIZADO JUNTO AL PROFE 
 
// Función para sumar la diagonal roja
function sumaDiagonalRoja() {
  let diagonalRoja = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    let valor = 1 + i * 11;
    diagonalRoja.push(valor);
  }
  for (let i = 0; i < diagonalRoja.length; i++) {
    contador += diagonalRoja[i];
  }
  return contador;
}

// Función para sumar la diagonal verde
function sumaDiagonalVerde() {
  let diagonalVerde = [];
  let contador = 0;
  for (let i = 0; i < 10; i++) {
    let valor = 10 + i * 9;
    diagonalVerde.push(valor);
  }
    for (let i = 0; i < diagonalVerde.length; i++) {
    contador += diagonalVerde[i];
  }
  return contador;
}

console.log("Rojo:", sumaDiagonalRoja()); // 505
console.log("Verde:", sumaDiagonalVerde()); // 505