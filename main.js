
let misAnalisis = [
  new analisis(1, "sangre", 7500),
  new analisis(2, "radiografia", 6002),
  new analisis(3, "orina", 4050),
  new analisis(4, "ecografia", 5000),
  new analisis(5, "cita regular", 3000),
];

let listaAnalisis = document.getElementById("misAnalisis");
misAnalisis.forEach((unaCarrera) => {
  let item = document.createElement("option");
  item.value = unaCarrera.id.toString();
  item.innerText = unaCarrera.nombre;
  listaAnalisis.append(item);
});

