// js to initialize aos library
AOS.init({
    duration: 1200,
});


const menu = document.querySelector('.menu-btn');
const page = document.getElementById('page-container');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;


//javascript to navigate on home section on reload
window.onload = function () {
    window.setTimeout(
        function () { window.scrollTo(0, 0); },
        10
    );
};


// js to toggle hamburger menu, add blur effect to the page and to disable scroll when menu is opened
function toggleMenu() {
    menu.classList.toggle('open');
    page.classList.toggle('blur');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// js to set active state to the nav-link
function clickSingleA(a) {
    navLinks.forEach(link => link.classList.remove('active'));
    toggleMenu();
    a.classList.add('active');
}

// Add a click event listener to toggle the menu
menu.addEventListener('click', toggleMenu);



// js Function to stick the nav bar 
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





