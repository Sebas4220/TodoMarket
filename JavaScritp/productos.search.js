/* ============================================
   productos.search.js
   Buscador global (desktop + móvil) + dropdown
   ============================================ */

/* --------------------------------------------
   Buscar productos por nombre o categoría
   -------------------------------------------- */
window.buscarProductos = function (query, limit = 10) {
  if (!query || String(query).trim() === "") return [];

  const q = query.trim().toLowerCase();

  const porNombre = PRODUCTOS.filter(p =>
    p.nombre.toLowerCase().includes(q)
  );

  const porCategoria = PRODUCTOS.filter(p =>
    p.categoria.toLowerCase().includes(q) && !porNombre.includes(p)
  );

  return [...porNombre, ...porCategoria].slice(0, limit);
};

/* --------------------------------------------
   Render dinámico del dropdown (desktop/móvil)
   -------------------------------------------- */
window.renderSearchDropdown = function () {
  const inputDesktop = document.getElementById("search-input");
  const inputMobile = document.getElementById("search-input-mobile");

  const contDesktop = document.getElementById("search-results");
  const contMobile = document.getElementById("search-results-mobile");

  const activo =
    document.activeElement === inputMobile ? contMobile : contDesktop;

  if (!activo) return;

  const q = STATE.busqueda.query.trim();
  if (!q) {
    activo.hidden = true;
    STATE.busqueda.results = [];
    STATE.busqueda.activeIndex = -1;
    return;
  }

  const results = buscarProductos(q, 10);
  STATE.busqueda.results = results;
  STATE.busqueda.activeIndex = -1;

  if (!results.length) {
    activo.innerHTML = `
      <div class="search-empty">
        No se encontraron productos para "<strong>${escapeHtml(q)}</strong>"
      </div>`;
    activo.hidden = false;
    return;
  }

  activo.innerHTML = results
    .map((p, idx) => {
      const img = fallbackImagen(p.imagen);
      const precio = convertPrice(p.oferta || p.precio);
      const indexGlobal = PRODUCTOS.indexOf(p);

      return `
        <div class="search-item" data-idx="${idx}" tabindex="-1">
          <img src="${escapeHtml(img)}" alt="${escapeHtml(p.nombre)}">
          <div class="meta">
            <div class="name">${escapeHtml(p.nombre)}</div>
            <div class="cat">${escapeHtml(p.categoria)}</div>
            <div class="price">${precio}</div>
          </div>
          <div class="actions">
            <button class="btn btn-sm btn-outline-primary" style="background-color: var(--accent); color: var(--background); border:none;"
              onclick="event.stopPropagation(); agregarAlCarrito(${indexGlobal});">
              Agregar al carrito
            </button>
            <button class="btn btn-sm btn-outline-secondary"
              onclick="event.stopPropagation(); abrirProducto(${indexGlobal});">
              Ver
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  activo.hidden = false;

  // Click en cada item
  Array.from(activo.querySelectorAll(".search-item")).forEach(el => {
    el.addEventListener("click", () => {
      const idx = Number(el.dataset.idx);
      const prod = STATE.busqueda.results[idx];
      if (prod) abrirProducto(PRODUCTOS.indexOf(prod));
    });
  });
};

/* --------------------------------------------
   Navegación con teclado
   -------------------------------------------- */
window.handleSearchKeydown = function (e) {
  const contDesktop = document.getElementById("search-results");
  const contMobile = document.getElementById("search-results-mobile");

  const activo =
    document.activeElement.id === "search-input-mobile"
      ? contMobile
      : contDesktop;

  if (!activo || activo.hidden) return;

  const items = Array.from(activo.querySelectorAll(".search-item"));
  if (!items.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    STATE.busqueda.activeIndex = Math.min(
      STATE.busqueda.activeIndex + 1,
      items.length - 1
    );
    updateActiveSearchItem(items);
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    STATE.busqueda.activeIndex = Math.max(
      STATE.busqueda.activeIndex - 1,
      0
    );
    updateActiveSearchItem(items);
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const idx =
      STATE.busqueda.activeIndex >= 0
        ? STATE.busqueda.activeIndex
        : 0;

    const prod = STATE.busqueda.results[idx];
    if (prod) abrirProducto(PRODUCTOS.indexOf(prod));
  }

  if (e.key === "Escape") {
    activo.hidden = true;
  }
};

/* --------------------------------------------
   Resaltar item activo
   -------------------------------------------- */
window.updateActiveSearchItem = function (items) {
  items.forEach((it, i) =>
    it.classList.toggle("active", i === STATE.busqueda.activeIndex)
  );

  const active = items[STATE.busqueda.activeIndex];
  if (active) active.scrollIntoView({ block: "nearest", behavior: "smooth" });
};

/* --------------------------------------------
   Inicialización del buscador (desktop + móvil)
   -------------------------------------------- */
window.initSearch = function () {
  const inputDesktop = document.getElementById("search-input");
  const inputMobile = document.getElementById("search-input-mobile");

  const conectar = input => {
    if (!input) return;

    input.addEventListener(
      "input",
      debounce(val => {
        STATE.busqueda.query = val.target.value;
        renderSearchDropdown();
        if (window.renderAll) window.renderAll();
      }, 200)
    );

    input.addEventListener("keydown", handleSearchKeydown);

    input.addEventListener("focus", () => {
      if (STATE.busqueda.query) renderSearchDropdown();
    });

    input.addEventListener("blur", () => {
      setTimeout(() => {
        const contDesktop = document.getElementById("search-results");
        const contMobile = document.getElementById("search-results-mobile");
        contDesktop && (contDesktop.hidden = true);
        contMobile && (contMobile.hidden = true);
      }, 180);
    });
  };

  conectar(inputDesktop);
  conectar(inputMobile);
};

/* --------------------------------------------
   Abrir producto desde buscador
   -------------------------------------------- */
window.abrirProducto = function (index) {
  const p = PRODUCTOS[index];
  if (!p) return;
  window.location.href =
    `category.html?cat=${encodeURIComponent(p.categoria)}&q=${encodeURIComponent(p.nombre)}`;
};
