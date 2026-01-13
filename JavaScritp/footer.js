// Footer small behaviors: year, newsletter mock, back-to-top
document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Newsletter
  const form = document.getElementById('footer-newsletter');
  const email = document.getElementById('footer-email');
  const msg = document.getElementById('footer-news-msg');
  if (form && email && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Validación simple
      const val = (email.value || '').trim();
      if (!val || !/^\S+@\S+\.\S+$/.test(val)) {
        email.classList.add('is-invalid');
        return;
      }
      email.classList.remove('is-invalid');
      // Simular suscripción
      msg.classList.remove('visually-hidden');
      setTimeout(() => { msg.classList.add('visually-hidden'); email.value = ''; }, 2500);
    });
  }

  // Back to top
  const btn = document.getElementById('back-to-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});
