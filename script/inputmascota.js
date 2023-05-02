const inputMascota = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputPeso = document.getElementById("peso");
const inputMail = document.getElementById("mail");
const btnAgregarMascota = document.getElementById("agregarMascota");
const mensaje = document.getElementById("mensaje");
btnAgregarMascota.addEventListener("click", (e) => {
    e.preventDefault()
    const nombreMascota = inputMascota.value;
    const edadMascota = inputEdad.value;
    const pesoMascota = inputPeso.value;
    const mailMascota = inputMail.value;
    
if (edadMascota < 20) {
    mensaje.innerHTML = `<div class="alert alert-primary" role="alert">
    "Edad aprovada para atender, turno agendado."
  </div>`
    
}
else{
  mensaje.innerHTML = `<div class="alert alert-secondary" role="alert">
      "Lo siento no podemos tratar a tu mascota, no tenemos las herramientas necesaria y no queremos una mala praxis. Intenten entendernos. Muchas gracias y que tengas y lindo dia."
     </div>`
}

const mascotas = new mascota(nombreMascota, edadMascota, pesoMascota, mailMascota);
    console.log("esto se cargo ", mascotas);
})
