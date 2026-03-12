// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Loading Screen Animation (GSAP) ---
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                loader.style.display = 'none';
                // Iniciar animações do Hero após o loading
                AOS.refresh();
            }
        });
    });

    // --- 2. Initialize AOS (Animate on Scroll) ---
    AOS.init({
        once: true, // Anima apenas uma vez ao rolar
        offset: 100, // Offset (em px) antes de acionar
        duration: 800,
        easing: 'ease-out-cubic'
    });

    // --- 3. Particles.js Configuration ---
    // Configuração para um fundo estilo "Tech/Neon Dust"
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#E60000", "#FFCC00", "#ffffff"] },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } },
                    "push": { "particles_nb": 3 }
                }
            },
            "retina_detect": true
        });
    }

    // --- 4. Sticky Header ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 5. Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Trocar ícone de barras para "X"
        if (navMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            // Animação de entrada dos itens do menu no mobile
            gsap.fromTo('.nav-menu > *', 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
            );
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Fechar menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-links a, .nav-buttons a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });

});