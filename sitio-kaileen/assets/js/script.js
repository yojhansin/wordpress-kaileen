document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        // Quitar active de todos los botones
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));

        // Activar este
        btn.classList.add("active");

        // Ocultar todos los paneles
        document.querySelectorAll(".cat-panel").forEach(panel => panel.classList.remove("active"));

        // Mostrar panel correspondiente
        const contenido = document.querySelector(btn.dataset.target);
        contenido.classList.add("active");
    });
});
