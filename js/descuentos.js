function calcularPrecioConDescuento(precio,descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =
    (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount(){
  if(document.querySelector('.resultado')){
    document.querySelector('.resultado').remove();
  }
  const price = document.querySelector('#precio').value;
  const discountValue = document.querySelector('#descuento').value;
  const precioConDescuento = calcularPrecioConDescuento(price,discountValue);
  const referenciaResultados = document.querySelector('.resultados');
  const fragmento = document.createDocumentFragment();
  const parrafoResultado = document.createElement('P');
  parrafoResultado.textContent=`El valor a pagar por el producto ya aplicado el descuento $${precioConDescuento}`;
  parrafoResultado.classList.add('resultado');
  fragmento.appendChild(parrafoResultado);
  referenciaResultados.appendChild(fragmento);
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
