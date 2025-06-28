
document.getElementById("btnEnviar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita el envío por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
    } else {
        alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
        
    }
});

