// grab everything we need
const btn = document.querySelector("button.language-button");
const menu = document.querySelector(".language-menu");

// add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
