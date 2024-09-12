// Archivo js/confirmacion.js
function confirmarSalida(event) {
    // Verifica si el enlace clicado tiene la clase "confirmarSalida"
    if (event.target.classList.contains("confirmarSalida")) {
        // Muestra la confirmación y obtiene la respuesta del usuario
        var respuesta = confirm("Esta acción te sacará de la página. ¿Deseas continuar?");
        
        // Si el usuario hace clic en "Aceptar", redirige a la URL del enlace
        // Si hace clic en "Cancelar", previene el comportamiento predeterminado del enlace
        if (!respuesta) {
            event.preventDefault();
        }
    }
}

// Asigna la función al evento click del documento
document.addEventListener("click", confirmarSalida);

function toggleDropdown() {
    var dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
}