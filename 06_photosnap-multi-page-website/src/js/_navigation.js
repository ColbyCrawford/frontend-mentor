const body = document.querySelector("body");
const navMenu = document.querySelector(".navigation-menu");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    const currentState = menuToggle.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        menuToggle.setAttribute("data-state", "opened");
        menuToggle.setAttribute("aria-expanded", "true");
        main.setAttribute("inert", "true");
        footer.setAttribute("inert", "true");

        window.addEventListener("resize", menuEvent);

    } else {
        menuToggle.setAttribute("data-state", "closed");
        menuToggle.setAttribute("aria-expanded", "false");
        main.removeAttribute("inert");
        footer.removeAttribute("inert");

        window.removeEventListener("resize", menuEvent);
    }

    navMenu.classList.toggle("is-open");
    body.classList.toggle("u-overflow-y-hidden");
    body.classList.toggle("overlay-visible");
});

function menuEvent() {
    if(window.innerWidth >= 768) {
        main.removeAttribute("inert");
        footer.removeAttribute("inert");
        body.classList.remove("u-overflow-y-hidden");
        body.classList.remove("overlay-visible");
    } else {
        main.setAttribute("inert", "true");
        footer.setAttribute("inert", "true");
        body.classList.add("u-overflow-y-hidden");
        body.classList.add("overlay-visible");
    }
}





    

