export const armarUbicacion = (ciudad, pais) => {
  return `${ciudad} , ${pais}`;
};

export const compararLongitud = (ciudad, pais) => {
  if (ciudad.length === pais.length) {
    return `Misma cantidad de caracteres (${ciudad.length})`;
  }

  if (ciudad.length > pais.length) {
    return `Ciudad ${ciudad} (${ciudad.length}) es mas larga que el pais ${pais} (${pais.length})`;
  }

  return `Pais ${pais} (${pais.length}) es mas largo que la ciudad ${ciudad} (${ciudad.length})`;
};
