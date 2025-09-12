//const prompt = require("prompt-sync")({ sigint: true });


//Ejercicio 6: Iguales a 10 pero menores de 1000
// //Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
]

suma = 0

for (let i = 0; i < matriz.length; i++) {             //esto es cantidad de filas
    for (let j = 0; j < matriz[i].length; j++) {   //esto es cantidad de columnas
        let valor = matriz[i][j];                    //aca me accede a cada valor que hay en i y en j 

        if (valor >= 10 && valor < 1000) {      //con esta condicional puedo saber si cumple con el requisito 10-1000
            suma += valor;                         // aca guardo en la variable suma que era o, el valor y lo sumo
        }
    }
}

alert(`La suma de los valores entre 10 y 1000 son ${suma}`)