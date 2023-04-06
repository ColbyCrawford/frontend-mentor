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