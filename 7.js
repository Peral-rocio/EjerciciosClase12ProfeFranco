//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 (esto entiendo que debe tener 5 filas, 5 columnas)
// llena de puros números enteros y positivos. 
// Luego, escribe un algoritmo para sumar todos los números en la matriz.

let matriz5x5 = [
    [ 1, 2, 3, 4, 5],
    [ 6, 7, 8, 9, 10] ,
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
]

let suma = 0

for( let i = 0 ; i < matriz5x5.length ; i++){
    for ( let j = 0; j < matriz5x5[i].length; j++){
     let valor = matriz5x5[i][j];
      suma += valor
    }
}

  
 alert(` La suma final de tu matriz es ${suma}`)

 //El resultado debe dar 325.