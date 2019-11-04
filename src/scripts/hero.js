let heroElement = document.querySelector(".js-hero");
let heroContent = heroElement.children[0];
const WRITE_TIME = 120;
const ERRASE_TIME = 50;
const WAIT_TIME = 1000;
const START_TIME = 500;

function hero() {
    let textArray = JSON.parse(heroElement.getAttribute("data-text"));
    let base = heroContent.textContent;
    let index = 0;
    let interval = setInterval(function () {
        heroWrite(base, textArray, index, interval)
    }, WRITE_TIME);
}

function heroWrite(base, textArray, index, interval) {
    if (heroContent.textContent.length == (base + textArray[index]).length) {
        clearInterval(interval);
        setTimeout(function () {
            let interval = setInterval(function () {
                heroErrase(base, textArray, index, interval);
            }, ERRASE_TIME);
        }, WAIT_TIME);
    }

    heroContent.textContent += 
        (base + textArray[index]).substring(heroContent.textContent.length, heroContent.textContent.length + 1);
}

function heroErrase(base, textArray, index, interval) {
    if (heroContent.textContent.length == base.length) {
        clearInterval(interval);
        setTimeout(function () {
            index = index == textArray.length - 1 ? 0 : index + 1;
            let interval = setInterval(function () {
                heroWrite(base, textArray, index, interval);
            }, WRITE_TIME);
        }, START_TIME);
    }

    heroContent.textContent = heroContent.textContent.substring(0, heroContent.textContent.length - 1);
}
    
export default hero;