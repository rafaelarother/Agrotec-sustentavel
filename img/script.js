// Mostrar/ocultar informações extras
const toggleButton = document.getElementById("toggle-info");
const extraInfo = document.getElementById("extra-info");

toggleButton.addEventListener("click", () => {
    extraInfo.classList.toggle("hidden");
    toggleButton.textContent = extraInfo.classList.contains("hidden") ? "Saiba Mais" : "Menos Informações";
});

// Galeria interativa: clique para ampliar
const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        if(img.style.transform === "scale(1.5)") {
            img.style.transform = "scale(1)";
        } else {
            img.style.transform = "scale(1.5)";
        }
    });
});
