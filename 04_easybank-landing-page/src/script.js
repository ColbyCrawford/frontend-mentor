window.onload=function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuToggleIcon = menuToggle.children[0];

    var isMenuOpen = false;
    menuToggle.addEventListener('click', e => {
        swapMenuToggleIcons();
    })

    function swapMenuToggleIcons() {
        if(isMenuOpen) {
            menuToggleIcon.classList.add('icon-hamburger');
            menuToggleIcon.classList.remove('icon-close');
            isMenuOpen = false;
        } else {
            menuToggleIcon.classList.remove('icon-hamburger');
            menuToggleIcon.classList.add('icon-close');
            isMenuOpen = true;
        }
    }
}
