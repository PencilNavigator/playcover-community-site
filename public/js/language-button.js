// grab everything we need
const btn = document.querySelector("button.language-button");
const menu = document.querySelector(".language-menu");

// add event listeners
btn.addEventListener("click", () => {
	menu.classList.toggle("-translate-y-2/4");
	menu.classList.toggle("scale-0");
	menu.classList.toggle("opacity-0");
});

const mobileLangBtn = document.querySelector("button.mobile-language-button");
const mobileLangMenu = document.querySelector(".mobile-language-menu");

// add event listeners
mobileLangBtn.addEventListener("click", () => {
	mobileLangMenu.classList.toggle("hidden");
});
