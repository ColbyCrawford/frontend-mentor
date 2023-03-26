window.onload=function() {
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuToggleIcon = menuToggle.children[0];
    const navbarMenu = document.querySelector('.navbar-links');


    var isMenuOpen = false;
    menuToggle.addEventListener('click', e => {
        toggleMenu();
        toggleOverlay(body);
        toggleOverflow(body);
        
        isMenuOpen = alternateBoolean(isMenuOpen);
    })

    function toggleMenu() {
        // swap icons and toggle overflow-y on 'body'
        swapMenuToggleIcons();
            
        // transition in menu
        menuTransition();
    }

    function swapMenuToggleIcons() {
        if(isMenuOpen) {
            menuToggleIcon.classList.add('icon-hamburger');
            menuToggleIcon.classList.remove('icon-close');
        } else {
            menuToggleIcon.classList.remove('icon-hamburger');
            menuToggleIcon.classList.add('icon-close');
        }
    }

    function menuTransition() {
        navbarMenu.classList.toggle('is-open');
    }

    function toggleOverflow(el) {
        el.classList.toggle('u-overflow-y-none');
    }

    function toggleOverlay(el) {
        if(isMenuOpen) {
            el.classList.remove('overlay-visible');
            el.classList.add('overlay-hidden');
        } else {
            el.classList.add('overlay-visible');
            el.classList.remove('overlay-hidden');
        }
    }

    function alternateBoolean(el) {
        if(el) {
            el = false;
        } else {
            el = true;
        }

        return el;
    }

}
