var MiNombre = "Geovanny"; //Global

function miNombre(){
    var MiApellido = "Villa"; //Local
    console.log(MiNombre + " " + MiApellido);
}

miNombre();
console.log(MiApellido); //Local not defined