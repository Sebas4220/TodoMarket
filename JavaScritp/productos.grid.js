/* ============================================
   productos.grid.js
   Grid principal + sliders + categorías
   ============================================ */

/* -------------------------
   Categorías únicas
   ------------------------- */
window.getCategorias = function () {
  const cats = new Set();
  PRODUCTOS.forEach(p => {
    if (p.categoria && String(p.categoria).trim() !== "") {
      cats.add(p.categoria);
    }
  });
  return Array.from(cats);
};

window.slugify = function (text) {
  return String(text)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

/* -------------------------
   Abrir vista de categoría
   ------------------------- */
window.abrirCategoria = function (categoria) {
  const cat = decodeURIComponent(categoria);
  window.location.href = `category.html?cat=${encodeURIComponent(cat)}`;
};

/* -------------------------
   Render grid principal / categoría
   ------------------------- */
window.renderGrid = function (lista) {
  const cont = document.getElementById("contenedor-productos");
  if (!cont) return;

  cont.innerHTML = "";

  if (!lista || !lista.length) {
    cont.innerHTML =
      `<div class="col-12"><p class="text-muted">No se encontraron productos.</p></div>`;
    return;
  }

  lista.forEach(p => {
    const index = PRODUCTOS.indexOf(p);
    const precioBase = p.oferta !== "" && p.oferta !== null ? p.oferta : p.precio;
    const precioActual = convertPrice(precioBase);
    const precioAntiguo = p.oferta && p.oferta !== "" ? convertPrice(p.precio) : "";
    const img = fallbackImagen(p.imagen);

    cont.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="card h-100">
          <img src="${escapeHtml(img)}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-1">
              ${p.oferta && p.oferta !== "" ? `<div class="badge-offer">Oferta</div>` : `<div></div>`}
            </div>
            <h6 class="card-title">${escapeHtml(p.nombre)}</h6>
            <div class="product-rating">
              <div class="stars">★★★★★</div>
              <div class="text-muted">(${p.reviews || Math.floor(Math.random() * 200 + 1)})</div>
            </div>
            <div class="price-row">
              <div class="price-current">${precioActual}</div>
              ${precioAntiguo ? `<div class="price-old">${precioAntiguo}</div>` : ""}
            </div>
            <div class="product-meta">Tiempo de entrega • 90 minutos</div>
            
            <div class="acciones-producto" id="acciones-${index}">
              <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  PRODUCTOS.forEach((_, i) => actualizarBotonProducto(i));
};

/* -------------------------
   Slider por categoría
   ------------------------- */
window.renderSliderCategoria = function (idContenedor, categoria) {
  const cont = document.getElementById(idContenedor);
  if (!cont) return;

  cont.innerHTML = "";
  const lista = PRODUCTOS.filter(p => p.categoria === categoria);

  lista.forEach(p => {
    const globalIndex = PRODUCTOS.indexOf(p);
    const precioBase = p.oferta !== "" && p.oferta !== null ? p.oferta : p.precio;
    const precioActual = convertPrice(precioBase);
    const precioAntiguo = p.oferta && p.oferta !== "" ? convertPrice(p.precio) : "";
    const img = fallbackImagen(p.imagen);

    cont.innerHTML += `
      <div class="card h-100 card-slider">
        <img src="${escapeHtml(img)}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-1">
            ${p.oferta && p.oferta !== "" ? `<div class="badge-offer">Oferta</div>` : `<div></div>`}
          </div>
          <h6 class="card-title">${escapeHtml(p.nombre)}</h6>
          <div class="product-rating">
            <div class="stars">★★★★★</div>
            <div class="text-muted">(${p.reviews || Math.floor(Math.random() * 200 + 1)})</div>
          </div>
          <div class="price-row">
            <div class="price-current">${precioActual}</div>
            ${precioAntiguo ? `<div class="price-old">${precioAntiguo}</div>` : ""}
          </div>
          <div class="product-meta">Tiempo de entrega • 90 minutos</div>
          
          <div class="acciones-producto" id="acciones-${globalIndex}-slider">
            <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${globalIndex})">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
  });

  PRODUCTOS.forEach((_, i) => actualizarBotonProducto(i));
};

/* -------------------------
   Slider de ofertas
   ------------------------- */
window.renderSliderOfertas = function () {
  const cont = document.getElementById("slider-ofertas");
  if (!cont) return;

  cont.innerHTML = "";
  const lista = PRODUCTOS.filter(p => p.oferta !== "" && p.oferta !== null);

  lista.forEach(p => {
    const globalIndex = PRODUCTOS.indexOf(p);
    const precio = convertPrice(p.oferta);
    const precioAntiguo = convertPrice(p.precio);
    const img = fallbackImagen(p.imagen);

    cont.innerHTML += `
      <div class="card h-100 card-slider">
        <img src="${escapeHtml(img)}" class="card-img-top" alt="${escapeHtml(p.nombre)}">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start mb-1">
            <div class="badge-offer">Oferta</div>
          </div>
          <h6 class="card-title">${escapeHtml(p.nombre)}</h6>
          <div class="product-rating">
            <div class="stars">★★★★★</div>
            <div class="text-muted">(${p.reviews || Math.floor(Math.random() * 200 + 1)})</div>
          </div>
          <div class="price-row">
            <div class="price-current">${precio}</div>
            <div class="price-old">${precioAntiguo}</div>
          </div>
          <div class="product-meta">Tiempo de entrega • 90 minutos</div>
          
          <div class="acciones-producto" id="acciones-${globalIndex}-oferta">
            <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${globalIndex})">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;
  });

  PRODUCTOS.forEach((_, i) => actualizarBotonProducto(i));
};

/* -------------------------
   Mover slider
   ------------------------- */
window.moverSlider = function (id, dir) {
  const cont = document.getElementById(id);
  if (!cont) return;
  cont.scrollLeft += dir * 220;
};

/* -------------------------
   Filtro por búsqueda
   ------------------------- */
window.filtrarPorBusqueda = function (lista, query) {
  if (!query || String(query).trim() === "") return lista;
  const q = String(query).trim().toLowerCase();
  return lista.filter(
    p =>
      p.nombre.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q)
  );
};

/* -------------------------
   Render según página + búsqueda
   ------------------------- */
window.renderAll = function () {
  const isCategoryPage = !!document.getElementById("categoria-titulo");
  const q = STATE.busqueda.query;

  /* -------------------------
     VISTA category.html
     ------------------------- */
  if (isCategoryPage) {
    const catParam = getQueryParam("cat") || "";
    const decodedCat = decodeURIComponent(catParam);
    const titulo = document.getElementById("categoria-titulo");

    if (decodedCat === "Ofertas") {
      let lista = PRODUCTOS.filter(p => p.oferta !== "" && p.oferta !== null);
      lista = filtrarPorBusqueda(lista, q);
      if (titulo) titulo.textContent = "Ofertas" + (q ? ` • "${q}"` : "");
      renderGrid(lista);
    } else {
      let lista = PRODUCTOS.filter(p => p.categoria === decodedCat);
      lista = filtrarPorBusqueda(lista, q);
      if (titulo) titulo.textContent = decodedCat + (q ? ` • "${q}"` : "");
      renderGrid(lista);
    }

    return; // No renderizar sliders en category.html
  }

  /* -------------------------
     VISTA PRINCIPAL (HOME)
     ------------------------- */
  let lista = filtrarPorBusqueda(PRODUCTOS, q);
  renderGrid(lista);

  const contSliders = document.getElementById("contenedor-sliders");
  if (contSliders) {
    contSliders.innerHTML = "";

    const categorias = getCategorias();

    categorias.forEach(cat => {
      if (cat.toLowerCase() === "ofertas") return;

      const slug = slugify(cat);

      const sectionHTML = `
        <section class="mt-5" id="section-${slug}">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h3 class="m-0">${escapeHtml(cat)}</h3>
            <button class="btn btn-link p-0" onclick="abrirCategoria('${encodeURIComponent(cat)}')">
              Ver todo
            </button>
          </div>

          <div class="slider-wrapper position-relative">
            <button class="slider-btn prev" onclick="moverSlider('slider-${slug}', -1)">‹</button>
            <div id="slider-${slug}" class="slider-container"></div>
            <button class="slider-btn next" onclick="moverSlider('slider-${slug}', 1)">›</button>
          </div>
        </section>
      `;

      contSliders.insertAdjacentHTML("beforeend", sectionHTML);

      renderSliderCategoria(`slider-${slug}`, cat);
    });
  }

  renderSliderOfertas();
};
