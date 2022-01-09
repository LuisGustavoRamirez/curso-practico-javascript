function moda(lista) {
  const listaCount = {};
  lista.map(function (elemento) {
    listaCount[elemento]
      ? (listaCount[elemento]++)
      : (listaCount[elemento] = 1);
  });
  const listaArray = Object.entries(listaCount).sort((a, b) => {
    return a[1] - b[1];
  });
  return listaArray.pop();
}
