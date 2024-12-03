import * as gestionPreWeb from "./gestionPresupuestoWeb.js";
import * as gestionPre from "./gestionPresupuesto.js";

gestionPre.actualizarPresupuesto(1500);
let presu = gestionPre.mostrarPresupuesto();
gestionPreWeb.mostrarDatoEnId("presupuesto", presu);
