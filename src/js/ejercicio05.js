import {
  calcularPorcentaje,
  obtenerCategoria,
} from "../services/serviceEjercicio5.js";
const formulario = document.querySelector("#formulario");
const preguntas = document.querySelector("#preguntas");
const respuestas = document.querySelector("#respuestas");
const porcentaje = document.querySelector("#porcentaje");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const totalPreguntas = Number(preguntas.value);
  const totalCorrectas = Number(respuestas.value);

  const resultado = calcularPorcentaje(totalCorrectas, totalPreguntas);
  const categoria = obtenerCategoria(resultado);
  console.log(`Cat: ${categoria} - Res ${resultado}`);

  porcentaje.textContent = `Porcentaje: ${resultado}% - Categoria: ${categoria}`;
});
