document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.reviews__slider-client');
    const totalSlides = slides.length;
    let currentSlide = 0;
    let isAnimating = false;
    let touchStartX = 0;
    let touchEndX = 0;

    function showSlide(n) {
        if (isAnimating) return;
        isAnimating = true;

        slides.forEach((slide, index) => {
            if (index === n) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        isAnimating = false;
    }

    function updateIndicator() {
        const dotsContainer = document.querySelector('.indicator-dots');
        dotsContainer.innerHTML = "";

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
            dotsContainer.appendChild(dot);
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
        updateIndicator();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
        updateIndicator();
    }

    function handleGesture() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            prevSlide();
        }
    }

    const arrowLeft = document.querySelector('.reviews__slider-arrow-l');
    const arrowRight = document.querySelector('.reviews__slider-arrow-r');
    const slider = document.querySelector('.reviews__slider');

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    updateIndicator();
    showSlide(currentSlide);
});
