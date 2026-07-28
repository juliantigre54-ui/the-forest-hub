// =========================================================
// THE FOREST HUB — script.js
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header: solid background once the user scrolls ---- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Close the mobile menu after tapping a link
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Scroll cue in the hero jumps to the next section ---- */
  const scrollCue = document.getElementById('scrollCue');
  scrollCue.addEventListener('click', () => {
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---- Reveal sections gently as they enter the viewport ---- */
  const revealTargets = document.querySelectorAll('.about-grid, .services-grid, .service-card');
  revealTargets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---- Footer year, always current ---- */
  document.getElementById('year').textContent = new Date().getFullYear();

});