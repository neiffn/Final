window.onbeforeunload = function() {
  return '¿Estás seguro de querer abandonar la página?';
};

window.onload = function () {
  var mayorDeEdad = document.getElementById('mayorDeEdadModal')
  modal = new bootstrap.Modal(mayorDeEdad)
  modal.show()
}

const botonProductoComprado = document.getElementById('botonProductoComprado')
const productoComprado = document.getElementById('productoComprado')
if (botonProductoComprado) {
    botonProductoComprado.addEventListener('click', () => {
    const toast = new bootstrap.Toast(productoComprado)
    toast.show()
  })
}

const botonEnviarFormulario = document.getElementById('botonEnviarFormulario')
const enviarFormulario = document.getElementById('enviarFormulario')
if (botonEnviarFormulario) {
  botonEnviarFormulario.addEventListener('click', () => {
    const toast = new bootstrap.Toast(enviarFormulario)
    toast.show()
  })
}

function irAWhatsApp() {
  window.open("http://wa.me/5493364373876");
}

function cambiarPrecioDeEnvio(esGratis) {
  var costoEnvio = document.getElementById('costoEnvio');

  if (esGratis){
    costoEnvio.textContent = 'gratis'
  }
  else {
    costoEnvio.textContent = '$ 800.00 pesos'
  }
}