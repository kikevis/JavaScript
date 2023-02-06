// Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

var frutas = ["Manzana", "Platano", "Cereza", "Fresa", "Mango"];
console.log(frutas);

// agregar un elemento en al array al comienzo
var masfrutas = frutas.push("Uvas");
console.log(masfrutas);

// Elimina el ultimo array
var ultimo = frutas.pop("Uvas");
console.log(frutas);

// Agregar un elemento en el array al principio
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);

// borrar fruta en que este al principio
var borrarfruta = frutas.shift("Uvas");
console.log(frutas)

// Mirar la posicion donde esta el elemento quie estoy buscando
var posicion = frutas.indexOf("Cereza");
console.log(posicion);

//Geovanny E. Villa Sánchez
//KikeViS