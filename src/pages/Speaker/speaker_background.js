window.addEventListener("scroll", () => {
    var scroll = window.pageYOffset;
    var limit = 500;
    if (scroll <= limit) {
        var opacity = 1 - scroll / limit;
    }
    var background = document.querySelector('.background')

    if (background !== null) {
        background.style.opacity = opacity;
    }
});