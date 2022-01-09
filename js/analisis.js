//* Funciones de media y medianas
function calcularMedianaAritmetica(lista) {
  const listaOrdenadaAscendente = lista.sort((a, b) => {
    return a - b;
  });
  let mediana = 0;
  let posicionMitadLista = parseInt(listaOrdenadaAscendente.length / 2);
  if (lista.length % 2 === 0) {
    mediana = calcularMediaAritmetica([
      lista[posicionMitadLista],
      lista[posicionMitadLista - 1],
    ]);
  } else {
    mediana = lista[posicionMitadLista];
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
const salariosCol = colombia.map((persona) => persona.salary);
const salariosColSorted = salariosCol.sort((a, b) => {
  return a - b;
});
const sliceStart =
  salariosColSorted.length - parseInt(salariosColSorted.length * 0.1);
const salariosColTop10 = salariosColSorted.slice(sliceStart);

const medianaGeneralCol = calcularMediaAritmetica(salariosColSorted);
const medianaColTop10 = calcularMedianaAritmetica(salariosColTop10);
console.log({
  medianaGeneralCol,
  medianaColTop10,
});
