// Objetos: JS es un lenguaje que está diseñado en un paradigma de objetos.

var object = {};

var miAuto = {
    marca:"Toyota",
    serie:"Corolla",
    modelo:2023,
    detalleDelAuto: function(){
        console.log("Auto: " + "marca=" + this.marca + ", modelo=" + this.modelo);
    }
}

console.log(miAuto.detalleDelAuto());

// Función constructora
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];
for(let i = 0 ; i < 3 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}

//Geovanny E. Villa Sánchez
//KikeViS