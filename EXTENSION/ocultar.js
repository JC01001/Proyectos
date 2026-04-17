
function toggleSidebar(forceHide = null) {
    const sidebar = document.querySelector("#secondary");
    if (sidebar) {
        if (forceHide !== null) {
            sidebar.style.display = forceHide ? "none" : "";
        } else {
            sidebar.style.display = sidebar.style.display === "none" ? "" : "none";
        }
    }
}

const observer = new MutationObserver(() => {
    const sidebar = document.querySelector("#secondary");
    if (sidebar) {
        sidebar.style.display = "none";
        observer.disconnect(); 
    }
});

observer.observe(document.body, { childList: true, subtree: true });

chrome.runtime.onMessage.addListener((mensaje) => {
    if (mensaje.orden === "cambiar") {
        toggleSidebar();
    }
});

