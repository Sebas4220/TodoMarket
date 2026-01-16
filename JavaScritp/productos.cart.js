/* ============================================
   productos.cart.js
   Carrito: lógica + UI + badge
   ============================================ */

/* -------------------------
   Agregar al carrito
   ------------------------- */
window.agregarAlCarrito = function (index) {
  const prod = PRODUCTOS[index];
  if (!prod) return;

  const existe = STATE.carrito.find(p => p.nombre === prod.nombre);
  if (existe) {
    existe.cantidad++;
  } else {
    STATE.carrito.push({ ...prod, cantidad: 1 });
  }

  saveState();
  actualizarCarrito();
  actualizarBotonProducto(index);
};

/* -------------------------
   Actualizar botones de producto
   (grid, slider, ofertas)
   ------------------------- */
window.actualizarBotonProducto = function (index) {
  const ids = [
    `acciones-${index}`,
    `acciones-${index}-slider`,
    `acciones-${index}-oferta`
  ];

  const prod = PRODUCTOS[index];
  const item = STATE.carrito.find(p => p.nombre === prod.nombre);

  ids.forEach(id => {
    const cont = document.getElementById(id);
    if (!cont) return;

    if (!item) {
      cont.innerHTML = `
        <button class="btn btn-primary btn-sm" onclick="agregarAlCarrito(${index})">
          Agregar
        </button>
      `;
      return;
    }

    cont.innerHTML = `
      <div class="d-flex justify-content-center align-items-center gap-2">
        <button class="btn btn-outline-secondary btn-sm" onclick="decrementar(${index})">-</button>
        <span class="fw-bold" id="cantidad-${index}">${item.cantidad}</span>
        <button class="btn btn-outline-secondary btn-sm" onclick="incrementar(${index})">+</button>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">
          <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    `;
  });
};

/* -------------------------
   Incrementar / Decrementar / Eliminar
   ------------------------- */
window.incrementar = function (index) {
  const prod = PRODUCTOS[index];
  const item = STATE.carrito.find(p => p.nombre === prod.nombre);
  if (!item) return;

  item.cantidad++;
  saveState();
  actualizarCarrito();
  actualizarBotonProducto(index);
};

window.decrementar = function (index) {
  const prod = PRODUCTOS[index];
  const item = STATE.carrito.find(p => p.nombre === prod.nombre);
  if (!item) return;

  if (item.cantidad > 1) {
    item.cantidad--;
  } else {
    item.cantidad = 1;
  }

  saveState();
  actualizarCarrito();
  actualizarBotonProducto(index);
};

window.eliminarProducto = function (index) {
  const prod = PRODUCTOS[index];
  STATE.carrito = STATE.carrito.filter(p => p.nombre !== prod.nombre);
  saveState();
  actualizarCarrito();
  actualizarBotonProducto(index);
};

/* -------------------------
   Actualizar carrito (vista)
   ------------------------- */
window.actualizarCarrito = function () {
  const cont = document.getElementById("carrito-items");
  const totalSpan = document.getElementById("carrito-total");
  const countBadge = document.getElementById("carrito-count");

  if (!cont || !totalSpan || !countBadge) return;

  cont.innerHTML = "";
  let total = 0;
  let totalUnidades = 0;

  STATE.carrito.forEach(p => {
    const precioUnit =
      p.oferta !== "" && p.oferta !== null ? Number(p.oferta) : Number(p.precio);
    const subtotal = precioUnit * p.cantidad;
    total += subtotal;
    totalUnidades += p.cantidad;

    const globalIndex = PRODUCTOS.findIndex(
      prod =>
        prod.nombre === p.nombre &&
        prod.categoria === p.categoria &&
        Number(prod.precio) === Number(p.precio)
    );

    const img = fallbackImagen(p.imagen);

    cont.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="d-flex align-items-center" style="gap:10px; max-width:60%;">
          <img src="${escapeHtml(img)}" alt="${escapeHtml(
      p.nombre
    )}" style="width:64px; height:64px; object-fit:cover; border-radius:6px; box-shadow:0 4px 10px rgba(0,0,0,0.06);">
          <div style="min-width:0;">
            <div class="fw-bold" style="font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${escapeHtml(p.nombre)}
            </div>
            <small class="text-muted">
              x${p.cantidad} • ${convertPrice(precioUnit)} c/u
            </small>
          </div>
        </div>

        <div class="text-end" style="min-width:160px;">
          <div>${convertPrice(subtotal)}</div>
          <div class="mt-1 d-flex justify-content-end gap-1">
            <button class="btn btn-sm btn-outline-secondary" onclick="decrementar(${globalIndex})">-</button>
            <small class="text-muted p-1">${p.cantidad}</small>
            <button class="btn btn-sm btn-outline-secondary" onclick="incrementar(${globalIndex})">+</button>
            <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${globalIndex})">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  totalSpan.textContent = convertPrice(total);
  countBadge.textContent = totalUnidades;

  PRODUCTOS.forEach((_, i) => actualizarBotonProducto(i));
};

/* -------------------------
   Toggle carrito popup
   ------------------------- */
window.toggleCarrito = function () {
  const popup = document.getElementById("carrito-popup");
  if (!popup) return;
  popup.classList.toggle("active");
  popup.setAttribute(
    "aria-hidden",
    !popup.classList.contains("active")
  );
};

/* -------------------------
   Checkout (redirigir)
   ------------------------- */
window.checkout = function () {
  saveState();
  window.location.href = "checkout.html";
};
