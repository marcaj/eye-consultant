let headerButton = document.querySelector(".js-header-button");

function toggleNav() {
    if (headerButton.classList.contains("is-active")) {
        headerButton.classList.remove("is-active");
    } else {
        headerButton.classList.add("is-active");
    }
}

function menu() {
    headerButton.addEventListener("click", toggleNav);
    document.querySelectorAll(".menu__link").forEach(function (element) {
        element.addEventListener("click", toggleNav);
    });    
}

export default menu;
