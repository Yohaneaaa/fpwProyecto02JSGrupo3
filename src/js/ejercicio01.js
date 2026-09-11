// Realizar un programa que compare dos letras y determine si la primera está ubicada
// antes o después según el abecedario. Tenga en cuenta que
// las letras mayúsculas están antes que las minúsculas. 
// Debe pedir al usuario el ingreso de las letras.


let letra1 = prompt("Ingrese la primera letra:");
let letra2 = prompt("Ingrese la segunda letra:");

if (letra1 < letra2) {
 alert(letra1 + " está antes que " + letra2 + " en el abecedario");
} else if (letra1 > letra2) {
 alert(letra1 + " está después que " + letra2 + " en el abecedario");
} else {
 alert("Las dos letras son iguales");
}