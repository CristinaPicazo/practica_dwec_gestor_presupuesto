// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;

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

function CrearGasto(nuevadesc, nuevoValor) {
  this.valor = nuevoValor >= 0 ? nuevoValor : 0;
  this.descripcion = nuevadesc;

  this.mostrarGasto = function () {
    return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
  };

  this.actualizarDescripcion = function (nuevadesc) {
    this.descripcion = nuevadesc;
  };

  this.actualizarValor = function (nuevoValor) {
    this.valor = nuevoValor >= 0 ? nuevoValor : this.valor;
  };
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export { mostrarPresupuesto, actualizarPresupuesto, CrearGasto };
