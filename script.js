// js to initialize aos library
AOS.init({
    duration: 1200,
});

const body = document.body;
const navBar = document.getElementById("navbar");
const sticky = navBar.offsetTop;
const navUl = document.getElementById('nav-links')
const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.menu-btn');
const page = document.getElementById('page-container');


// Wait for the entire page to load (including images and other resources)

function preloaderDelay() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
    body.style.overflow = "visible";

}
setTimeout(preloaderDelay, 5000);






//javascript to navigate on home section on reload
window.onload = function () {
    window.setTimeout(
        function () { window.scrollTo(0, 0); },
        10
    );
};


// js to toggle hamburger menu, add blur effect to the page and to disable scroll when menu is opened

function toggleCheck() {
    const isOpen = menu.classList.contains('open');
    navUl.style.display = isOpen ? 'flex' : '';
    navUl.classList.toggle('resp-nav', isOpen);
    page.classList.toggle('blur', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
}

function toggleMenu() {
    menu.classList.toggle('open');
    toggleCheck();
}

// js to set active state to the nav-link
function clickSingleA(a) {
    navLinks.forEach(link => link.classList.remove('active'));
    menu.classList.remove('open');
    toggleCheck();
    a.classList.add('active');
}

// Add a click event listener to toggle the menu
menu.addEventListener('click', toggleMenu);



// js Function to stick the nav bar 
function myFunction() {
    if (window.pageYOffset > sticky) {
        navBar.classList.add("sticky")
    }
    else {
        navBar.classList.remove("sticky");
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



// JS to record all the Data of the order Form to Google Sheet

const orderForm = document.forms['order-form'];
const allInputs = document.querySelectorAll(".order-ip-field");
const scriptURL = 'https://script.google.com/macros/s/AKfycbwB70Spa8zqtKpd5A1x-XgoI4a-bHFfrzw1qJV3FTZo84DMycb3e_fzwD4jOT2PA8l0/exec';

orderForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(orderForm), mode: "no-cors" })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .catch(error => console.error('Error!', error.message))
    allInputs.forEach((input) => {
        input.value = ''
    })
})





