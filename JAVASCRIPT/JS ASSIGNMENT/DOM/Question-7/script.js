

const dropdowns = document.querySelectorAll('.menu-item-dropdown');


dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', function() {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block'; 
        }
    });

    dropdown.addEventListener('mouseleave', function() {
        const submenu = this.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none'; 
        }
    });
});
