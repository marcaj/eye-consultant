const toAnimate = document.querySelectorAll(".animate");

let animationObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.remove("animate");
            animationObserver.unobserve(entry.target);
        }
    });
});

function animate() {
    toAnimate.forEach(function (element) {
        animationObserver.observe(element);
    });    
}

export default animate;
