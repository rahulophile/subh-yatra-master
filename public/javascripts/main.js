document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    // You can add more JavaScript functionality here
    // For example, updating bus counts or handling alerts
});
// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    
    function adjustFooterPadding() {
        const footerHeight = footer.offsetHeight;
        main.style.paddingBottom = footerHeight + 'px';
        document.body.style.paddingBottom = footerHeight + 'px';
    }

    // Run on load
    adjustFooterPadding();

    // Run on window resize
    window.addEventListener('resize', adjustFooterPadding);
});