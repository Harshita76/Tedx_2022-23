window.addEventListener("scroll", () => {
    var scroll = window.pageYOffset;
    var limit = 700;
    if (scroll <= limit) {
        var opacity = 1 - scroll / limit;
    }
    var background = document.querySelector('.background')

    if (background !== null) {
        background.style.opacity = opacity;
    }
});