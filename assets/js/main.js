// ─── Navbar: efeito ao rolar a página ────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── Menu mobile: abrir / fechar ─────────────────────────────
function toggleMenu() {
    const menu  = document.getElementById('mobile-menu');
    const open  = document.getElementById('icon-open');
    const close = document.getElementById('icon-close');
    const hidden = menu.classList.toggle('hidden');
    open.classList.toggle('hidden', !hidden);
    close.classList.toggle('hidden', hidden);
}

// ─── Scroll reveal: anima elementos ao entrar na tela ────────
const revealObserver = new IntersectionObserver(
    entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    }),
    { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
