function calcularMedianaAritmetica(lista) {
  const listaOrdenadaAscendente = lista.sort((a, b) => {
    return a - b;
  });
  let mediana = 0;
  let posicionMitaLista = parseInt(listaOrdenadaAscendente.length / 2);
  if (lista.length % 2 === 0) {
    mediana = calcularMediaAritmetica([
      lista[posicionMitaLista],
      lista[posicionMitaLista - 1],
    ]);
  } else {
    mediana = lista[posicionMitaLista];
  }
  return mediana;
}

function calcularMediaAritmetica(lista) {
  let sumaLista = lista.reduce((total = 0, num) => {
    return total + num;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
