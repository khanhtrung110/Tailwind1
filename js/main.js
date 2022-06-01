// ---------Header-----------
let clickButton = ()=>{
    const navMobie = document.querySelector(".nav__mobie");
    const navClose = document.querySelector(".nav__mobie-close");
    const navBar = document.querySelector(".header__icon");

    navBar.addEventListener("click",()=>{
    navMobie.classList.add("active");
})
    navClose.addEventListener("click",()=>{
    navMobie.classList.remove("active");
})
}

let carousel = ()=>{
    let slider = document.querySelector(".slider");
    let slide = document.querySelectorAll(".slide");
    let prevBtn = document.querySelector(".prev-btn");
    let nextBtn = document.querySelector(".next-btn");
    let slideIcon = document.querySelectorAll(".slide-icon");
    const numBerOfSlide = slide.length;
    let slideNumber = 0;
    // nextButton
    nextBtn.addEventListener("click",()=>{
        slide.forEach((slide)=>{
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon)=>{
            slideIcon.classList.remove('active');
        });
        slideNumber++;
        if (slideNumber > (numBerOfSlide-1)) {
                slideNumber = 0;
        };
        
        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    })
    // prevButton
    prevBtn.addEventListener("click",()=>{
        slide.forEach((slide)=>{
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon)=>{
            slideIcon.classList.remove('active');
        });
        slideNumber--;
        if (slideNumber < 0) {
                slideNumber = slide.length-1;
        };
        
        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    });
    // image slider autoplay
    let playSlider;
    var repeater = () =>{
        playSlider = setInterval(()=>{
            slide.forEach((slide)=>{
                slide.classList.remove('active');
            });
            slideIcon.forEach((slideIcon)=>{
                slideIcon.classList.remove('active');
            });
            slideNumber++;
            if (slideNumber > (numBerOfSlide-1)) {
                    slideNumber = 0;
            };
            
            slide[slideNumber].classList.add("active");
            slideIcon[slideNumber].classList.add("active");
        }, 4000);
    };
    repeater();

    // Click slide icon 
    slideIcon.forEach(item => item.addEventListener("click", ()=>{
        slide.forEach((slide)=>{
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon)=>{
            slideIcon.classList.remove('active');
        });
        slideNumber++;
        if (slideNumber > (numBerOfSlide-1)) {
                slideNumber = 0;
        };
        
        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    }))
    // stop slider
    slider.addEventListener("mouseover", ()=>{
        clearInterval(playSlider);
    });
}



window.addEventListener("load", ()=>{
    // --------------HEADER----------------
   clickButton();
//    -------------CAROUSEL--------------
   carousel();


})