let btn = document.getElementById("hamburger");
let nav = document.getElementById("nav");
btn.addEventListener("click", function() {
    btn.style.border = "black solid 2px"
    nav.classList.toggle('active')

});