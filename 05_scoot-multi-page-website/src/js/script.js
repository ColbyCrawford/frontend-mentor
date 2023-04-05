const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = menuToggle.children[0];
const navMenu = document.querySelector('.navbar-actions-panel');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

let isMenuOpen = false;

menuToggle.addEventListener('click', e => {
    toggleMenu();
    toggleOverlay(body);
    toggleInert(main);
    toggleInert(footer);

    // change isMenuOpen value
    isMenuOpen = changeBoolean(isMenuOpen);
})

document.getElementsByName("faq1").forEach(function (el) {
    el.addEventListener("click", e => {
        if (el.getAttribute("data-waschecked") == "true") {
            el.checked = false;
            el.setAttribute("data-waschecked", "false");
        } else {
            el.checked = true;
            el.setAttribute("data-waschecked", "true");
        }
        disableRadioAttributes("faq1", el);
    });
});

document.getElementsByName("faq2").forEach(function (el) {
    el.addEventListener("click", e => {
        if (el.getAttribute("data-waschecked") == "true") {
            el.checked = false;
            el.setAttribute("data-waschecked", "false");
        } else {
            el.checked = true;
            el.setAttribute("data-waschecked", "true");
        }
        disableRadioAttributes("faq2", el);
    });
});


function disableRadioAttributes(radioGroup, radio) {
    var radios = document.getElementsByName(radioGroup);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i] == radio) {

            } else {
                radios[i].setAttribute("data-waschecked", "false");
            }
        }
}




function swapMenuIcons() {
    if (isMenuOpen) {
        menuIcon.classList.add('icon-hamburger');
        menuIcon.classList.remove('icon-close');
    } else {
        menuIcon.classList.remove('icon-hamburger');
        menuIcon.classList.add('icon-close');
    }
}

function toggleMenu() {
    navMenu.classList.toggle('is-open');
    swapMenuIcons();
}

function toggleOverlay(el) {
    if (isMenuOpen) {
        el.classList.remove('overlay-visible');
        el.classList.add('overlay-hidden');
    } else {
        el.classList.add('overlay-visible');
        el.classList.remove('overlay-hidden');
    }
}

function toggleInert(el) {
    if (isMenuOpen) {
        el.removeAttribute('inert');
    } else {
        el.setAttribute('inert', 'true');
    }
}

function changeBoolean(boolean) {
    if (boolean) {
        return boolean = false;
    } else {
        return boolean = true;
    }
}