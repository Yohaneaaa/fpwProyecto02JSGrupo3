/*Solicitar al usuario que ingrese una cadena de N caracteres impares. 
 Cada uno de estos N caracteres es o bien un dígito entre 0 y 5 inclusive, o bien un signo de pregunta ?, 
 en forma intercalada y comenzando con un dígito. 
 Debe escribir una función que retorne una nueva cadena, que representa el número obtenido de 
 reemplazar cada signo de pregunta, de la cadena original, por un dígito que sea la suma de los dígitos 
 adyacentes a ese signo de pregunta en la cadena original.*/
 import { remplazoSignoInterrogacion } from "../services.js/servicesEjercicio04";
 const ingresoNum = prompt("Ingrese una cadena de numeros, puede colocar ? cada lugar intermedio")
 if(ingresoNum.length % 2 === 0){
    alert("cadena de pares, ingrese una cadena de longitud impar")
 } else {
     const salida = remplazoSignoInterrogacion(ingresoNum);
  alert(`Cadena original: ${ingresoNum}\nCadena procesada: ${salida}`);
}
 