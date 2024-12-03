import * as gestionPreWeb from "./gestionPresupuestoWeb.js";
import * as gestionPre from "./gestionPresupuesto.js";

gestionPre.actualizarPresupuesto(1500);
let presu = gestionPre.mostrarPresupuesto();
gestionPreWeb.mostrarDatoEnId("presupuesto", presu);

let gasto = new gestionPre.CrearGasto(
  "Compra carne",
  23.44,
  "2021-10-06",
  "casa",
  "comida"
);
gestionPre.anyadirGasto(gasto);

gasto = new gestionPre.CrearGasto(
  "Compra fruta y verdura",
  14.25,
  "2021-09-06",
  "supermercado",
  "comida"
);
gestionPre.anyadirGasto(gasto);

gasto = new gestionPre.CrearGasto("Bonobús", 18.6, "2020-05-26", "transporte");
gestionPre.anyadirGasto(gasto);

gasto = new gestionPre.CrearGasto(
  "Gasolina",
  60.42,
  "2021-10-08",
  "transporte",
  "gasolina"
);
gestionPre.anyadirGasto(gasto);

gasto = new gestionPre.CrearGasto(
  "Seguro hogar",
  206.45,
  "2021-09-26",
  "casa",
  "seguros"
);
gestionPre.anyadirGasto(gasto);

gasto = new gestionPre.CrearGasto(
  "Seguro coche",
  195.78,
  "2021-10-06",
  "transporte",
  "seguros"
);
gestionPre.anyadirGasto(gasto);
