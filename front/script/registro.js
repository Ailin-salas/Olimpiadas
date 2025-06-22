// scripts/registro.js

document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  const registerMessage = document.getElementById('registerMessage');

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    registerMessage.classList.add('d-none');
    registerMessage.classList.remove('text-success', 'text-danger');
    registerMessage.textContent = '';

    const firstName = document.getElementById('reg_name').value.trim();
    const lastName = document.getElementById('reg_lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const termsAccepted = document.getElementById('termsCheck').checked;

    // Validaciones básicas
    if (!firstName || !lastName || !email || !username || !password) {
      showMessage('Todos los campos con * son obligatorios.', 'danger');
      return;
    }
    if (!termsAccepted) {
      showMessage('Debe aceptar los términos y condiciones de uso.', 'danger');
      document.getElementById('termsCheck').classList.add('is-invalid'); // Muestra feedback de Bootstrap
      return;
    } else {
      document.getElementById('termsCheck').classList.remove('is-invalid');
    }
    if (password.length < 6) {
      showMessage('La contraseña debe tener al menos 6 caracteres.', 'danger');
      return;
    }
    // Simple validación de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showMessage('Por favor, ingrese un email válido.', 'danger');
        return;
    }

    showMessage('Registrando usuario...', 'info');

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password // En un sistema real, la contraseña se hashearía en el backend
    };

    // Simular llamada a un backend para registrar al usuario
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% de éxito simulado
      const isEmailTaken = Math.random() < 0.1; // 10% de chance de que el email ya exista

      if (isEmailTaken && isSuccess) { // Si hay éxito pero el email ya está tomado
          showMessage('El email o nombre de usuario ya está registrado.', 'danger');
      } else if (isSuccess) {
        showMessage('¡Registro exitoso! Ya puedes iniciar sesión.', 'success');
        registerForm.reset();
        // Opcional: redirigir al login
        setTimeout(() => { window.location.href = 'login.html'; }, 3000);
      } else {
        showMessage('Error en el registro. Por favor, intente de nuevo.', 'danger');
      }
    }, 2000);
  });

  function showMessage(message, type) {
    registerMessage.textContent = message;
    registerMessage.classList.remove('d-none');
    registerMessage.classList.add(`text-${type}`);
  }
});