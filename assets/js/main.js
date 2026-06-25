// ─── Particles.js — Tema NASA (estrelas / cosmos) ────────────
particlesJS('particles-js', {
    particles: {
        number: { value: 160, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: { enable: false },
        move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true
        },
        modes: {
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 }
        }
    },
    retina_detect: true
});

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
