// Solicitar una contraseña hasta que la misma sea correcta.

var inputPassword = prompt("¿Contraseña?");

if (inputPassword != 'kike') {
    do {
        alert("Contraseña incorrecta, por favor volver a intentar");
        var inputPassword = prompt("¿Contraseña?");
    } while (inputPassword != '1234');

    alert("¡Te costó, pero lo lograste!");
} else {
    alert("¡Acertaste a la primera!");
}

//Geovanny E. Villa Sánchez
//KikeViS