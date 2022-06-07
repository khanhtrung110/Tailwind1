 import superSlide from "./slider.js";



// ---------Header-----------
let clickButton = () => {
    const navMobie = document.querySelector(".nav__mobie");
    const wrapper = document.querySelector(".wrapper__body");
    const overlay = document.querySelector(".overlay-full");
    const navClose = document.querySelector(".nav__mobie-close");
    const navBar = document.querySelector(".header__icon");

    navBar.addEventListener("click", () => {
        navMobie.classList.add("active");
        wrapper.classList.add("active-l");
        overlay.classList.add("active");
    })
    navClose.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active-l");
        overlay.classList.remove("active");
    })
    overlay.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active-l");
        overlay.classList.remove("active");
    })
}
let clickButton2 = () => {
    const navMobie = document.querySelector(".side-nav");
    const wrapper = document.querySelector(".wrapper__body");
    const overlay = document.querySelector(".overlay-full");
    const navClose = document.querySelector(".btn-close");
    const navBar = document.querySelector(".btn-nav-right");

    navBar.addEventListener("click", () => {
        navMobie.classList.add("active");
        wrapper.classList.add("active");
        overlay.classList.add("active");
    })
    navClose.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active");
        overlay.classList.remove("active");
    })
    overlay.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active");
        overlay.classList.remove("active");
    })
    
    
}
let carousel = () => {
    let slider = document.querySelector(".slider");
    let slide = document.querySelectorAll(".slide");
    let prevBtn = document.querySelector(".prev-btn");
    let nextBtn = document.querySelector(".next-btn");
    let slideIcon = document.querySelectorAll(".slide-icon");
    const numBerOfSlide = slide.length;
    let slideNumber = 0;
    // nextButton
    nextBtn.addEventListener("click", () => {
        slide.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        });
        slideNumber++;
        if (slideNumber > (numBerOfSlide - 1)) {
            slideNumber = 0;
        };

        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    })
    // prevButton
    prevBtn.addEventListener("click", () => {
        slide.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        });
        slideNumber--;
        if (slideNumber < 0) {
            slideNumber = slide.length - 1;
        };

        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    });
    // image slider autoplay
    let playSlider;
    var repeater = () => {
        playSlider = setInterval(() => {
            slide.forEach((slide) => {
                slide.classList.remove('active');
            });
            slideIcon.forEach((slideIcon) => {
                slideIcon.classList.remove('active');
            });
            slideNumber++;
            if (slideNumber > (numBerOfSlide - 1)) {
                slideNumber = 0;
            };

            slide[slideNumber].classList.add("active");
            slideIcon[slideNumber].classList.add("active");
        }, 4000);
    };
    repeater();

    // Click slide icon 
    slideIcon.forEach(item => item.addEventListener("click", () => {
        slide.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcon.forEach((slideIcon) => {
            slideIcon.classList.remove('active');
        });
        slideNumber++;
        if (slideNumber > (numBerOfSlide - 1)) {
            slideNumber = 0;
        };

        slide[slideNumber].classList.add("active");
        slideIcon[slideNumber].classList.add("active");
    }))
    // stop slider
    slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
    });

    // let carousel2 = ()=>{
    //     let prevBtn = document.querySelector(".prev-btn-1");
    //     let nextBtn = document.querySelector(".next-btn-1");
    //     prevBtn.addEventListener("click",()=>{
    //         let left = document.querySelector(".scroll-images");
    //         left.scrollBy(350,0)
    //     });
    //     nextBtn.addEventListener("click",()=>{
    //         let right = document.querySelector(".scroll-images");
    //         right.scrollBy(-350,0)
    //     });
    // };
    // carousel2();


}


let strollerSlide = () => {
    const slider = document.querySelectorAll('.scroll-images');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.forEach((slider) => {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    });

}

// ----------------

// ---------------------
superSlide('review','review-box','box','btnLeft','btnRight');
superSlide('testimonials','testimonials__content','child','btnLeft-1','btnRight-1');
superSlide('review-1','review-box-1','box-1','btnLeft-2','btnRight-2');


window.addEventListener("load", () => {
    // --------------HEADER----------------
    clickButton();
    clickButton2();
    //    -------------CAROUSEL--------------
    carousel();
    //StrollerSlide
    strollerSlide();
   

  
})