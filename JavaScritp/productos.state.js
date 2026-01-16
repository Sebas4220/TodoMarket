/* ============================================
   productos.state.js
   Estado global + persistencia + moneda + utils
   ============================================ */

/* -------------------------
   Estado global centralizado
   ------------------------- */
window.STATE = {
  carrito: JSON.parse(localStorage.getItem("carrito_v1") || "[]"),
  moneda: localStorage.getItem("moneda_v1") || "USD",
  tasaVES: Number(localStorage.getItem("tasa_v1") || 40),
  busqueda: {
    query: "",
    activeIndex: -1,
    results: []
  }
};

/* -------------------------
   Persistencia
   ------------------------- */
window.saveState = function () {
  localStorage.setItem("carrito_v1", JSON.stringify(STATE.carrito));
  localStorage.setItem("moneda_v1", STATE.moneda);
  localStorage.setItem("tasa_v1", STATE.tasaVES);
};

/* -------------------------
   Utilidades numéricas
   ------------------------- */
window.formatNumber = n => Number(n).toFixed(2);

window.convertPrice = function (valor) {
  const v = Number(valor) || 0;
  if (STATE.moneda === "USD") return `$${formatNumber(v)}`;
  return `${formatNumber(v * STATE.tasaVES)} Bs`;
};

/* -------------------------
   Debounce universal
   ------------------------- */
window.debounce = function (fn, wait) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
};

/* -------------------------
   Obtener parámetros de URL
   ------------------------- */
window.getQueryParam = function (name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
};

/* -------------------------
   Cambio de moneda (UI + estado)
   ------------------------- */
window.setMoneda = function (moneda) {
  STATE.moneda = moneda;
  saveState();
  if (window.renderAll) window.renderAll();
};

/* -------------------------
   Cambio de tasa (si agregas admin)
   ------------------------- */
window.setTasa = function (tasa) {
  STATE.tasaVES = Number(tasa);
  saveState();
  if (window.renderAll) window.renderAll();
};
