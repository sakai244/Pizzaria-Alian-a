document.addEventListener('DOMContentLoaded', () => {
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
});
