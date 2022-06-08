 import superSlide from "./slider.js";



// ---------Header-----------
let clickButton = () => {
    const header2 = document.querySelector("#header-fixed"); 
    const navMobie = document.querySelector(".nav__mobie");
    const wrapper = document.querySelector(".wrapper__body");
    const overlay = document.querySelectorAll(".overlay-full");
    const navClose = document.querySelector(".nav__mobie-close");
    const navBar = document.querySelector(".header__icon");

    navBar.addEventListener("click", () => {
        navMobie.classList.add("active");
        wrapper.classList.add("active-l");
        overlay[0].classList.add("active");
        overlay[1].classList.add("active");
        header2.classList.add("active-l");
    })
   
    navClose.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active-l");
        header2.classList.remove("active-l");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
    })
    overlay[0].addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active-l");
        header2.classList.remove("active-l");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
    })
    overlay[1].addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active-l");
        header2.classList.remove("active-l");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
    })
}
let clickButton2 = () => {
    const header2 = document.querySelector("#header-fixed"); 
    const navMobie = document.querySelector(".side-nav");
    const wrapper = document.querySelector(".wrapper__body");
    const overlay = document.querySelectorAll(".overlay-full");
    const navClose = document.querySelector(".btn-close");
    const navBar = document.querySelector(".btn-nav-right");

    navBar.addEventListener("click", () => {
        navMobie.classList.add("active");
        wrapper.classList.add("active");
        overlay[0].classList.add("active");
        overlay[1].classList.add("active");
        header2.classList.add("active");
    })
   
    navClose.addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
        header2.classList.remove("active");
    })
    overlay[0].addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
        header2.classList.remove("active");
    })
    overlay[1].addEventListener("click", () => {
        navMobie.classList.remove("active");
        wrapper.classList.remove("active");
        overlay[0].classList.remove("active");
        overlay[1].classList.remove("active");
        header2.classList.remove("active");
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
(function webTransition () {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        console.log(scrolled);
         if (scrolled > 300 ) {
            document.querySelector("#header-fixed").setAttribute("style", "top: 0; background:white" );
            document.querySelector(".img-icon").setAttribute("src","http://zozothemes.com/html/epoint/demo/images/logo.png");
            
        }
         else if (scrolled < 150) {
            document.querySelector("#header-fixed").setAttribute("style", "top: 0; background: transparent; color:white" );
            document.querySelector(".img-icon").setAttribute("src","http://zozothemes.com/html/epoint/demo/images/logo-light.png");
        }
         else {
            document.querySelector("#header-fixed").setAttribute("style", "top: -25%; transition: all 0.5s;");
        } 
        let servicesItem = document.querySelectorAll(".services-item");
        if (scrolled > 1409.5999755859375) {
          
          servicesItem.forEach((item)=>{
              item.setAttribute("style", "transform: translateY(0);");
          })
        } else {
            servicesItem.forEach((item)=>{
            item.setAttribute("style", "transform: translateY(65px); ");
            })
        }


    });     
})();

// let strollerSlide = () => {
//     const slider = document.querySelectorAll('.scroll-images');
//     let isDown = false;
//     let startX;
//     let scrollLeft;
//     slider.forEach((slider) => {
//         slider.addEventListener('mousedown', (e) => {
//             isDown = true;
//             slider.classList.add('active');
//             startX = e.pageX - slider.offsetLeft;
//             scrollLeft = slider.scrollLeft;
//         });
//         slider.addEventListener('mouseleave', () => {
//             isDown = false;
//             slider.classList.remove('active');
//         });
//         slider.addEventListener('mouseup', () => {
//             isDown = false;
//             slider.classList.remove('active');
//         });
//         slider.addEventListener('mousemove', (e) => {
//             if (!isDown) return;
//             e.preventDefault();
//             const x = e.pageX - slider.offsetLeft;
//             const walk = (x - startX) * 3; //scroll-fast
//             slider.scrollLeft = scrollLeft - walk;
//             console.log(walk);
//         });
//     });

// }

// ----------------

// ---------------------



window.addEventListener("load", () => {
    superSlide('review','review-box','box','btnLeft','btnRight');
    superSlide('testimonials','testimonials__content','child','btnLeft-1','btnRight-1');
    superSlide('review-1','review-box-1','box-1','btnLeft-2','btnRight-2');
    // --------------HEADER----------------
    clickButton();
    clickButton2();
    //    -------------CAROUSEL--------------
    carousel();
    //StrollerSlide
})
