// Validación del formulario con jQuery
$("#btnEnviar").click(function (e) {
    e.preventDefault();

    const nombre = $("#nombre").val().trim();
    const correo = $("#correo").val().trim();
    const mensaje = $("#mensaje").val().trim();

    if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos antes de enviar.");
    } else {
        alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
        $("#nombre").val("");
        $("#correo").val("");
        $("#mensaje").val("");
    }
});

// Preguntas dinámicas para el test de seguridad (con JavaScript puro)
const preguntas = [
    {
        pregunta: "¿Qué debes hacer si recibes un correo sospechoso?",
        opciones: [
            "Abrir el enlace para ver de qué se trata.",
            "Ignorarlo y borrarlo sin abrirlo.",
            "Reenviarlo a todos tus contactos."
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es una buena práctica de contraseña?",
        opciones: [
            "Usar la misma contraseña en todos los sitios.",
            "Usar '123456' para que sea fácil de recordar.",
            "Usar contraseñas únicas y complejas."
        ],
        correcta: 2
    },
    {
        pregunta: "¿Qué es la verificación en dos pasos?",
        opciones: [
            "Un método para recuperar tu cuenta si olvidas la contraseña.",
            "Una forma de autenticación que requiere dos factores.",
            "Un antivirus que se ejecuta en segundo plano."
        ],
        correcta: 1
    }
];

// Mostrar preguntas en el modal al abrirlo
document.getElementById("modalTest").addEventListener("show.bs.modal", function () {
    const formTest = document.getElementById("formTest");
    formTest.innerHTML = ""; // Limpiar preguntas anteriores

    preguntas.forEach((p, index) => {
        const bloque = document.createElement("div");
        bloque.classList.add("mb-4");
        bloque.innerHTML = `
            <p><strong>${index + 1}. ${p.pregunta}</strong></p>
            ${p.opciones.map((op, i) => `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="pregunta${index}" id="p${index}o${i}" value="${i}">
                    <label class="form-check-label" for="p${index}o${i}">${op}</label>
                </div>
            `).join("")}
        `;
        formTest.appendChild(bloque);
    });

    document.getElementById("feedback").innerHTML = "";
});

// Verificar respuestas del test
document.getElementById("btnVerificar").addEventListener("click", function () {
    let correctas = 0;

    preguntas.forEach((p, index) => {
        const seleccionada = document.querySelector(`input[name="pregunta${index}"]:checked`);
        if (seleccionada && parseInt(seleccionada.value) === p.correcta) {
            correctas++;
        }
    });

    const feedback = document.getElementById("feedback");
    const total = preguntas.length;

    if (correctas === 0) {
        feedback.innerHTML = `<div class="alert alert-danger">No acertaste ninguna respuesta. Revisa los consejos y vuelve a intentarlo.</div>`;
    } else if (correctas < total) {
        feedback.innerHTML = `<div class="alert alert-warning">Acertaste ${correctas} de ${total}. ¡Vas por buen camino!</div>`;
    } else {
        feedback.innerHTML = `<div class="alert alert-success">¡Excelente! Has respondido correctamente todas las preguntas.</div>`;
    }
});
