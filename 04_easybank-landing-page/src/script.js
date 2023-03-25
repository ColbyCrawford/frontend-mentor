window.onload=function() {
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuToggleIcon = menuToggle.children[0];
    const siteNav = document.querySelector('.site-nav');
    const siteMain = document.querySelector('.site-main');


    var isMenuOpen = false;
    menuToggle.addEventListener('click', e => {
        toggleMenu();
    })

    function toggleMenu() {
        // swap icons and toggle overflow-y on 'body'
        swapMenuToggleIcons();

        // toggle overlay on 'body'
        toggleOverlay(body);
        
        // transition in menu
        menuTransition();

    }

    function swapMenuToggleIcons() {
        if(isMenuOpen) {
            menuToggleIcon.classList.add('icon-hamburger');
            menuToggleIcon.classList.remove('icon-close');
            isMenuOpen = false;

            // add u-overflow-y-none to body
            toggleOverflow(body);
        } else {
            menuToggleIcon.classList.remove('icon-hamburger');
            menuToggleIcon.classList.add('icon-close');
            isMenuOpen = true;

            // remove u-overflow-y-none from body
            toggleOverflow(body);
        }
    }

    function menuTransition() {
        siteNav.classList.toggle('is-open');
    }

    function toggleOverflow(el) {
        el.classList.toggle('u-overflow-y-none');
    }

    function toggleOverlay(el) {
        el.classList.toggle('overlay');
    }

    

}
