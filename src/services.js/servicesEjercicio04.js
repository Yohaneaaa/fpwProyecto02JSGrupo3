export const remplazoSignoInterrogacion = (cadena) =>{
let resultado = "";

    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] === "?"){
            let izq = parseInt(cadena[i-1], 10);
            let der = parseInt(cadena[i+1], 10);
            resultado += (izq + der).toString();
        } else {
        resultado += cadena[i];
        }
    }
    return resultado;
}