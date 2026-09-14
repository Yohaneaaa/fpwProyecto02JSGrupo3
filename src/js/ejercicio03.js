import {
  armarUbicacion,
  compararLongitud
} from "../services/serviciosEjercicio03.js";

const ciudad = prompt("Ingrese el nombre de una ciudad:");
const pais = prompt("Ingrese el nombre de un pais:");

const ubicacion = armarUbicacion(ciudad, pais);
const comparacion = compararLongitud(ciudad, pais);

alert(`Ubicacion: ${ubicacion}`);
alert(`Comparacion: ${comparacion}`);
