function ponerMascotas(){
    let tablaMascota = document.getElementById("tablaMascotas");
    tablaMascota.innerHTML = "";
    mascotas.forEach((unaMascota) => {
        let agendar = document.createElement `<tr>
        <td scope="row">${unaMascota.nombre}</td>
      <td>${unaMascota.edad.toString()}</td>
      <td>${unaMascota.peso.toString()}</td>
      <td>${unaMascota.analisis.toString()}</td>
    </tr>`;
    tablaMascota.append(agendar);
    });
}