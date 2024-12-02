function mostrarDatoEnId(idElemento, valor) {
  document.getElementById(idElemento).textContent = valor;
}

function mostrarGastoWeb(idElemento, gastos) {
  gastos.forEach((gasto) => {
    let divIdElemento = document.getElementById(idElemento);

    let estrucuturaGasto = document.createElement("div");
    estrucuturaGasto.setAttribute("class", "gasto");
    divIdElemento.appendChild(estrucuturaGasto);

    let gasto_descripcion = document.createElement("div");
    gasto_descripcion.setAttribute("class", "gasto-descripcion");
    gasto_descripcion.textContent = gasto.descripcion;
    estrucuturaGasto.appendChild(gasto_descripcion);

    let gasto_fecha = document.createElement("div");
    gasto_fecha.setAttribute("class", "gasto-fecha");
    gasto_fecha.textContent = new Date(gasto.fecha)
      .toLocaleString()
      .substring(0, 9);
    estrucuturaGasto.appendChild(gasto_fecha);

    let gasto_valor = document.createElement("div");
    gasto_valor.setAttribute("class", "gasto-valor");
    gasto_valor.textContent = gasto.valor;
    estrucuturaGasto.appendChild(gasto_valor);

    let gasto_etiquetas = document.createElement("div");
    gasto_etiquetas.setAttribute("class", "gasto-etiquetas");

    gasto.etiquetas.forEach((etiquetas) => {
      console.log("etiquetas", etiquetas);
      let gasto_etiquetas_etiqueta = document.createElement("span");
      gasto_etiquetas_etiqueta.textContent = etiquetas;
      gasto_etiquetas_etiqueta.setAttribute(
        "class",
        "gasto-etiquetas-etiqueta"
      );
      gasto_etiquetas.appendChild(gasto_etiquetas_etiqueta);
    });
    estrucuturaGasto.appendChild(gasto_etiquetas);
  });
}
