// grab everything we need
const btn = document.querySelector("button.language-button");
const menu = document.querySelector(".language-menu");
const langIcon = document.querySelector(".language-menu-icon");
let isLangMenuOpen = false;

const showLangMenu = function (menu) {
	menu.classList.remove("-translate-y-2/4");
	menu.classList.remove("scale-0");
	menu.classList.remove("opacity-0");
	langIcon.classList.add("rotate-180");
};

const hideLangMenu = function (menu) {
	menu.classList.add("-translate-y-2/4");
	menu.classList.add("scale-0");
	menu.classList.add("opacity-0");
	langIcon.classList.remove("rotate-180");
};

btn.addEventListener("click", (e) => {
	if (menu.classList.contains("-translate-y-2/4")) {
		showLangMenu(menu);
		isLangMenuOpen = true;
	} else {
		hideLangMenu(menu);
		isLangMenuOpen = false;
	}
	toggleAutoCloser(autoCloser);
	e.stopPropagation();
});

// mobile lang menu
const mobileLangBtn = document.querySelector("button.mobile-language-button");
const mobileLangMenu = document.querySelector(".mobile-language-menu");

const toggleMobLangMenu = function () {
	document.querySelector(".mobile-lang-icon").classList.toggle("rotate-180");
	mobileLangMenu.classList.toggle("hidden");
};

mobileLangBtn.addEventListener("click", () => {
	toggleMobLangMenu();
});
