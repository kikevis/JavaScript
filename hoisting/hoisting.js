// Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del
// scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

console.log(nombre) // undefined
var nombre = "Andres"

// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"

console.log( saludar() )

function saludar() {
    return "Hola"
}

// Hoisting: Declara la función antes de ser invocada
function saludar() {
    return "Hola"
}

console.log( saludar() ) // "Hola"