const navMenu = document.querySelector(".navigation-menu");
const menuToggle = document.querySelector(".menu-toggle");


menuToggle.addEventListener("click", () => {
    const currentState = menuToggle.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        menuToggle.setAttribute("data-state", "opened");
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.setAttribute("data-state", "closed");
        menuToggle.setAttribute("aria-expanded", "false");
    }
    navMenu.classList.toggle("is-open");
});