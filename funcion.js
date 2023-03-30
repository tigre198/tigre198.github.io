
// function mostrar() {
//     document.getElementById(boton).
// }

let hidTelboton = document.getElementById("hidTelboton");
let ocultarInfo = document.getElementById ("ocultarInfo");

hidTelboton.addEventListener("click", toggleText);

function toggleText (){
    ocultarInfo.classList.toggle("mostrar");

    if(ocultarInfo.classList.contains("mostrar")){
        hidTelboton.innerHTML="Ocultar";
    }
    else {
        hidTelboton.innerHTML= "Ver";
    }
}


let hidCorreoboton = document.getElementById("hidCorreoboton");
let ocultarCorreo = document.getElementById ("ocultarCorreo");

hidCorreoboton.addEventListener("click", toggleCorreo);

function toggleCorreo (){
    ocultarCorreo.classList.toggle("mostrar");

    if(ocultarCorreo.classList.contains("mostrar")){
        hidCorreoboton.innerHTML="Ocultar";
    }
    else {
        hidCorreoboton.innerHTML= "Ver";
    }
}



