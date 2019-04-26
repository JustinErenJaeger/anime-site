window.onscroll = function() {
    navbarAnimation()
};

function navbarAnimation() {
    let topBar = document.querySelector(".top-bar");
        navbar = document.querySelector("nav");
        overlay = document.querySelector(".overlay");

    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
        topBar.style.top = "-64px";
        navbar.style.top = "0";
        overlay.style.width = "100%";

    } else if (document.body.scrollTop < 64 || document.documentElement.scrollTop < 64) {
        topBar.style.top = "0";
        navbar.style.top = "64px";
        overlay.style.width = "0";
    }
}