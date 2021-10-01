// toggle btn, #links targeted 
// add .show to toggle, and .show-links links
// close toggle on scroll

const navToggle = document.querySelector(".nav-toggle i");
const links = document.querySelector(".nav-links");

navToggle.addEventListener('click', function(){
    navToggle.classList.toggle("show");
    links.classList.toggle("show-links");
});

var prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
    var currentScroll = window.scrollY;
    if (currentScroll > prevScrollPos) {
        navToggle.classList.remove("show");
        links.classList.remove("show-links");

    }
});


// BACK TO TOP BUTTON

const topBtn = document.querySelector("button.to-top");

// hide and show button on scroll
window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop > 600 || document.body.scrollTop > 600) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// When the user clicks on the button, scroll to the top of the document
topBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
});

