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




//javascript to navigate on home section on reload
window.onload = function () {
    window.setTimeout(
        function () { window.scrollTo(0, 0); },
        10
    );
};





//javascript to make nav link active on click
function clickSingleA(a) {
    items = document.querySelectorAll('nav-link.active');
    a.className = 'nav-link active';

}


// js to Highlight active section in navbar
$(document).ready(function () {
    var scrollTimeout;

    $(window).scroll(function () {
        clearTimeout(scrollTimeout); // Clear any previous timeouts
        scrollTimeout = setTimeout(function () {
            $('section').each(function () {
                if ($(window).scrollTop() >= $(this).offset().top - 300) {
                    var id = $(this).attr('id');
                    $('nav li a').removeClass('active');
                    $('nav').find('a[href="#' + id + '"]').addClass('active');
                }
            });
        }, 50);
    });
});

