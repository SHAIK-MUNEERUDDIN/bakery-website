AOS.init({
    duration: 1200,
});


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}

// Call myFunction() to initialize the navbar
myFunction();

// Attach the onscroll event to the window
window.onscroll = function () { myFunction() };