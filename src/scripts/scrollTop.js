let scrollElement = document.querySelector(".js-scroll-top");

function scrollTop() {
    scrollDistance(onScroll);
}

function onScroll(distance, start, end) {
    if (distance > 0 || end == 0) {
        hide();
    } else {
        show();
    }
}

function show() {
    scrollElement.classList.add("scroll-top--show");
}

function hide() {
    scrollElement.classList.remove("scroll-top--show");
}

function scrollDistance(callback, refresh) {
	if (!callback || typeof callback !== 'function') return;

	let isScrolling, start, end, distance;

	window.addEventListener('scroll', function (event) {
		if (!start) {
			start = window.pageYOffset;
		}

        window.clearTimeout(isScrolling);

		isScrolling = setTimeout(function() {
			end = window.pageYOffset;
			distance = end - start;
			callback(distance, start, end);
			start = null;
			end = null;
			distance = null;
		}, refresh || 66);
	}, false);
};

export default scrollTop;