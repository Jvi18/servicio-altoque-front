// Flickity
import Flickity from 'flickity';

// hamburger menu
const ham = document.querySelectorAll('[data-menu-btn]');

ham.forEach((btn) => {
    btn.addEventListener('click', (e) => openMenu(e));
});

function openMenu(e) {
    e.preventDefault();
    const menu = document.querySelector('[data-menu]');
    menu.classList.toggle('show');
}

// Enable Sliders
const carousels = document.querySelectorAll('[data-slider-grid]');

carousels.forEach((carousel) => {
    let flkty = new Flickity(carousel, {
        // options
        draggable: true,
        contain: true,
        center: true,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        arrowShape: 'M0.541,32.7493 C0.526,32.7843 0.521,32.8213 0.507,32.8563 C0.189,33.6663 0,34.5413 0,35.4633 C0,36.3853 0.189,37.2603 0.507,38.0693 C0.521,38.1043 0.526,38.1423 0.541,38.1773 C0.904,39.0593 1.433,39.8533 2.097,40.5183 L30.413,68.8333 C33.203,71.6243 37.723,71.6243 40.513,68.8333 C43.304,66.0433 43.304,61.5233 40.513,58.7333 L24.386,42.6053 L92.857,42.6053 C96.803,42.6053 100,39.4063 100,35.4633 C100,31.5203 96.803,28.3203 92.857,28.3203 L24.386,28.3203 L40.513,12.1923 C43.304,9.4023 43.304,4.8833 40.513,2.0933 C39.118,0.6973 37.291,0.0003 35.463,0.0003 C33.636,0.0003 31.808,0.6973 30.413,2.0933 L2.097,30.4083 C1.433,31.0723 0.904,31.8673 0.541,32.7493'
    });
});