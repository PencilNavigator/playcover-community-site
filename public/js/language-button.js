// grab everything we need
const btn = document.querySelector("button.language-button");
const menu = document.querySelector(".language-menu");

// add event listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

const mobileLangBtn = document.querySelector("button.mobile-language-button");
const mobileLangMenu = document.querySelector(".mobile-language-menu");

// add event listeners
mobileLangBtn.addEventListener("click", () => {
	mobileLangMenu.classList.toggle("hidden");
});
