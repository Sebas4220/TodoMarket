window.addEventListener("DOMContentLoaded", () => {
  const cont = document.getElementById("historial-lista");
  const historial = STATE.historial || [];

  if (!historial.length) {
    cont.innerHTML = `<p class="text-muted">Aún no tienes compras registradas.</p>`;
    return;
  }

  historial.reverse().forEach(compra => {
    const fecha = new Date(compra.fecha).toLocaleString();

    let htmlItems = "";
    compra.items.forEach(i => {
      const img = fallbackImagen(i.imagen);
      htmlItems += `
        <div class="d-flex align-items-center mb-2" style="gap:10px;">
          <img src="${img}" style="width:50px; height:50px; object-fit:cover; border-radius:6px;">
          <div>
            <div class="fw-bold">${i.nombre}</div>
            <small class="text-muted">x${i.cantidad} • ${convertPrice(i.precioUnitario)}</small>
          </div>
          <div class="ms-auto fw-bold">${convertPrice(i.subtotal)}</div>
        </div>
      `;
    });

    cont.innerHTML += `
      <div class="card mb-3">
        <div class="card-body">
          <h6 class="fw-bold mb-2">Compra del ${fecha}</h6>
          ${htmlItems}
          <hr>
          <div><strong>Subtotal:</strong> ${convertPrice(compra.subtotal)}</div>
          <div><strong>Envío:</strong> ${convertPrice(compra.envio)}</div>
          <div><strong>IVA (16%):</strong> ${convertPrice(compra.tax)}</div>
          <div class="fw-bold mt-2"><strong>Total:</strong> ${convertPrice(compra.total)}</div>
        </div>
      </div>
    `;
  });
});
