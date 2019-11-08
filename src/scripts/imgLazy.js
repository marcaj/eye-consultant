function imgLazy() {
    document.addEventListener("DOMContentLoaded", function() {
        var lazyImages = [].slice.call(document.querySelectorAll(".js-lazy"));
      
        if ("IntersectionObserver" in window) {
          let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                console.log(lazyImage);
                lazyImage.classList.remove("js-lazy");
                lazyImageObserver.unobserve(lazyImage);
              }
            });
          }, {
            rootMargin: "0px 256px 256px 256px"
          });
      
          lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
          });
        } else {
          lazyImages.forEach(function (lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
          });
        }
      });
}

export default imgLazy;
