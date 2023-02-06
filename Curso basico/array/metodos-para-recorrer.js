// Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter:
// El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados,
// no verificará los valores restantes en la colección de matriz.
// El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección
// y devolverá los valores coincidentes en una matriz.

// Metodos de recorridos de Arrys
var articulos = [
    {nombre:"Bici1", costo: 1000},
    {nombre:"Bici2", costo: 2000},
    {nombre:"Bici3", costo: 3000},
    {nombre:"Bici3", costo: 3000},
    {nombre:"Bici4", costo: 4000},
    {nombre:"Bici5", costo: 5000},
];

// filtra para mostrar solo los que son iguales o menores a 2000
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 2000;
});
console.log(articulosFiltrados);

// muestra solo el nombre de los articulos
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulo);

// Busca el articulo en el array (nuestra el primero que encuentre)
// find() : Devuelve el primer elemento del array que cumpla con la condición dada
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici3";
});
console.log(encuentraArticulo);

// Busca el articulo en el array (muestra todos)
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
var encuentraArticulo = articulos.filter(function(articulo){
    return articulo.nombre === "Bici3";
});
console.log(encuentraArticulo);


// filtra por nombre usando el mismo array
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Regresa si la condicion es verdadera o false en el array
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});
console.log(articulosBaratos);

//Geovanny E. Villa Sánchez
//KikeViS