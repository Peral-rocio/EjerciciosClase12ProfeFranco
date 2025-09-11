//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. (entiendo que debo hacer un array vacio donde luego se colocaran los nombres ingresados, mediante un for con un prompt)
// Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (esta parte se hace con condicional if y tengo que pedirle tambien que me diga que nombre )


let nombres = []


for (let i = 0; i < 5; i++) {
        let nombreingresados = prompt(`ingresa el ${i} nombre porfavor`);
        
        nombres[i] = nombreingresados
}


let nombreBuscado = prompt("¿que nombre deseas buscar?");

if (nombres.includes(nombreBuscado)) {
    alert(`El nombre ${nombreBuscado} SÍ se encuentra en esta lista`);
} else {
    alert(`El nombre ${nombreBuscado} NO se encuentra en esta lista`);
}