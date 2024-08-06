document.addEventListener('DOMContentLoaded', () => {
    // Carrossel de Pizzas
    const slides = document.querySelector('.carousel-slides');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    });

    function updateCarousel() {
        const newTransform = -currentIndex * 100 + '%';
        slides.style.transform = `translateX(${newTransform})`;
    }

    // Carrossel de Esfirras
    const slidesEsfirra = document.querySelector('.carousel-slides-esfirra');
    const slideCountEsfirra = document.querySelectorAll('.carousel-slides-esfirra .carousel-slide').length;
    let currentIndexEsfirra = 0;

    document.querySelector('.next-esfirra').addEventListener('click', () => {
        currentIndexEsfirra = (currentIndexEsfirra + 1) % slideCountEsfirra;
        updateCarouselEsfirra();
    });

    document.querySelector('.prev-esfirra').addEventListener('click', () => {
        currentIndexEsfirra = (currentIndexEsfirra - 1 + slideCountEsfirra) % slideCountEsfirra;
        updateCarouselEsfirra();
    });

    function updateCarouselEsfirra() {
        const newTransformEsfirra = -currentIndexEsfirra * 100 + '%';
        slidesEsfirra.style.transform = `translateX(${newTransformEsfirra})`;
    }


    document.addEventListener('DOMContentLoaded', () => {
        const notification = document.getElementById('notification');
    
        function showNotification(message) {
            notification.querySelector('p').textContent = message;
            notification.classList.add('show');
            notification.classList.remove('hide');
    
            // Ocultar a notificação após 5 segundos
            setTimeout(() => {
                notification.classList.add('hide');
                notification.classList.remove('show');
            }, 5000);
        }
    
        // Mostrar a notificação com a mensagem desejada
        showNotification('Disponível para encomenda');
    
        // Opcional: Fechar a notificação ao clicar nela
        notification.addEventListener('click', () => {
            notification.classList.add('hide');
            notification.classList.remove('show');
        });
    });
    
    
    
});
