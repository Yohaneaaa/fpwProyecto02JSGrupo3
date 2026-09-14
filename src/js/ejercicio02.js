// EJERCICIO_02: programa para calcular el area de un triangulo 

let base= prompt ("colocar la base del triangulo");
let altura= prompt ("colocar la altura del triangulo");

// colocar el valor de cada uno 
base= parseFloat (base);
altura= parseFloat(altura);

// calcula el area
let area = (base*altura)/2;

//muestra el resultado
alert ("el area del triangulo es: " + area);