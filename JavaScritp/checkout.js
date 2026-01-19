/* checkout.js
   - Lee carrito desde localStorage (mi_carrito_v1)
   - Calcula subtotal, impuestos (ejemplo), envío
   - Aplica +$1.50 si seleccionan delivery
   - Muestra mensaje si seleccionan envío nacional
   - Maneja moneda (USD/VES) usando mi_moneda_v1 y tasa (si existe)
*/

(function () {
  // Configuración
  const STORAGE_CART = 'mi_carrito_v1';
  const STORAGE_MONEDA = 'mi_moneda_v1';
  const DEFAULT_TASA = 40; // si no hay tasa guardada
  const DELIVERY_FEE_USD = 1.5;

  // Elementos
  const elItems = document.getElementById('checkout-items');
  const elSubtotal = document.getElementById('subtotal-text');
  const elEnvioText = document.getElementById('envio-text');
  const elTax = document.getElementById('tax-text');
  const elTotal = document.getElementById('total-text');
  const elEnvioMsg = document.getElementById('envio-mensaje');
  const selectMoneda = document.getElementById('select-moneda');

  const btnConfirmar = document.getElementById('btn-confirmar');
  const btnFinalizar = document.getElementById('btn-finalizar');

  // Estado
  let carrito = JSON.parse(localStorage.getItem(STORAGE_CART) || '[]');
  let moneda = localStorage.getItem(STORAGE_MONEDA) || 'USD';
  let tasa = Number(localStorage.getItem('mi_tasa_v1') || DEFAULT_TASA);

  // Utilidades de formato (coincide con tu app)
  function formatearNumero(n) { return Number(n).toFixed(2); }
  function convertirPrecio(valor) {
    const v = Number(valor) || 0;
    if (moneda === 'USD') return `$${formatearNumero(v)}`;
    return `${formatearNumero(v * tasa)} Bs`;
  }

  // Render del listado de items
  function renderItems() {
    elItems.innerHTML = '';
    if (!carrito || carrito.length === 0) {
      elItems.innerHTML = '<div class="text-muted small">Tu carrito está vacío.</div>';
      return;
    }

    carrito.forEach(p => {
      const precioUnit = p.oferta !== "" && p.oferta !== null ? Number(p.oferta) : Number(p.precio);
      const subtotal = precioUnit * (p.cantidad || 1);
      const img = p.imagen && p.imagen.trim() !== '' ? p.imagen : './img/Productos/default.jpg';

      const row = document.createElement('div');
      row.className = 'item-row';
      row.innerHTML = `
        <img src="${img}" alt="${escapeHtml(p.nombre)}">
        <div class="meta">
          <div class="name">${escapeHtml(p.nombre)}</div>
          <div class="qty">x${p.cantidad || 1} • ${convertirPrecio(precioUnit)} c/u</div>
        </div>
        <div class="ms-auto fw-bold">${convertirPrecio(subtotal)}</div>
      `;
      elItems.appendChild(row);
    });
  }

  // Cálculo de totales
  function calcularTotales() {
    // subtotal en USD (base)
    let subtotalUSD = 0;
    carrito.forEach(p => {
      const precioUnit = p.oferta !== "" && p.oferta !== null ? Number(p.oferta) : Number(p.precio);
      subtotalUSD += precioUnit * (p.cantidad || 1);
    });

    // impuestos (ejemplo: 0% por defecto, puedes ajustar)
    const taxUSD = 0; // si quieres calcular, pon porcentaje

    // envío
    const tipoEnvio = document.querySelector('input[name="tipoEnvio"]:checked')?.value || 'nacional';
    let envioUSD = 0;
    let envioText = '—';
    let mostrarMensajeNacional = false;

    if (tipoEnvio === 'delivery') {
      envioUSD = DELIVERY_FEE_USD;
      envioText = convertirPrecio(envioUSD);
      mostrarMensajeNacional = false;
    } else {
      // Envío nacional: costo desconocido (cobro destino)
      envioUSD = 0;
      envioText = 'Cobro destino';
      mostrarMensajeNacional = true;
    }

    const totalUSD = subtotalUSD + taxUSD + envioUSD;

    // Actualizar UI (convertir según moneda)
    elSubtotal.textContent = convertirPrecio(subtotalUSD);
    elEnvioText.textContent = tipoEnvio === 'delivery' ? convertirPrecio(envioUSD) : envioText;
    elTax.textContent = convertirPrecio(taxUSD);
    elTotal.textContent = convertirPrecio(totalUSD);

    // Mensaje para envío nacional
    if (mostrarMensajeNacional) {
      elEnvioMsg.classList.remove('d-none');
      elEnvioMsg.innerHTML = 'Este monto se conocerá al momento de realizar el envío y el envío se realizará cobro destino.';
    } else {
      elEnvioMsg.classList.add('d-none');
      elEnvioMsg.innerHTML = '';
    }
  }

  // Escape simple para inyectar texto seguro
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  // Eventos
  function attachEvents() {
    // Cambio de tipo de envío
    document.querySelectorAll('input[name="tipoEnvio"]').forEach(r => {
      r.addEventListener('change', () => {
        calcularTotales();
      });
    });

    // Cambio método de pago: mostrar/ocultar campos tarjeta
    document.querySelectorAll('input[name="metodoPago"]').forEach(r => {
      r.addEventListener('change', () => {
        const val = document.querySelector('input[name="metodoPago"]:checked')?.value;
        const formTarjeta = document.getElementById('form-tarjeta');
        if (val === 'tarjeta') formTarjeta.style.display = '';
        else formTarjeta.style.display = 'none';
      });
    });

    // Confirmar (botón en el formulario)
    if (btnConfirmar) {
      btnConfirmar.addEventListener('click', () => {
        // Scroll al resumen y habilitar botón finalizar
        window.scrollTo({ top: 0, behavior: 'smooth' });
        btnFinalizar.focus();
      });
    }

    // Finalizar pago
    if (btnFinalizar) {
      btnFinalizar.addEventListener('click', (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!carrito || carrito.length === 0) {
          alert('Tu carrito está vacío.');
          return;
        }

        const metodo = document.querySelector('input[name="metodoPago"]:checked')?.value;
        const tipoEnvio = document.querySelector('input[name="tipoEnvio"]:checked')?.value;
        const direccion = document.getElementById('direccion')?.value?.trim();

        if (!metodo) { alert('Selecciona un método de pago.'); return; }
        if (!direccion) { if (!confirm('No has ingresado una dirección. ¿Deseas continuar?')) return; }

        // Si método tarjeta, validar campos mínimos
        if (metodo === 'tarjeta') {
          const name = document.getElementById('card-name').value.trim();
          const number = document.getElementById('card-number').value.trim();
          const exp = document.getElementById('card-exp').value.trim();
          const cvc = document.getElementById('card-cvc').value.trim();
          if (!name || !number || !exp || !cvc) {
            alert('Completa los datos de la tarjeta.');
            return;
          }
        }

        // Simular procesamiento
        btnFinalizar.disabled = true;
        btnFinalizar.textContent = 'Procesando...';

        setTimeout(() => {
          // Aquí iría la integración real con pasarela
          alert('Pago procesado correctamente. Gracias por tu compra.');

          // Vaciar carrito
          carrito = [];
          localStorage.setItem(STORAGE_CART, JSON.stringify(carrito));

          // Actualizar UI
          renderItems();
          calcularTotales();
          btnFinalizar.disabled = false;
          btnFinalizar.textContent = 'Validar Pago';

          // Redirigir o mostrar confirmación
          window.location.href = 'index.html';
        }, 1200);
      });
    }

    // Cambio de moneda
    if (selectMoneda) {
      selectMoneda.value = moneda;
      selectMoneda.addEventListener('change', (e) => {
        moneda = e.target.value;
        localStorage.setItem(STORAGE_MONEDA, moneda);
        // si quieres, actualizar tasa desde otro lugar; por ahora usamos la tasa guardada
        calcularTotales();
        renderItems();
      });
    }
  }

  // Inicialización
  function init() {
    // Mostrar/ocultar formulario tarjeta según selección inicial
    const metodoInicial = document.querySelector('input[name="metodoPago"]:checked')?.value;
    if (metodoInicial !== 'tarjeta') {
      const formTarjeta = document.getElementById('form-tarjeta');
      if (formTarjeta) formTarjeta.style.display = 'none';
    }

    renderItems();
    calcularTotales();
    attachEvents();
  }

  // Ejecutar init
  init();

})();
