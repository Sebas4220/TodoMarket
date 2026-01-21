/* ============================================
   productos.checkout.js
   Lógica del checkout (solo si existe en la página)
   ============================================ */

window.initCheckout = function () {
  const isCheckout = !!document.getElementById("checkout-items");
  if (!isCheckout) return;

  const elItems = document.getElementById("checkout-items");
  const elSubtotal = document.getElementById("subtotal-text");
  const elEnvioText = document.getElementById("envio-text");
  const elTax = document.getElementById("tax-text");
  const elTotal = document.getElementById("total-text");
  const elEnvioMsg = document.getElementById("envio-mensaje");

  const inputComprobante = document.getElementById("payer-comprobante");
  const previewWrapper = document.getElementById("comprobante-preview");
  const previewImg = document.getElementById("comprobante-img");
  const previewRemove = document.getElementById("comprobante-remove");

  const btnFinalizar = document.getElementById("btn-finalizar");

  const DELIVERY_FEE_USD = 1.5;
  const TAX_RATE = 0.16;
  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  /* -------------------------
     Render items del checkout
     ------------------------- */
  function renderCheckoutItems() {
    elItems.innerHTML = "";
    let subtotal = 0;

    STATE.carrito.forEach(p => {
      const precioUnit = p.oferta || p.precio;
      const subtotalItem = precioUnit * p.cantidad;
      subtotal += subtotalItem;

      const img = fallbackImagen(p.imagen);

      elItems.innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center" style="gap:10px;">
            <img src="${escapeHtml(img)}" style="width:64px; height:64px; object-fit:cover; border-radius:6px;">
            <div>
              <div class="fw-bold">${escapeHtml(p.nombre)}</div>
              <small class="text-muted">x${p.cantidad} • ${convertPrice(precioUnit)}</small>
            </div>
          </div>
          <div class="fw-bold">${convertPrice(subtotalItem)}</div>
        </div>
      `;
    });

    const envio = DELIVERY_FEE_USD;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + envio + tax;

    elSubtotal.textContent = convertPrice(subtotal);
    elEnvioText.textContent = convertPrice(envio);
    elTax.textContent = convertPrice(tax);
    elTotal.textContent = convertPrice(total);

    elEnvioMsg.textContent = `Costo de envío fijo: ${convertPrice(envio)}`;
  }

  /* -------------------------
     Cambio de moneda en checkout
     ------------------------- */
  const selectMonedaCheckout = document.getElementById("select-moneda");
  if (selectMonedaCheckout) {
    selectMonedaCheckout.value = STATE.moneda;
    selectMonedaCheckout.addEventListener("change", e => {
      STATE.moneda = e.target.value;
      saveState();
      renderCheckoutItems();
    });
  }

  /* -------------------------
     Comprobante de pago
     ------------------------- */
  if (inputComprobante) {
    inputComprobante.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;

      if (!ALLOWED_TYPES.includes(file.type)) {
        alert("Formato no permitido. Usa JPG, PNG, WEBP o GIF.");
        inputComprobante.value = "";
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        alert("El archivo supera los 5MB.");
        inputComprobante.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        previewImg.src = reader.result;
        previewWrapper.classList.remove("d-none");
      };
      reader.readAsDataURL(file);
    });

    previewRemove.addEventListener("click", () => {
      inputComprobante.value = "";
      previewWrapper.classList.add("d-none");
      previewImg.src = "";
    });
  }

  /* -------------------------
     Finalizar pago + Guardar historial
     ------------------------- */
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", () => {

      const nombre = document.getElementById("payer-nombre").value.trim();
      const apellido = document.getElementById("payer-apellido").value.trim();
      const telefono = document.getElementById("payer-telefono").value.trim();
      const cedula = document.getElementById("payer-cedula").value.trim();
      const comprobante = document.getElementById("payer-comprobante").files[0];

      if (!nombre || !apellido || !telefono || !cedula) {
        alert("Completa todos los datos del formulario.");
        return;
      }

      if (!comprobante) {
        alert("Debes subir el comprobante de pago.");
        return;
      }

      // CALCULAR TOTALES CONGELADOS
      let subtotal = 0;
      const items = STATE.carrito.map(p => {
        const precioUnit = p.oferta || p.precio;
        const subtotalItem = precioUnit * p.cantidad;
        subtotal += subtotalItem;

        return {
          nombre: p.nombre,
          categoria: p.categoria,
          imagen: p.imagen,
          cantidad: p.cantidad,
          precioUnitario: precioUnit,
          subtotal: subtotalItem
        };
      });

      const envio = DELIVERY_FEE_USD;
      const tax = subtotal * TAX_RATE;
      const total = subtotal + envio + tax;

      // GUARDAR EN HISTORIAL
      guardarHistorialCompra({
        id: Date.now(),
        fecha: new Date().toISOString(),
        moneda: STATE.moneda,
        items,
        subtotal,
        envio,
        tax,
        total
      });

      // VACIAR CARRITO
      STATE.carrito = [];
      saveState();

      btnFinalizar.disabled = true;
      btnFinalizar.textContent = "Procesando...";

      setTimeout(() => {
        alert("Pago verificado correctamente. Gracias por tu compra.");
        window.location.href = "historial.html";
      }, 1200);
    });
  }

  renderCheckoutItems();
};

/* ============================================
   productos.init.js
   ============================================ */

window.initApp = function () {
  if (window.renderAll) renderAll();
  if (window.initSearch) initSearch();
  if (window.actualizarCarrito) actualizarCarrito();
  if (window.initCheckout) initCheckout();
  if (window.initCategoriasMovil) initCategoriasMovil();
};

/* ============================================
   Listener global para cambio de moneda
   ============================================ */

document.addEventListener("click", e => {
  const btn = e.target.closest("[data-moneda]");
  if (!btn) return;

  e.preventDefault();

  const nueva = btn.getAttribute("data-moneda");
  STATE.moneda = nueva;
  saveState();

  if (window.renderAll) renderAll();
  if (window.actualizarCarrito) actualizarCarrito();
  if (window.initCheckout) initCheckout();

  const dropdownBtn = document.querySelector(".moneda-dropdown .dropdown-toggle");
  if (dropdownBtn) dropdownBtn.textContent = `Moneda ${nueva}`;
});

/* ============================================
   Cargar categorías dinámicas en menú móvil
   ============================================ */

window.initCategoriasMovil = function () {
  const cont = document.getElementById("menu-categorias-movil");
  if (!cont) return;

  cont.innerHTML = "";
  const categorias = getCategorias();

  categorias.forEach(cat => {
    const item = document.createElement("li");
    item.innerHTML = `
      <a class="dropdown-item" style="color: black;" href="category.html?cat=${encodeURIComponent(cat)}">
        ${escapeHtml(cat)}
      </a>`;
    cont.appendChild(item);
  });
};

document.addEventListener("DOMContentLoaded", initApp);
