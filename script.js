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
setTimeout(preloaderDelay, 4000);






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


//js to display order sumbission and newsletter message

const orderMessage=document.getElementById("order-Submission-msg");
const NewsLetterMessage=document.getElementById("new-letter-msg")

function orderSubmission(){
    orderMessage.style.display="flex";
    setTimeout(function() {
        orderMessage.style.display = "none";
    }, 10000);
}

function NewsLetter(){
    NewsLetterMessage.style.display="flex";
    setTimeout(function() {
        NewsLetterMessage.style.display = "none";
    }, 10000);
}

function closeMsg(){
    orderMessage.style.display = "none";
    NewsLetterMessage.style.display="none";
}




// JS to record all the Data of the order Form to Google Sheet

const orderForm = document.forms['order-form'];
const allInputs = document.querySelectorAll(".order-ip-field");
const scriptURL = 'https://script.google.com/macros/s/AKfycbwB70Spa8zqtKpd5A1x-XgoI4a-bHFfrzw1qJV3FTZo84DMycb3e_fzwD4jOT2PA8l0/exec';

orderForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(orderForm), mode: "no-cors" })
    .then(response =>orderSubmission())
    .catch(error => alert("Unable to Submit the order, Please try again !"))
    allInputs.forEach((input) => {
        input.value = ''
    })
})



//js to record emails of the news letter subscription

const newsLetterForm = document.forms['news-letter'];
const newsLetterInput=document.getElementsByClassName("nl-input")[0];
console.log(newsLetterInput)
const script2URL = 'https://script.google.com/macros/s/AKfycbwidDwVnvDMSsS58_vBA1CTxOroGCt1SgD_AekuALGd00iBTVs2jgbVhB-oZpi-47SN/exec';
newsLetterForm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(script2URL, { method: 'POST', body: new FormData(newsLetterForm), mode: "no-cors" })
        .then(response =>NewsLetter())
        .catch(error => alert("Oops an unknown error has occured, Please try again !"))
        newsLetterInput.value = "";  
})





