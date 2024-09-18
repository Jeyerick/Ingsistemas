// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Evita que el formulario se envíe si hay errores

  let isValid = true;

  // Limpiar mensajes de error anteriores
  clearErrors();

  // Validar el nombre
  const nombre = document.getElementById('nombre').value.trim();
  if (nombre === "") {
      showError('error-nombre', 'El nombre es obligatorio.');
      isValid = false;
  }

  // Validar los apellidos
  const apellidos = document.getElementById('apellidos').value.trim();
  if (apellidos === "") {
      showError('error-apellidos', 'Los apellidos son obligatorios.');
      isValid = false;
  }

  // Validar el teléfono (debe ser un número de 10 dígitos)
  const telefono = document.getElementById('telefono').value.trim();
  const telefonoRegex = /^[0-9]{10}$/;  // Valida que sean 10 dígitos numéricos
  if (!telefonoRegex.test(telefono)) {
      showError('error-telefono', 'El número de teléfono debe tener 10 dígitos.');
      isValid = false;
  }

  // Validar el correo electrónico
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex simple para validar correos
  if (!emailRegex.test(email)) {
      showError('error-email', 'El correo electrónico no es válido.');
      isValid = false;
  }

  // Validar que se haya seleccionado una tarjeta
  const tarjeta = document.getElementById('tarjeta').value;
  if (tarjeta === "") {
      showError('error-tarjeta', 'Debes seleccionar una tarjeta.');
      isValid = false;
  }

  // Si todo es válido, se puede enviar el formulario
  if (isValid) {

    resetForm()

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Formulario enviado con éxito.",
        showConfirmButton: false,
        timer: 2000
      });
      // Aquí puedes agregar la lógica para enviar los datos al servidor, etc.
  }
});

// Función para mostrar mensajes de error
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = 'block';  // Mostrar mensaje de error
}

// Función para limpiar todos los mensajes de error
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(message) {
      message.innerText = '';  // Limpiar mensaje
      message.style.display = 'none';  // Ocultar el mensaje
  });
}

function resetForm() {
  document.getElementById('contactForm').reset();  // Limpiar todos los campos del formulario
}








