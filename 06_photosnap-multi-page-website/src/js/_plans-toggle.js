const plansToggle = document.getElementById("plans-toggle");
const planCost = document.getElementsByClassName("pricing-card-cost");

var planCostArr = [].slice.call(planCost);

initPlans()

plansToggle.addEventListener("click", e => {
    changePlans();
});

function initPlans() {
    if (plansToggle.checked) {
        changePlans();
    }
}

function changePlans() {
    planCostArr.forEach(e => {
        const currentState = e.getAttribute("data-active");
        if (currentState == "true") {
            e.setAttribute("data-active", "false");
        } else {
            e.setAttribute("data-active", "true");
        }
    });
}









