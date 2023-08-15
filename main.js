var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = ()=>{
// alert("hello")
nav_header.classList.toggle("active")
}

mobile_nav.addEventListener("click",()=>toggleNavbar());