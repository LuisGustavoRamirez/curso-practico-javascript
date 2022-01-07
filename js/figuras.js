//? Funciones para calcular cuadrados
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
//!Interacción con el HTML, cálculos para cuadrados
//Variables globales punteros al documento
const botonesCuadrado = document.querySelector("#btn-cuadrado");
//Escucha de Eventos
botonesCuadrado.addEventListener("click", calculosEnCuadrado);
//Función para cálculos Figura geométrica "Cuadrado"
function calculosEnCuadrado(e) {
  //Variables locales punteros a documentos
  const lado = document.querySelector("#ladoCuadrado").value;
  const referencia = document.querySelector("#resultados-cuadrado");
  if (lado) {
    const tipoDeCalculo = e.target.id;
    if (tipoDeCalculo === "perimetro") {
      const resultado = perimetroCuadrado(lado);
      insertarResultado("Perímetro", resultado, referencia);
    }
    if (tipoDeCalculo === "area") {
      const resultado = areaCuadrado(lado);
      insertarResultado("Area", resultado, referencia);
    }
  } else {
    insertarMensaje(
      "error",
      "El valor  'lado' del cuadrado es obligatorio",
      referencia
    );
    resaltarInput(document.querySelector("#ladoCuadrado"));
  }
}

//? Funciones para calcular Triángulos
function perimetroTriangulo(lado1, lado2, ladoBase) {
  return lado1 + lado2 + ladoBase;
}
function areaTriangulo(ladoBase, altura) {
  return (ladoBase * altura) / 2;
}

//!Interacción con el HTML, cálculos para triángulos
//Variables globales punteros al documento
const botonesTriangulo = document.querySelector("#btn-triangulo");
//Escucha de Eventos
botonesTriangulo.addEventListener("click", calculosEnTriangulo);
function calculosEnTriangulo(e) {
  const referencia = document.querySelector("#resultados-triangulo");
  const lado1 = Number(document.querySelector("#ladoA").value);
  const lado2 = Number(document.querySelector("#ladoB").value);
  const ladoBase = Number(document.querySelector("#ladoBase").value);
  let resaltarErrores = [];
  if (!lado1) {
    resaltarErrores.push(document.querySelector("#ladoA"));
  }
  if (!lado2) {
    resaltarErrores.push(document.querySelector("#ladoB"));
  }
  if (!ladoBase) {
    resaltarErrores.push(document.querySelector("#ladoBase"));
  }
  if (resaltarErrores.length === 0) {    
    if (lado1 !== lado2 || Math.pow(lado2, 2) <= Math.pow(ladoBase / 2, 2)) {
      insertarMensaje(
        "error",
        "El 'ladoA' y el 'ladoB' deben ser iguales y su valor debe ser mayor que la base/2",
        referencia
      );
      resaltarInput(document.querySelector("#ladoA"));
      resaltarInput(document.querySelector("#ladoB"));
      resaltarInput(document.querySelector("#ladoBase"));
    } else {
      const tipoDeCalculo = e.target.id;
      if (tipoDeCalculo === "perimetro") {
        const resultado = perimetroTriangulo(lado1, lado2, ladoBase);
        insertarResultado("Perímetro", resultado, referencia);
      }
      if (tipoDeCalculo === "area") {
        const altura = Math.sqrt(
          Math.pow(lado1, 2) - Math.pow(ladoBase / 2, 2)
        );
        const resultado = areaTriangulo(ladoBase, altura);
        insertarResultado("Area", resultado, referencia);
      }
    }
  } else {
    resaltarErrores.forEach((elemento) => resaltarInput(elemento));
    insertarMensaje(
      "error",
      "Los datos señalados son obligatorios",
      referencia
    );
  }
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
//!Interacción con el HTML, calculos para círculos
//Variables globales punteros al documento
const botonesCirculo = document.querySelector("#btn-circulo");
//Escucha de Eventos
botonesCirculo.addEventListener("click", calculosEnCirculo);
//Función para cálculos Figura geométrica "Cuadrado"
function calculosEnCirculo(e) {
  //Variables locales punteros a documentos
  const radio = document.querySelector("#radio").value;
  const referencia = document.querySelector("#resultados-circulo");
  if (radio) {
    const tipoDeCalculo = e.target.id;
    if (tipoDeCalculo === "perimetro") {
      const resultado = perimetroCirculo(radio);
      insertarResultado("Perímetro", resultado, referencia);
    }
    if (tipoDeCalculo === "area") {
      const resultado = areaCirculo(radio);
      insertarResultado("Area", resultado, referencia);
    }
  } else {
    insertarMensaje(
      "error",
      "El valor 'radio' del círculo es obligatorio",
      referencia
    );
    resaltarInput(document.querySelector("#radio"));
  }
}

//! Funciones para tareas especificas
//Función de mensaje de error
function insertarMensaje(tipo, mensaje, refencia) {
  const parrafo = document.querySelector('.error');
  if(!parrafo){
    const lugarInsertarMensaje = refencia;
    const fragmento = document.createDocumentFragment();
    const parrafoResultado = document.createElement("P");
    parrafoResultado.classList.add(tipo);
    parrafoResultado.innerHTML = mensaje;
    fragmento.appendChild(parrafoResultado);
    lugarInsertarMensaje.appendChild(fragmento);
    setTimeout(() => {
      parrafoResultado.remove();
    }, 4000);
  }  
}
//Función para resalta input
function resaltarInput(referencia) {
  referencia.classList.add("resaltar");
  setTimeout(() => {
    referencia.classList.remove("resaltar");
  }, 4000);
}
//Función para inserta resultado
function insertarResultado(tipoDeCalculo, resultado, refencia) {
  const unidad = tipoDeCalculo === "Area" ? "cm^2" : "cm";
  const lugarInsertarResultado = refencia;
  const fragmento = document.createDocumentFragment();
  const parrafoResultado = document.createElement("P");
  parrafoResultado.classList.add("resultado");
  parrafoResultado.innerHTML = `<span>${tipoDeCalculo}</span> =  ${resultado} <span>${unidad}</span>`;
  fragmento.appendChild(parrafoResultado);
  lugarInsertarResultado.appendChild(fragmento);
  setTimeout(() => {
    parrafoResultado.remove();
  }, 10000);
}
