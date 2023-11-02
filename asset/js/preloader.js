// preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("loaderAnim")
    this.setTimeout(()=>{
    preloader.style.display = "none"; // Hide preloader
    }, 700)
  });