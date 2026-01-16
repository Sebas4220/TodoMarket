/* ============================
   productos.data.js
   Lista de productos + helpers
   ============================ */

window.PRODUCTOS = [
  { nombre: "AirPods Pro 2", precio: 9.5, oferta: "", categoria: "Audio", imagen: "./img/Productos/AirPodsMaximantados.png" },
  { nombre: "AirPods 3ra", precio: 9, oferta: 8, categoria: "Audio", imagen: "./img/Productos/AirPodsMaximantados.png" },
  { nombre: "AirPods Pro 2 ANC", precio: 10.5, oferta: "", categoria: "Audio", imagen: "./img/Productos/AirPodsMaximantados.png" },
  { nombre: "AirPods 4ta", precio: 11, oferta: "", categoria: "Audio", imagen: "./img/Productos/AirPodsMaximantados.png" },
  { nombre: "AirPods Max imantados", precio: 24, oferta: "", categoria: "Audio", imagen: "./img/Productos/AirPodsMaximantados.png" },
  { nombre: "AirPods Max", precio: 15.8, oferta: "", categoria: "Audio", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Audífonos Buds 3 Pro", precio: 10.5, oferta: "", categoria: "Audio", imagen: "./img/Productos/AudífonosBuds3Pro.png" },

  { nombre: "Reloj serie 10 Apple Watch", precio: 18, oferta: "", categoria: "Relojes", imagen: "./img/Productos/Relojserie10.png" },
  { nombre: "Reloj serie 10 Nike", precio: 18, oferta: "", categoria: "Relojes", imagen: "./img/Productos/Relojserie10Nike.png" },
  { nombre: "Reloj Ultra 2", precio: 20, oferta: "", categoria: "Relojes", imagen: "./img/Productos/RelojUltra2.png" },
  { nombre: "Reloj Ultra 2 varias correas", precio: 13.5, oferta: "", categoria: "Relojes", imagen: "./img/Productos/RelojUltra2variascorreas.png" },
  { nombre: "Reloj Ultra 3", precio: 7.5, oferta: "", categoria: "Relojes", imagen: "./img/Productos/RelojUltra3.png" },
  { nombre: "Reloj KT80", precio: 30, oferta: "", categoria: "Relojes", imagen: "./img/Productos/RelojKT80.png" },
  { nombre: "Reloj H08", precio: 28.5, oferta: "", categoria: "Relojes", imagen: "./img/Productos/RelojH08.png" },

  { nombre: "Cargador iPhone 2 en 1", precio: 3.5, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/CargadoriPhone2en1.png" },
  { nombre: "Taco 20w", precio: 2.8, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/Taco20w.png" },
  { nombre: "Cable de iPhone", precio: 1.4, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/cablelightningusb.png" },
  { nombre: "Cable C a C iPhone", precio: 2.1, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/CableCaCiPhone.png" },
  { nombre: "Cable 4 en 1", precio: 2, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/Cabla4en1.png" },
  { nombre: "Lápiz táctil", precio: 6.5, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/Lápiztáctil.png" },
  { nombre: "Cinta LED neón 5M", precio: 11.8, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Estabilizador L09", precio: 29, oferta: "", categoria: "Accesorios", imagen: "./img/Productos/AirPodsMax.png" },

  { nombre: "Panel selfie", precio: 4, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel selfie RGB", precio: 6, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel LED RL900", precio: 22, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel RL19", precio: 24, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel RL16", precio: 20, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },

  { nombre: "Control PS3", precio: 7.5, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control PS4", precio: 12.5, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control PS5", precio: 73, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Estación de carga PS5", precio: 12.3, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Estación para PS5", precio: 32, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control gamer con sensor", precio: 15, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Game Stick", precio: 19, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Game TV Stick (caja roja)", precio: 31, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },

  { nombre: "Proyector HY300", precio: 42, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Proyector M300 Max", precio: 60, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX8", precio: 10.6, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX8 x2", precio: 15, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX21", precio: 23, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX27", precio: 31, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono DJI Mini", precio: 155, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX29", precio: 27, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX23", precio: 26, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/default.jpg" }
];

/* Helpers */
window.fallbackImagen = img =>
  img && String(img).trim() !== "" ? img : "./img/Productos/default.jpg";

window.escapeHtml = str =>
  String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[s]));
