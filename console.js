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

HORA ACTUAL

let fechaActual = new Date();
let horaActual = fechaActual.getHours();
let minutosActuales = fechaActual.getMinutes();

console.log("La hora actual es " + horaActual + ":" + minutosActuales);
bad date
let fechaActual = new dite();
let horaActual = fechaActual.getHours();
let minutosActuales = fechaActual.getMinutes();

console.log("La hora actual es " + horaActual + ":" + minutosActuales);



// CODIGO LAPTOPS

let marcasLaptops = ["Apple", "Dell", "Lenovo", "HP", "Acer", "Asus"];

// Accediendo a los elementos del array
console.log("La primera marca de laptops es " + marcasLaptops[0]); // Apple
console.log("La tercera marca de laptops es " + marcasLaptops[2]); // Lenovo


