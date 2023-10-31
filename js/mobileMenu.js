document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu__close');

    // Функция для открытия мобильного меню
    function openMobileMenu() {
        mobileMenu.classList.remove('is-hidden');
        mobileMenu.classList.add('open');
    }

    // Функция для закрытия мобильного меню
    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('is-hidden');
    }

    // Обработчик события клика на иконку бургера для открытия меню
    burger.addEventListener('click', openMobileMenu);

    // Обработчик события клика на кнопку закрытия меню
    closeBtn.addEventListener('click', closeMobileMenu);
});