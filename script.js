// JavaScript для управления слайдером
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0; // Возврат к первому слайду
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Переход к последнему слайду
    } else {
        slideIndex = index;
    }
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Автоматическое изменение размера слайдов при изменении окна
window.addEventListener('resize', () => {
    showSlide(slideIndex);
});
