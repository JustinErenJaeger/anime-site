// THIS IS THE FUNCTION FOR THE TOGGLE NAVBAR FOR MOBILE VIEW
let navToggleBtnStatus = false;

let toggleNav = function() {
    let navMenu = document.querySelector(".mobile-nav");
        links = document.querySelectorAll(".mobi-link");
        stripes = document.querySelectorAll(".stripes");

        if(navToggleBtnStatus === false) {
        // THIS IS THE STYLES FOR THE NAVBAR
            navMenu.style.width = "100%";
            navMenu.style.transition = "all 0.5s ease-in-out";

            // THIS IS THE LOOP TO LOOP THROUGH ALL THE LINKS FOR THE SLIDE-IN ANIMATION
            for(let i = 0; i < links.length; i++){
                links[i].style.marginLeft = "0";
                links[i].style.opacity = "1";
            };

            // THIS IS THE LOOP FOR THE STRIPES IN THE BURGER NAV
            for(let i = 0; i < stripes.length; i++){
                stripes[0].style.transform = "rotateZ(405deg)";
                stripes[0].style.top = "15px";
                stripes[1].style.opacity = "0";
                stripes[2].style.transform = "rotateZ(-405deg)";
                stripes[2].style.bottom = "15px";
            };

            navToggleBtnStatus = true;
        }else if(navToggleBtnStatus === true) {
            navMenu.style.width = "0";
            navMenu.style.transition = "all 1s ease-in-out";

            for(let i = 0; i < links.length; i++){
                links[i].style.marginLeft = "-8rem";
                links[i].style.opacity = "0";
            };

            // THIS IS THE LOOP FOR THE STRIPES IN THE BURGER NAV
            for(let i = 0; i < stripes.length; i++){
            stripes[0].style.transform = "rotateZ(0)";
            stripes[0].style.top = "0.4rem";
            stripes[1].style.opacity = "1";
            stripes[2].style.transform = "rotateZ(0)";
            stripes[2].style.bottom = "0.4rem";
            };

              navToggleBtnStatus = false;
          };
};
