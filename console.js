console.log("Hola mundo");
// Creamos un array con los nombres de los días de la semana
let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Recorremos el array con un bucle for y mostramos cada día por consola
for (let i = 0; i < diasSemana.length; i++) {
  console.log(diasSemana[i]);
}


// Creamos un array con los nombres de los meses del año
let mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Recorremos el array con un bucle for y mostramos cada mes por consola
for (let i = 0; i < mesesAnio.length; i++) {
  console.log(mesesAnio[i]);
}

COLORS
function generarColorAleatorio() {
  let letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}


document.body.style.backgroundColor = generarColorAleatorio();
