export const calcularPorcentaje = (respuestas, preguntas) => {
  return (respuestas / preguntas) * 100;
};

export const obtenerCategoria = (porcentaje) => {
  if (porcentaje >= 90) {
    return "Excelente";
  } else if (porcentaje >= 70) {
    return "Muy Bueno";
  } else if (porcentaje >= 50) {
    return "Aprobado";
  } else {
    return "Desaprobado";
  }
};
