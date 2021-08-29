// // grab everything we need
const mobileBtn = document.querySelector("button.mobile-button");
const mobileMenu = document.querySelector(".mobile-menu");

// add event listeners
mobileBtn.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
});

const htmlTagMob = document.querySelector("html");
const themeBtnMob = document.querySelector(".switch-theme-mobile");

// add event listeners
themeBtnMob.addEventListener("click", () => {
	let htmlClasses = htmlTagMob.classList;
	if (localStorage.theme == "dark") {
		htmlClasses.remove("dark");
		localStorage.removeItem("theme");
	} else {
		htmlClasses.add("dark");
		localStorage.theme = "dark";
	}
});
