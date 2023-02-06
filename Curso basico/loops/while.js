// for - recorre un bloque de código varias veces
// for/in - recorre las propiedades de un objeto
// for/of - recorre los valores de un objeto iterable
// while - recorre un bloque de código mientras se cumple una condición específica
// do/while - también recorre un bloque de código mientras se cumple una condición específica

var estudiantes  = ["Kike", "Laura", "Villa", "Romero"];

function saludarEstudiantes(estudiante){
    console.log("Hola, " + estudiante);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//Geovanny E. Villa Sánchez
//KikeViS