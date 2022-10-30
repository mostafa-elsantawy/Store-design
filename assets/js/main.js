/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById(`nav-menu`);
navToggle = document.getElementById(`nav-toggle`);
navClose = document.getElementById(`nav-close`);





/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click" , () =>{
    navMenu.classList.add("show-menu")
  })
  
}


/*===== MENU HIDDEN =====*/

/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}



/*=============== SHOW CART ===============*/
const cart = document.getElementById(`cart`);
cartShop = document.getElementById("cart-shop");
cartClose = document.getElementById("cart-close");




/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}
/*=============== SHOW LOGIN ===============*/
const login = document.getElementById(`login`);
loginButton = document.getElementById(`login-button`);
loginClose = document.getElementById(`login-close`);
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener("click", () => {
    login.classList.add(`show-login`);
  });
}
/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", () => {
    login.classList.remove(`show-login`);
  });
}
/*=============== HOME SWIPER ===============*/

var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: `true`,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  loop: `true`,
  slidesPerView: "auto",
  centeredSlides: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollUp = document.getElementById(`scroll-up`);
  // When the scroll is higher than 350 viewport hight, add the show-scroll class to a tag with scroll-top class.

  if (this.scrollY >= 350) scrollUp.classList.add(`show-scroll`);
  else scrollUp.classList.remove(`show-scroll`)};
  window.addEventListener(`scroll`, scrollUp);

/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/

/*=============== STYLE SWITCHER ===============*/
