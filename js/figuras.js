//? Funciones para calcular cuadrados
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
//!Interacción con el HTML
function calcularPerimetroCuadrado() {
  const referencia = document.querySelector('#resultados-cuadrado');
  const lado = Number(document.querySelector("#ladoCuadrado").value);
  if(lado){
    const perimetro = perimetroCuadrado(lado);
  }else{
    insertarMensaje("error","Por favor ingrese el valor solicitado",referencia);
  }
}
function calcularAreaCuadrado() {
  const referencia = document.querySelector('#resultados-cuadrado');
  const lado = Number(document.querySelector("#ladoCuadrado").value);
  if(lado){
    const area = areaCuadrado(lado);
  }else{
    insertarMensaje("error","Por favor ingrese el valor solicitado",referencia);
  }
}

//? Funciones para calcular Triángulos
function perimetroTriangulo(lado1, lado2, ladoBase) {
  return lado1 + lado2 + ladoBase;
}
function areaTriangulo(ladoBase, altura) {
  (ladoBase * altura) / 2;
}

//!Interacción con el HTML
function calcularPerimetroTriangulo(){
  const lado1 = Number(document.querySelector('#ladoA').value);
  const lado2 = Number(document.querySelector('#ladoB').value);
  const ladoBase = Number(document.querySelector('#ladoBase').value);
  const perimetro= perimetroTriangulo(lado1, lado2, ladoBase);
}
function calcularAreaTriangulo(){
  const lado1 = Number(document.querySelector('#ladoA').value);
  const lado2 = Number(document.querySelector('#ladoB').value);
  const ladoBase = Number(document.querySelector('#ladoBase').value);

  const altura = Math.sqrt(Math.pow(lado1,2)-Math.pow((ladoBase)/2),2);
  const area= areaTriangulo(ladoBase,altura);
}


//? Funciones para calcular Círculos

const Pi = Math.PI;
function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  diametro = diametroCirculo(radio);
  return diametro * Pi;
}
function areaCirculo(radio) {
  return Math.pow(radio, 2) * Pi;
}

//!Interacción con el HTML


//función de mensaje de error 
function insertarMensaje(tipo,mensaje,refencia){
  const lugarInsertarMensaje = refencia;
  const fragmento = document.createDocumentFragment();
  const parrafoMensaje = document.createElement('P');
  parrafoMensaje.classList.add(tipo);
  parrafoMensaje.innerHTML=mensaje;
  fragmento.appendChild(parrafoMensaje);
  lugarInsertarMensaje.appendChild(fragmento);  
  setTimeout(() => {
    parrafoMensaje.remove();
  }, 5000);
}