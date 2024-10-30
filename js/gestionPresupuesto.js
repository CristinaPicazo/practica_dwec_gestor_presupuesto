// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(nuevoPresupuesto) {
  if (isNaN(nuevoPresupuesto) || nuevoPresupuesto < 0) {
    return -1;
  } else if (nuevoPresupuesto > 0) {
    presupuesto = nuevoPresupuesto;
    return nuevoPresupuesto;
  } else {
    return "Tu presupuesto actual es de 0 €";
  }
}

function mostrarPresupuesto() {
  return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(nuevadesc, nuevoValor, nuevaFecha, ...nuevasEtiquetas) {
  this.valor = nuevoValor >= 0 ? nuevoValor : 0;
  this.descripcion = nuevadesc;

  if (Date.parse(nuevaFecha)) {
    this.fecha = Date.parse(nuevaFecha);
  } else {
    this.fecha = Date.parse(new Date());
  }

  this.mostrarGasto = function () {
    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
  };

  this.actualizarDescripcion = function (nuevadesc) {
    this.descripcion = nuevadesc;
  };

  this.actualizarValor = function (nuevoValor) {
    this.valor = nuevoValor >= 0 ? nuevoValor : this.valor;
  };

  this.mostrarGastoCompleto = function () {
    let listarGasto = `Gasto correspondiente a ${this.descripcion} con valor ${
      this.valor
    } €.
Fecha: ${new Date(this.fecha).toLocaleString()}
Etiquetas:\n`;

    for (let etiqueta of this.etiquetas) {
      listarGasto += `- ${etiqueta}\n`;
    }
    return listarGasto;
  };

  this.actualizarFecha = function (nuevaFecha) {
    if (Date.parse(nuevaFecha)) {
      this.fecha = Date.parse(nuevaFecha);
    }
  };

  this.anyadirEtiquetas = function (...nuevasEtiquetas) {
    nuevasEtiquetas.forEach((eti) => {
      this.etiquetas.push(eti);
      this.etiquetas = borrarDuplicados(this.etiquetas);
    });
  };

  this.borrarEtiquetas = function (...borraEtiqueta) {};

  this.etiquetas = nuevasEtiquetas.length > 0 ? [] : [...nuevasEtiquetas];
  this.anyadirEtiquetas(...nuevasEtiquetas);

}

function listarGastos() {
  return gastos;
}
function calcularTotalGastos() {}
function calcularBalance() {}
function anyadirGasto() {}
function borrarGasto() {}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export {
  mostrarPresupuesto,
  actualizarPresupuesto,
  CrearGasto,
  listarGastos,
  anyadirGasto,
  calcularTotalGastos,
  calcularBalance,
  borrarGasto,
};
