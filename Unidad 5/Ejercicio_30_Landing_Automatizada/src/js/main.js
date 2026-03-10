// Lógica del menú hamburguesa

document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionar elementos
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links li');
    const ctaButton = document.querySelector('.cta-btn');

    // Función para activar/desactivar menú
    function toggleNav() {
        // Alternar clase en navbar
        nav.classList.toggle('nav-active');
        
        // Alternar clase en burger (animación)
        const lines = document.querySelectorAll('.burger div');
        lines.forEach(line => line.classList.toggle('active'));
        
        // Animar los links
        if (nav.classList.contains('nav-active')) {
            navLinks.forEach((link, index) => {
                link.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
            });
        } else {
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    }

    // Evento click en burger
    if (burger) {
        burger.addEventListener('click', toggleNav);
    }

    // Cerrar menú al hacer click en un link (móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleNav();
            }
        });
    });

    // Smooth scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto hover en CTA button
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

    console.log('✅ Menú hamburguesa inicializado');
    
    // Verificar si es móvil
    if (window.innerWidth <= 768) {
        console.log('📱 Modo móvil activado');
    }
});

// Efecto de scroll en navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(44, 62, 80, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        nav.style.background = '#2c3e50';
        nav.style.boxShadow = 'none';
    }
});