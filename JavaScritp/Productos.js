/* productos.js - Búsqueda global en vivo + resto de funcionalidades */

/* ============================
   LISTA DE PRODUCTOS
   ============================ */
window.productos = [
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

/* ============================
   Estado y persistencia
   ============================ */
let carrito = JSON.parse(localStorage.getItem('mi_carrito_v1') || '[]');
let moneda = localStorage.getItem('mi_moneda_v1') || 'USD';
let tasaVES = 40;
let estadoBusqueda = { query: '', activeIndex: -1, results: [] };

/* ============================
   Utilidades
   ============================ */
function guardarEstado() {
  localStorage.setItem('mi_carrito_v1', JSON.stringify(carrito));
  localStorage.setItem('mi_moneda_v1', moneda);
}
function fallbackImagen(img) { return img && String(img).trim() !== "" ? img : "./img/Productos/default.jpg"; }
function formatearNumero(n) { return Number(n).toFixed(2); }
function convertirPrecio(valor) {
  const v = Number(valor) || 0;
  return moneda === "USD" ? `$${formatearNumero(v)}` : `${formatearNumero(v * tasaVES)} Bs`;
}
function debounce(fn, wait) { let t; return function(...a){ clearTimeout(t); t = setTimeout(()=>fn.apply(this,a), wait); }; }

/* ============================
   Búsqueda global (devuelve hasta N resultados)
   ============================ */
function buscarProductosGlobal(query, limit = 8) {
  if (!query || String(query).trim() === '') return [];
  const q = String(query).trim().toLowerCase();
  // Buscamos por nombre y categoría; priorizamos nombre
  const porNombre = window.productos.filter(p => p.nombre.toLowerCase().includes(q));
  const porCategoria = window.productos.filter(p => p.categoria.toLowerCase().includes(q) && !porNombre.includes(p));
  const resultados = [...porNombre, ...porCategoria];
  return resultados.slice(0, limit);
}

/* ============================
   Render del dropdown de búsqueda
   ============================ */
function renderSearchDropdown() {
  const cont = document.getElementById('search-results');
  if (!cont) return;
  const q = estadoBusqueda.query.trim();
  if (!q) {
    cont.hidden = true;
    estadoBusqueda.results = [];
    estadoBusqueda.activeIndex = -1;
    return;
  }

  const results = buscarProductosGlobal(q, 10);
  estadoBusqueda.results = results;
  estadoBusqueda.activeIndex = -1;

  if (!results.length) {
    cont.innerHTML = `<div class="search-empty">No se encontraron productos para "<strong>${escapeHtml(q)}</strong>"</div>`;
    cont.hidden = false;
    return;
  }

  cont.innerHTML = results.map((p, idx) => {
    const img = fallbackImagen(p.imagen);
    const precio = convertirPrecio(p.oferta !== "" && p.oferta !== null ? p.oferta : p.precio);
    return `
      <div class="search-item" role="option" data-idx="${idx}" tabindex="-1">
        <img src="${img}" alt="${escapeHtml(p.nombre)}">
        <div class="meta">
          <div class="name">${escapeHtml(p.nombre)}</div>
          <div class="cat">${escapeHtml(p.categoria)}</div>
          <div class="price">${precio}</div>
        </div>
        <div class="actions">
          <button class="btn btn-sm btn-outline-primary" onclick="event.stopPropagation(); agregarAlCarritoFromSearch(${window.productos.indexOf(p)});">Agregar</button>
          <button class="btn btn-sm btn-outline-secondary" onclick="event.stopPropagation(); abrirProducto(${window.productos.indexOf(p)});">Ver</button>
        </div>
      </div>
    `;
  }).join('');

  cont.hidden = false;

  // Añadir listeners para click y keyboard navigation
  Array.from(cont.querySelectorAll('.search-item')).forEach(el => {
    el.addEventListener('click', (e) => {
      const idx = Number(el.getAttribute('data-idx'));
      const prod = estadoBusqueda.results[idx];
      if (prod) abrirProducto(window.productos.indexOf(prod));
    });
  });
}

/* Escape simple para inyectar texto seguro en HTML */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

/* ============================
   Acciones rápidas desde el dropdown
   ============================ */
function agregarAlCarritoFromSearch(index) {
  agregarAlCarrito(index);
  // Mantener dropdown abierto y actualizar contador/estado
  renderSearchDropdown();
}

/* Abrir producto: por ahora navegamos a category.html y hacemos scroll al producto (simple) */
function abrirProducto(index) {
  const p = window.productos[index];
  if (!p) return;
  // Abrir la categoría y pasar query con nombre para resaltar si quieres
  window.location.href = `category.html?cat=${encodeURIComponent(p.categoria)}&q=${encodeURIComponent(p.nombre)}`;
}

/* ============================
   Integración teclado para el dropdown
   ============================ */
function handleSearchKeydown(e) {
  const cont = document.getElementById('search-results');
  if (!cont || cont.hidden) return;
  const items = Array.from(cont.querySelectorAll('.search-item'));
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    estadoBusqueda.activeIndex = Math.min(estadoBusqueda.activeIndex + 1, items.length - 1);
    updateActiveSearchItem(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    estadoBusqueda.activeIndex = Math.max(estadoBusqueda.activeIndex - 1, 0);
    updateActiveSearchItem(items);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    const idx = estadoBusqueda.activeIndex >= 0 ? estadoBusqueda.activeIndex : 0;
    const prod = estadoBusqueda.results[idx];
    if (prod) abrirProducto(window.productos.indexOf(prod));
  } else if (e.key === 'Escape') {
    cont.hidden = true;
  }
}

function updateActiveSearchItem(items) {
  items.forEach((it, i) => it.classList.toggle('active', i === estadoBusqueda.activeIndex));
  const active = items[estadoBusqueda.activeIndex];
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ============================
   Resto de funciones (carrito, sliders, render grid)
   ============================ */
/* --- render grid (igual que antes) --- */
function renderGrid(listaProductos) {
  const cont = document.getElementById("contenedor-productos");
  if (!cont) return;
  cont.innerHTML = "";
  if (!listaProductos || listaProductos.length === 0) {
    cont.innerHTML = `<div class="col-12"><p class="text-muted">No se encontraron productos.</p></div>`;
    return;
  }
  listaProductos.forEach((p) => {
    const index = window.productos.indexOf(p);
    const precioBase = p.oferta !== "" && p.oferta !== null ? p.oferta : p.precio;
    const precioActual = convertirPrecio(precioBase);
    const precioAntiguo = p.oferta && p.oferta !== "" ? convertirPrecio(p.precio) : '';
    const img = fallbackImagen(p.imagen);
    cont.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="card h-100">
          <img src="${img}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-1">
              ${p.oferta && p.oferta !== "" ? `<div class="badge-offer">Oferta</div>` : `<div></div>`}
            </div>
            <h6 class="card-title">${escapeHtml(p.nombre)}</h6>
            <div class="product-rating">
              <div class="stars">★★★★★</div>
              <div class="text-muted">(${p.reviews || Math.floor(Math.random()*200+1)})</div>
            </div>
            <div class="price-row">
              <div class="price-current">${precioActual}</div>
              ${precioAntiguo ? `<div class="price-old">${precioAntiguo}</div>` : ''}
            </div>
            <div class="product-meta">Tiempo de entrega • 90 minutos</div>
            <div class="product-meta">Envío Nacionales • Entrega en 2-4 días</div>
            <div class="acciones-producto" id="acciones-${index}">
              <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${index})">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  window.productos.forEach((_, i) => actualizarBotonProducto(i));
}

/* --- sliders dinámicos (mantén tus funciones previas) --- */
function obtenerCategorias() {
  const cats = new Set();
  window.productos.forEach(p => { if (p.categoria && String(p.categoria).trim() !== "") cats.add(p.categoria); });
  return Array.from(cats);
}
function slugify(text) { return String(text).toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''); }
function renderSliderCategoria(idContenedor, categoria) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;
  cont.innerHTML = "";
  const lista = window.productos.filter(p => p.categoria === categoria);
  lista.forEach((p) => {
    const globalIndex = window.productos.indexOf(p);
    const precioBase = p.oferta !== "" && p.oferta !== null ? p.oferta : p.precio;
    const precioActual = convertirPrecio(precioBase);
    const precioAntiguo = p.oferta && p.oferta !== "" ? convertirPrecio(p.precio) : '';
    const img = fallbackImagen(p.imagen);
    cont.innerHTML += `
      <div class="card card-slider">
        <img src="${img}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
        <div class="card-body text-center p-2">
          ${p.oferta && p.oferta !== "" ? `<div class="badge-offer mb-1">Oferta</div>` : ''}
          <h6 class="mb-1" style="font-size:14px; height:2.4em; overflow:hidden;">${escapeHtml(p.nombre)}</h6>
          <div class="price-row" style="justify-content:center;">
            <div class="price-current">${precioActual}</div>
            ${precioAntiguo ? `<div class="price-old">${precioAntiguo}</div>` : ''}
          </div>
          <div id="acciones-${globalIndex}-slider" class="acciones-producto">
            <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${globalIndex})">Agregar</button>
          </div>
        </div>
      </div>
    `;
  });
  window.productos.forEach((_, i) => actualizarBotonProducto(i));
}
function renderAllCategorySliders() {
  const cont = document.getElementById('contenedor-sliders');
  if (!cont) return;
  cont.innerHTML = '';
  const categorias = obtenerCategorias();
  categorias.forEach(cat => {
    if (cat.toLowerCase() === 'ofertas') return;
    const slug = slugify(cat);
    const sectionHTML = `
      <section class="mt-5" id="section-${slug}">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h3 class="m-0">${escapeHtml(cat)}</h3>
          <button class="btn btn-link p-0" onclick="abrirCategoria('${encodeURIComponent(cat)}')">Ver todo</button>
        </div>
        <div class="slider-wrapper position-relative">
          <button class="slider-btn prev" onclick="moverSlider('slider-${slug}', -1)">‹</button>
          <div id="slider-${slug}" class="slider-container"></div>
          <button class="slider-btn next" onclick="moverSlider('slider-${slug}', 1)">›</button>
        </div>
      </section>
    `;
    cont.insertAdjacentHTML('beforeend', sectionHTML);
    renderSliderCategoria(`slider-${slug}`, cat);
  });
}
function renderSliderOfertas() {
  const cont = document.getElementById("slider-ofertas");
  if (!cont) return;
  cont.innerHTML = "";
  const lista = window.productos.filter(p => p.oferta !== "" && p.oferta !== null);
  lista.forEach((p) => {
    const globalIndex = window.productos.indexOf(p);
    const precio = convertirPrecio(p.oferta);
    const precioAntiguo = convertirPrecio(p.precio);
    const img = fallbackImagen(p.imagen);
    cont.innerHTML += `
      <div class="card card-slider">
        <img src="${img}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
        <div class="card-body text-center p-2">
          <div class="badge-offer mb-1">Oferta</div>
          <h6 class="mb-1" style="font-size:14px; height:2.4em; overflow:hidden;">${escapeHtml(p.nombre)}</h6>
          <div class="price-row" style="justify-content:center;">
            <div class="price-current text-danger">${precio}</div>
            <div class="price-old">${precioAntiguo}</div>
          </div>
          <div id="acciones-${globalIndex}-oferta" class="acciones-producto">
            <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${globalIndex})">Agregar</button>
          </div>
        </div>
      </div>
    `;
  });
  window.productos.forEach((_, i) => actualizarBotonProducto(i));
}
function moverSlider(id, dir) {
  const cont = document.getElementById(id);
  if (!cont) return;
  cont.scrollLeft += dir * 220;
}

/* ============================
   Carrito y controles (igual que antes)
   ============================ */
function agregarAlCarrito(index) {
  const prod = window.productos[index];
  if (!prod) return;
  const existe = carrito.find(p => p.nombre === prod.nombre);
  if (existe) existe.cantidad++; else carrito.push({ ...prod, cantidad: 1 });
  guardarEstado(); actualizarCarrito(); actualizarBotonProducto(index);
}
function actualizarBotonProducto(index) {
  const ids = [`acciones-${index}`, `acciones-${index}-slider`, `acciones-${index}-oferta`];
  const prod = window.productos[index];
  const item = carrito.find(p => p.nombre === prod.nombre);
  ids.forEach(id => {
    const cont = document.getElementById(id);
    if (!cont) return;
    if (!item) { cont.innerHTML = `<button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${index})">Agregar</button>`; return; }
    cont.innerHTML = `
      <div class="d-flex justify-content-center align-items-center gap-2">
        <button class="btn btn-outline-secondary btn-sm" onclick="decrementar(${index})">-</button>
        <span class="fw-bold" id="cantidad-${index}">${item.cantidad}</span>
        <button class="btn btn-outline-secondary btn-sm" onclick="incrementar(${index})">+</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">🗑</button>
      </div>
    `;
  });
}
function incrementar(index) { const prod = window.productos[index]; const item = carrito.find(p => p.nombre === prod.nombre); if (!item) return; item.cantidad++; guardarEstado(); actualizarCarrito(); actualizarBotonProducto(index); }
function decrementar(index) { const prod = window.productos[index]; const item = carrito.find(p => p.nombre === prod.nombre); if (!item) return; if (item.cantidad > 1) { item.cantidad--; guardarEstado(); actualizarCarrito(); actualizarBotonProducto(index); } else { item.cantidad = 1; guardarEstado(); actualizarCarrito(); actualizarBotonProducto(index); } }
function eliminarProducto(index) { const prod = window.productos[index]; carrito = carrito.filter(p => p.nombre !== prod.nombre); guardarEstado(); actualizarCarrito(); actualizarBotonProducto(index); }
function actualizarCarrito() {
  const cont = document.getElementById("carrito-items"); const totalSpan = document.getElementById("carrito-total"); const countBadge = document.getElementById("carrito-count");
  if (!cont || !totalSpan || !countBadge) return;
  cont.innerHTML = ""; let total = 0; let totalUnidades = 0;
  carrito.forEach((p) => {
    const precioUnit = p.oferta !== "" && p.oferta !== null ? Number(p.oferta) : Number(p.precio);
    const subtotal = precioUnit * p.cantidad; total += subtotal; totalUnidades += p.cantidad;
    const globalIndex = window.productos.findIndex(prod => prod.nombre === p.nombre && prod.categoria === p.categoria && Number(prod.precio) === Number(p.precio));
    cont.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div style="max-width:60%;">
          <div class="fw-bold" style="font-size:14px;">${escapeHtml(p.nombre)}</div>
          <small class="text-muted">x${p.cantidad} • ${convertirPrecio(precioUnit)} c/u</small>
        </div>
        <div class="text-end" style="min-width:140px;">
          <div>${convertirPrecio(subtotal)}</div>
          <div class="mt-1 d-flex justify-content-end gap-1">
            <button class="btn btn-sm btn-outline-secondary" onclick="decrementar(${globalIndex})">-</button>
            <button class="btn btn-sm btn-outline-secondary" onclick="incrementar(${globalIndex})">+</button>
            <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${globalIndex})">🗑 Eliminar</button>
          </div>
        </div>
      </div>
    `;
  });
  totalSpan.textContent = convertirPrecio(total); countBadge.textContent = totalUnidades;
  window.productos.forEach((_, i) => actualizarBotonProducto(i));
}
function toggleCarrito() { const popup = document.getElementById("carrito-popup"); if (!popup) return; popup.classList.toggle("active"); popup.setAttribute("aria-hidden", !popup.classList.contains("active")); }
function checkout() { if (carrito.length === 0) { alert("El carrito está vacío."); return; } const resumen = carrito.map(p => `${p.nombre} x${p.cantidad}`).join("\n"); alert(`Procesando compra:\n\n${resumen}\n\nTotal: ${document.getElementById("carrito-total").textContent}`); carrito = []; guardarEstado(); actualizarCarrito(); toggleCarrito(); }

/* ============================
   Navegación de categoría
   ============================ */
function abrirCategoria(categoria) {
  const cat = decodeURIComponent(categoria);
  if (cat === 'Ofertas') window.location.href = `category.html?cat=Ofertas`; else window.location.href = `category.html?cat=${encodeURIComponent(cat)}`;
}
function obtenerQueryParam(name) { const params = new URLSearchParams(window.location.search); return params.get(name); }

/* ============================
   Filtrado y render según página
   ============================ */
function aplicarFiltrosYRender() {
  const isCategoryPage = !!document.getElementById('categoria-titulo');
  const q = estadoBusqueda.query;
  if (isCategoryPage) {
    const cat = obtenerQueryParam('cat') || ''; const decodedCat = decodeURIComponent(cat);
    if (decodedCat === 'Ofertas') {
      let lista = window.productos.filter(p => p.oferta !== "" && p.oferta !== null);
      lista = filtrarPorBusqueda(lista, q);
      document.getElementById('categoria-titulo') && (document.getElementById('categoria-titulo').textContent = 'Ofertas' + (q ? ` • "${q}"` : ''));
      renderGrid(lista);
    } else {
      let lista = window.productos.filter(p => p.categoria === decodedCat);
      lista = filtrarPorBusqueda(lista, q);
      document.getElementById('categoria-titulo') && (document.getElementById('categoria-titulo').textContent = decodedCat + (q ? ` • "${q}"` : ''));
      renderGrid(lista);
    }
  } else {
    let lista = filtrarPorBusqueda(window.productos, q);
    renderGrid(lista);
    renderAllCategorySliders();
    renderSliderOfertas();
  }
}
function filtrarPorBusqueda(lista, query) {
  if (!query || String(query).trim() === '') return lista;
  const q = String(query).trim().toLowerCase();
  return lista.filter(p => p.nombre.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q));
}

/* ============================
   Inicialización: buscador, eventos y carga inicial
   ============================ */
function inicializarBuscador() {
  const inputSearch = document.getElementById('search-input');
  const btnClear = document.getElementById('search-clear');
  const debouncedHandler = debounce((val) => {
    estadoBusqueda.query = val;
    renderSearchDropdown();
    aplicarFiltrosYRender();
  }, 220);

  if (inputSearch) {
    // precargar q desde URL si existe
    const qUrl = obtenerQueryParam('q');
    if (qUrl) { inputSearch.value = qUrl; estadoBusqueda.query = qUrl; }
    inputSearch.addEventListener('input', (e) => debouncedHandler(e.target.value));
    inputSearch.addEventListener('keydown', handleSearchKeydown);
    inputSearch.addEventListener('focus', () => { if (estadoBusqueda.query) renderSearchDropdown(); });
    inputSearch.addEventListener('blur', () => setTimeout(()=>{ const cont = document.getElementById('search-results'); cont && (cont.hidden = true); }, 180));
  }
  if (btnClear) btnClear.addEventListener('click', () => { estadoBusqueda.query = ''; if (inputSearch) inputSearch.value = ''; renderSearchDropdown(); aplicarFiltrosYRender(); inputSearch && inputSearch.focus(); });
}

/* ============================
   Inicialización general
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  inicializarBuscador();
  const select = document.getElementById("select-moneda");
  if (select) { select.value = moneda; select.addEventListener("change", (e) => { moneda = e.target.value; guardarEstado(); aplicarFiltrosYRender(); actualizarCarrito(); }); }

  const isCategoryPage = !!document.getElementById('categoria-titulo');
  if (isCategoryPage) {
    const cat = obtenerQueryParam('cat') || ''; const decodedCat = decodeURIComponent(cat);
    const titulo = document.getElementById('categoria-titulo');
    if (decodedCat === 'Ofertas') { titulo.textContent = 'Ofertas'; estadoBusqueda.query = document.getElementById('search-input') ? document.getElementById('search-input').value : ''; aplicarFiltrosYRender(); }
    else { titulo.textContent = decodedCat; estadoBusqueda.query = document.getElementById('search-input') ? document.getElementById('search-input').value : ''; aplicarFiltrosYRender(); }
  } else {
    estadoBusqueda.query = document.getElementById('search-input') ? document.getElementById('search-input').value : '';
    aplicarFiltrosYRender();
  }

  actualizarCarrito();
});
