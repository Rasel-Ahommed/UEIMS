new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    effect: 'coverflow',
    fade: "true",
    grabCursor: "true",
    autoplayDisableOnInteraction: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            centeredSlides: false,
            coverflowEffect: {

                depth: 0,

                rotate: 0,

                stretch: -10,
            }
        }
    },
    
    coverflowEffect: {
        depth: 80,
        rotate: 50,
        stretch: 20,
    }
})