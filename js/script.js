let headerButton = document.querySelector(".js-header-button");
function openNav() {
    if (headerButton.classList.contains("is-active")) {
        headerButton.classList.remove("is-active");
    } else {
        headerButton.classList.add("is-active");
    }
}
headerButton.addEventListener("click", openNav);
