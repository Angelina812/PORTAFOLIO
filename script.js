function enviarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    alert("Gracias por tu mensaje, " + nombre + " 😊");
    event.target.reset();
  }