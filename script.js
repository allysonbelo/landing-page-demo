document.querySelector(".menu").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show")
)

window.addEventListener("scroll", function(){
    let header = document.querySelector("header")
    header.classList.toggle("scrolling", window.scrollY > 0)
})