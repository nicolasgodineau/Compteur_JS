console.log("coucou");

let nombre = 0;

function nombreAvecZero(n) {
    return n.toString().padStart(2, "0");
}

function conter() {
    nombre++;
    // ajout du 0 dans les dixaines
    avecZero = nombreAvecZero(nombre);
    if (nombre == 20) {
        nombre = 0;
    }
    affichage = document.querySelector("#nombre");
    affichage.innerHTML = avecZero;
}

setInterval(conter, 1000);
