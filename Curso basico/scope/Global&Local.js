// El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras,
// determina que valor tendrá la variable dependiendo dónde se encuentre.
// Scope Global : todo el mundo.
// Scope Local : Las Vegas, y lo que pasa en las vegas, se queda en Las Vegas.

var MiNombre = "Geovanny"; //Global

function miNombre(){
    var MiApellido = "Villa"; //Local
    console.log(MiNombre + " " + MiApellido);
}

miNombre();
console.log(MiApellido); //Local not defined

//Geovanny E. Villa Sánchez
//KikeViS