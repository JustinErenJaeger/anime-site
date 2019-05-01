window.onscroll = function() {
    navbarAnimation()
};

function navbarAnimation() {
    let topBar = document.querySelector(".top-bar");
        navbar = document.querySelector("nav");
        overlay = document.querySelectorAll("#write");
        spinner = document.querySelectorAll("#spin");

    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
        topBar.style.top = "-64px";
        navbar.style.top = "0";
        for(let i = 0; i < overlay.length; i++){
            overlay[i].style.width = "100%";
            overlay[i].style.transition = "all 0s linear";
        }

        for(let i = 0; i < spinner.length; i++){
            spinner[i].style.transform = "rotateZ(0)";
            spinner[i].style.transition = "all 0s ease-in-out";
        }

    } else if (document.body.scrollTop < 64 || document.documentElement.scrollTop < 64) {
        topBar.style.top = "0";
        navbar.style.top = "64px";
        for(let i = 0; i < overlay.length; i++){
            overlay[i].style.width = "0";
            overlay[i].style.transition = "all 4s linear";
        };

        for(let i = 0; i < spinner.length; i++){
            spinner[i].style.transform = "rotateZ(2440deg)";
            spinner[i].style.transition = "all 4s ease-out";
        };
    };
};

console.count(document.body.scrollTop);