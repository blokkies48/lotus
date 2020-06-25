window.addEventListener("scroll", function(){
    var header = document.querySelector("nav")
    header.classList.toggle("sticky", window.scrollY > 0)
})
window.addEventListener("scroll", function(){
    var header = document.querySelector(".nav-links")
    header.classList.toggle("onscroll", window.scrollY > 0)
})