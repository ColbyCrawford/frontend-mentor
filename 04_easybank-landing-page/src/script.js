window.onload=function() {
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuToggleIcon = menuToggle.children[0];
    const navbarMenu = document.querySelector('.navbar-links');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');


    var isMenuOpen = false;
    menuToggle.addEventListener('click', e => {
        toggleMenu();
        toggleOverlay(body);
        toggleOverflow(body);
        toggleInert(main);
        toggleInert(footer);
        
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

    // used to disable tabbable elements behind an overlay
    function toggleInert(el) {
        if(isMenuOpen) {
            el.removeAttribute('inert');
        } else {
            el.setAttribute('inert','');
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
