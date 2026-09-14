// variables const guardan los resultados
const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultadoLaMasLarga'); // Cambiado para que coincida con el ID correcto
const resultado1Div = document.getElementById('resultado1'); // Para mostrar longitud de la ciudad
const resultado2Div = document.getElementById('resultado2'); // Para mostrar longitud del país

// Agrega un evento al formulario para manejar el envío
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); /** Previene el envío del formulario */

    // Obtiene los valores ingresados
    const ciudad = document.getElementById("ciudad").value;
    const pais = document.getElementById("pais").value; // Agregado para obtener el país

    // Validar que no se ingresen números
    if (/\d/.test(ciudad) || /\d/.test(pais)) {
        alert("No ingresar números");
        return; // Detiene la ejecución si hay números
    }

    // Concatenar las cadenas
    const resultado_concatenado = `${ciudad}, ${pais}`;

    // Calcular longitudes
    const longitudCiudad = ciudad.length;
    const longitudPais = pais.length;

    // Mostrar resultados
    resultadoDiv.textContent = `Resultado concatenado: ${resultado_concatenado}`;
    resultado1Div.textContent = `El nombre de la ciudad tiene (letras): ${longitudCiudad}`;
    resultado2Div.textContent = `El nombre del país tiene (letras): ${longitudPais}`;
    
    // Comparar longitudes
    const comparacion = compararLongitudes(longitudCiudad, longitudPais);
   resultadoDiv.innerHTML += ` <br>${comparacion}`;
    
});

// Función para comparar longitudes
function compararLongitudes(longitudCiudad, longitudPais) {
    if (longitudCiudad > longitudPais) {
        return "La cadena 'ciudad' es más larga que la caden 'país'.";
    } else if (longitudCiudad < longitudPais) {
        return "La cadena 'país' es más larga que la cadena 'ciudad'.";
    } else {
        return "La cadenas 'ciudad' y  'país' tienen la misma longitud.";
    }
}