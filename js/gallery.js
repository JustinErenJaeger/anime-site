let i = 0;
    anglePoint = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    ring = document.getElementById("ring");
    prevBtn = document.querySelector(".prev");
    nextBtn = document.querySelector(".next");
    fade = document.querySelectorAll(".imgFade");
    options = document.querySelectorAll(".options");

function btnShow(){
    
    if(anglePoint[i] == 0) {
        nextBtn.style.opacity = "0.2";
    }

    else if(anglePoint[i] !== 0){
        nextBtn.style.opacity = "1";
    };

    if(anglePoint[i] == 330) {
        prevBtn.style.opacity = "0.2";
    }

    else if(anglePoint[i] !== 330){
        prevBtn.style.opacity = "1";
    };
};

window.onload = btnShow;
window.onload = imgOptions;
window.onload = imgFade;

function imgOptions(){
    for(let n = 0; n < options.length; n++){
        if(anglePoint[i] == 90 || anglePoint[i] == 270){
            options[0].style.bottom = "0";
            options[1].style.bottom = "0";

        } else if(anglePoint[i] !== 90 || anglePoint[i] !== 270){
            options[0].style.bottom = "-100%";
            options[1].style.bottom = "-100%";
        };

        if(anglePoint[i] == 60 || anglePoint[i] == 240){
            options[2].style.bottom = "0";
            options[3].style.bottom = "0";

        } else if(anglePoint[i] !== 60 || anglePoint[i] !== 240){
            options[2].style.bottom = "-100%";
            options[3].style.bottom = "-100%";
        };

        if(anglePoint[i] == 30 || anglePoint[i] == 210){
            options[4].style.bottom = "0";
            options[5].style.bottom = "0";

        } else if(anglePoint[i] !== 30 || anglePoint[i] !== 210){
            options[4].style.bottom = "-100%";
            options[5].style.bottom = "-100%";
        };

        if(anglePoint[i] == 0 || anglePoint[i] == 180){
            options[6].style.bottom = "0";
            options[7].style.bottom = "0";


        } else if(anglePoint[i] !== 0 || anglePoint[i] !== 180){
            options[6].style.bottom = "-100%";
            options[7].style.bottom = "-100%";
        };

        if(anglePoint[i] == 330 || anglePoint[i] == 150){
            options[8].style.bottom = "0";
            options[9].style.bottom = "0";

        } else if(anglePoint[i] !== 330 || anglePoint[i] !== 150){
            options[8].style.bottom = "-100%";
            options[9].style.bottom = "-100%";
        };

        if(anglePoint[i] == 300 || anglePoint[i] == 120){
            options[10].style.bottom = "0";
            options[11].style.bottom = "0";

        } else if(anglePoint[i] !== 300 || anglePoint[i] !== 120){
            options[10].style.bottom = "-100%";
            options[11].style.bottom = "-100%";
        };
    };
};

function imgFade(){
    for(let index = 0; index < fade.length; index++){

        // THIS IS THE CONDITIONS FOR THE IMAGES OPACITY WHEN FACING THE SCREEN DIRECTLY
        if(anglePoint[i] == 90 || anglePoint[i] == 270){
            fade[0].classList.add("fade-in");
            fade[1].classList.add("fade-in");

        } else if(anglePoint[i] !== 90 || anglePoint[i] !== 270){
            fade[0].classList.remove("fade-in");
            fade[1].classList.remove("fade-in");
        };

        if(anglePoint[i] == 60 || anglePoint[i] == 240){
            fade[2].classList.add("fade-in");
            fade[3].classList.add("fade-in");

        } else if(anglePoint[i] !== 60 || anglePoint[i] !== 240){
            fade[2].classList.remove("fade-in");
            fade[3].classList.remove("fade-in");
        };

        if(anglePoint[i] == 30 || anglePoint[i] == 210){
            fade[4].classList.add("fade-in");
            fade[5].classList.add("fade-in");

        } else if(anglePoint[i] !== 30 || anglePoint[i] !== 210){
            fade[4].classList.remove("fade-in");
            fade[5].classList.remove("fade-in");
        };

        if(anglePoint[i] == 0 || anglePoint[i] == 180){
            fade[6].classList.add("fade-in");
            fade[7].classList.add("fade-in");


        } else if(anglePoint[i] !== 0 || anglePoint[i] !== 180){
            fade[6].classList.remove("fade-in");
            fade[7].classList.remove("fade-in");
        };

        if(anglePoint[i] == 330 || anglePoint[i] == 150){
            fade[8].classList.add("fade-in");
            fade[9].classList.add("fade-in");

        } else if(anglePoint[i] !== 330 || anglePoint[i] !== 150){
            fade[8].classList.remove("fade-in");
            fade[9].classList.remove("fade-in");
        };

        if(anglePoint[i] == 300 || anglePoint[i] == 120){
            fade[10].classList.add("fade-in");
            fade[11].classList.add("fade-in");

        } else if(anglePoint[i] !== 300 || anglePoint[i] !== 120){
            fade[10].classList.remove("fade-in");
            fade[11].classList.remove("fade-in");
        };
    };
};

function next() {

    if(i > 0){
        ring.style.transform = "rotateY(" + anglePoint[i - 1]  + "deg)";
        i--;
        imgFade();
        imgOptions();
    };

    console.log(anglePoint[i]);
    btnShow();
};

function prev() {

    if(i < anglePoint.length - 1){
        ring.style.transform = "rotateY(" + anglePoint[i + 1] + "deg)";
        i++;
        imgFade();
        imgOptions();

        console.log(anglePoint[i]);
        btnShow()
    };
};
