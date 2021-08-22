// // grab everything we need
const mobileBtn = document.querySelector("button.mobile-button");
const mobileMenu = document.querySelector(".mobile-menu");

// add event listeners
mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
