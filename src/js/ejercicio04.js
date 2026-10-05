/*Solicitar al usuario que ingrese una cadena de N caracteres impares. 
 Cada uno de estos N caracteres es o bien un dígito entre 0 y 5 inclusive, o bien un signo de pregunta ?, 
 en forma intercalada y comenzando con un dígito. 
 Debe escribir una función que retorne una nueva cadena, que representa el número obtenido de 
 reemplazar cada signo de pregunta, de la cadena original, por un dígito que sea la suma de los dígitos 
 adyacentes a ese signo de pregunta en la cadena original.*/
 import { remplazoSignoInterrogacion } from "../services.js/servicesEjercicio04.js";

const ingresoNum = prompt("Ingrese una cadena de N caracteres impares (ej: 3?4?1), intercalando dígitos del 0 al 5 y '?'");

// 1. Validar si la longitud es par
if (ingresoNum.length % 2 === 0) {
    alert("Error: La longitud debe ser un número impar.");
} 
// 2. Validar longitud mínima mayor a 1
else if (ingresoNum.length === 1) {
    alert("Error: Ingrese una cadena superior a 1 carácter.");
} 
else {
    // 3. Validar el formato intercalado y que los dígitos estén entre 0 y 5
    let esValido = true;

    for (let i = 0; i < ingresoNum.length; i++) {
        const caracter = ingresoNum[i];

        if (i % 2 === 0) {
            // Posiciones pares (0, 2, 4...): Deben ser dígitos entre '0' y '5'
            if (caracter < '0' || caracter > '5') {
                esValido = false;
                break;
            }
        } else {
            // Posiciones impares (1, 3, 5...): Deben ser obligatoriamente '?'
            if (caracter !== '?') {
                esValido = false;
                break;
            }
        }
    }

    if (!esValido) {
        alert("Error: Ingrese un numero entre 0 y 5");
    } else {
        // Si todo es correcto, llamamos al servicio
        const salida = remplazoSignoInterrogacion(ingresoNum);
        alert(`Cadena original: ${ingresoNum}\nCadena procesada: ${salida}`);
    }
}