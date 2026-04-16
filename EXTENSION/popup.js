const usarBoton = document.getElementById("encender");

    usarBoton.addEventListener("click", function(){
        chrome.tabs.query({ active: true, currentWindow: true}, function(tabs){
            let pestana = tabs[0].id;
            chrome.tabs.sendMessage(pestana, {orden: "cambiar"})
        });
    });


