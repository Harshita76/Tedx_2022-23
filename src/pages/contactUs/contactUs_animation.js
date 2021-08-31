window.addEventListener('scroll', () => {
    var scroll = window.pageYOffset
    var limit = 500
    if (scroll <= limit) {
        var opacity = 1 - scroll / limit;
        var height = 45 - scroll / 20;
    }
    var animation = document.querySelector('.animated-bg');
    var title = document.querySelector('.title')

    if (animation !== null) {
        animation.style.opacity = opacity;
        title.style.top = `${height}vh`
    }

}); 