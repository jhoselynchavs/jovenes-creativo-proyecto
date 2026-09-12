/* =========================
   MENÚ HAMBURGUESA
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Cerrar menú al seleccionar una opción */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


/* =========================
   BARRAS DE HABILIDADES
========================= */

const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;
                const progress = bar.getAttribute("data-progress");

                bar.style.width = progress + "%";

            }

        });

    },
    {
        threshold: 0.5
    }
);

progressBars.forEach(bar => {
    observer.observe(bar);
});


/* =========================
   FORMULARIO
========================= */

const form = document.getElementById("contact-form");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const nombreError = document.getElementById("nombre-error");
const emailError = document.getElementById("email-error");
const mensajeError = document.getElementById("mensaje-error");

const formMessage = document.getElementById("form-message");


/* Validar nombre */

function validarNombre() {

    const valor = nombre.value.trim();

    if (valor === "") {

        nombreError.textContent = "El nombre es obligatorio.";
        nombre.classList.add("input-error");
        nombre.classList.remove("input-success");

        return false;
    }

    if (valor.length < 3) {

        nombreError.textContent =
            "El nombre debe tener mínimo 3 caracteres.";

        nombre.classList.add("input-error");
        nombre.classList.remove("input-success");

        return false;
    }

    nombreError.textContent = "";
    nombre.classList.remove("input-error");
    nombre.classList.add("input-success");

    return true;
}


/* Validar correo */

function validarEmail() {

    const valor = email.value.trim();

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valor === "") {

        emailError.textContent =
            "El correo es obligatorio.";

        email.classList.add("input-error");
        email.classList.remove("input-success");

        return false;
    }

    if (!emailRegex.test(valor)) {

        emailError.textContent =
            "Escribe un correo válido.";

        email.classList.add("input-error");
        email.classList.remove("input-success");

        return false;
    }

    emailError.textContent = "";
    email.classList.remove("input-error");
    email.classList.add("input-success");

    return true;
}


/* Validar mensaje */

function validarMensaje() {

    const valor = mensaje.value.trim();

    if (valor === "") {

        mensajeError.textContent =
            "El mensaje es obligatorio.";

        mensaje.classList.add("input-error");
        mensaje.classList.remove("input-success");

        return false;
    }

    if (valor.length < 10) {

        mensajeError.textContent =
            "El mensaje debe tener mínimo 10 caracteres.";

        mensaje.classList.add("input-error");
        mensaje.classList.remove("input-success");

        return false;
    }

    mensajeError.textContent = "";
    mensaje.classList.remove("input-error");
    mensaje.classList.add("input-success");

    return true;
}


/* VALIDACIÓN EN TIEMPO REAL */

nombre.addEventListener("input", validarNombre);

email.addEventListener("input", validarEmail);

mensaje.addEventListener("input", validarMensaje);


/* =========================
   ENVÍO DEL FORMULARIO
========================= */

form.addEventListener("submit", event => {

    event.preventDefault();

    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const mensajeValido = validarMensaje();

    if (
        nombreValido &&
        emailValido &&
        mensajeValido
    ) {

        formMessage.textContent =
            "¡Mensaje enviado correctamente!";

        formMessage.style.color = "#16a34a";

        form.reset();

        nombre.classList.remove("input-success");
        email.classList.remove("input-success");
        mensaje.classList.remove("input-success");

    } else {

        formMessage.textContent =
            "Por favor, corrige los campos indicados.";

        formMessage.style.color = "#dc2626";

    }

});
