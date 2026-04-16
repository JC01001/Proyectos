let verificar = setInterval(function() { //esto es para que cheque cada tanto si esta lo que estamos buscando (id)
    


const distraccion = document.querySelector("#secondary") // esta madre la saque viendo el html es el ID de la parte que quiero quitar


if (distraccion) {
    distraccion.style.display = "none"; 
    clearInterval(verificar) // se detiene si lo ecuentra

}

}, 500); // tiempo en ms

chrome.runtime.onMessage.addListener(function(mensaje, sender, senResponse){

    if (mensaje.orden === "cambiar") {
        const distraccion = document.querySelector("#secondary");

        if (distraccion) {
            if (distraccion.style.display === "none") {
                distraccion.style.display = "";
            }else {
                distraccion.style.display = "none";
            }
        }
    }
});

