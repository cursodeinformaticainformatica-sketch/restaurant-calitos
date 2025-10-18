document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación Responsive (Toggle)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Opcional: animar el icono de hamburguesa
        navToggle.classList.toggle('open'); 
    });

    // 2. Carrusel de Imágenes
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide .carousel-img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 0; // Inicializamos el contador de imagen
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar la posición inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return; // Límite
        counter++;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; // Límite
        counter--;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // 3. Animaciones al Hacer Scroll
    const observerOptions = {
        root: null,
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fly-in, .fly-in-left');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Formulario de Contacto (Validación simple)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (nombre && mensaje) {
                alert(`Mensaje de ${nombre} enviado. ¡Gracias por contactarnos!`);
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
});
