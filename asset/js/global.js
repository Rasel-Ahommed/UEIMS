// scroll effect 
window.addEventListener("scroll", function() {
    let scrollShow = document.querySelectorAll(".scrollShow");
    for (let i = 0; i <= scrollShow.length - 1; i++) {
        let windowHeigth = window.innerHeight;
        let
            sectionHeigth = scrollShow[i].getBoundingClientRect().top;
        let scrollHeight = 150;
        if (sectionHeigth < windowHeigth - scrollHeight) {
            scrollShow[i].classList.add("active");
        } else {
            scrollShow[i].classList.remove("active");
        }
    }
  });