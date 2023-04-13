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
    } else {
        menuToggle.setAttribute("data-state", "closed");
        menuToggle.setAttribute("aria-expanded", "false");
        main.removeAttribute("inert");
        footer.removeAttribute("inert");
    }

    navMenu.classList.toggle("is-open");
    body.classList.toggle("u-overflow-y-hidden");
    body.classList.toggle("overlay-visible");
});