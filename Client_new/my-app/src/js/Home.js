import { Swiper} from 'swiper/react';
import 'swiper/css';

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar2.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar2.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

//to do for Pavas
var logged = false;
document.querySelector('#login-btn').onclick = () => {
    if (logged) {
        //To do for Pavas
        window.location.href = "file:///C:/Users/vashi/OneDrive/Desktop/OOP/pages/profile.html";
    }
    else {
        window.location.href = "file:///C:/Users/vashi/OneDrive/Desktop/OOP/pages/login.html";
    }
}

var logged_manager = false;
var vis = document.getElementById("add-btn");
if (logged_manager) {
    document.querySelector('#add-btn').onclick = () => {
        //to do for Pavas
        window.location.href = "file:///C:/Users/vashi/OneDrive/Desktop/OOP/pages/login.html";
    }
}
else {
    vis.style.display = "none";
}


let navbar2 = document.querySelector('.navbar2');

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar2.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});