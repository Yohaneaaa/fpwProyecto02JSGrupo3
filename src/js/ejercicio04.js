/*Solicitar al usuario que ingrese una cadena de N caracteres impares. 
 Cada uno de estos N caracteres es o bien un dígito entre 0 y 5 inclusive, o bien un signo de pregunta ?, 
 en forma intercalada y comenzando con un dígito. 
 Debe escribir una función que retorne una nueva cadena, que representa el número obtenido de 
 reemplazar cada signo de pregunta, de la cadena original, por un dígito que sea la suma de los dígitos 
 adyacentes a ese signo de pregunta en la cadena original.*/
 import { remplazoSignoInterrogacion } from "../services02/servicesEjercicio04.js";

const ingresoNum = prompt("Ingrese una cadena de N caracteres impares (ej: 3?4?1), intercalando dígitos del 0 al 5 y '?'");


if (ingresoNum.length % 2 === 0) {
    alert("Error: La longitud debe ser un número impar.");
} 

else if (ingresoNum.length === 1) {
    alert("Error: Ingrese una cadena superior a 1 carácter.");
} 
else {
    
    let esValido = true;

    for (let i = 0; i < ingresoNum.length; i++) {
        const caracter = ingresoNum[i];

        if (i % 2 === 0) {
            
            if (caracter < '0' || caracter > '5') {
                esValido = false;
                break;
            }
        } else {
            
            if (caracter !== '?') {
                esValido = false;
                break;
            }
        }
    }

    if (!esValido) {
        alert("Error: Ingrese un numero entre 0 y 5");
    } else {
        
        const salida = remplazoSignoInterrogacion(ingresoNum);
        alert(`Cadena original: ${ingresoNum}\nCadena procesada: ${salida}`);
    }
}