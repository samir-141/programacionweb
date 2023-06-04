document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores del usuario y la contraseña ingresados
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Aquí puedes realizar la validación de usuario y contraseña
    if (username === "123456" && password === "sam20") {
      alert("Inicio de sesión exitoso");
      // Establecer una cookie de sesión
      document.cookie = "session=loggedin";
      // Redireccionar al usuario a index.html
      window.location.href = "index.html";
    } else {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
    }
  });