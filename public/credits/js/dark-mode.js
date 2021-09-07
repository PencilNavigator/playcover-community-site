const htmlTag = document.querySelector("html");
const themeBtn = document.querySelector(".switch-theme");

themeBtn.addEventListener("click", () => {
	// stop bounce animation
	if (themeBtn.classList.contains("animate-bounce")) {
		themeBtn.classList.remove("animate-bounce");
	}
	let localTheme = localStorage.getItem("theme");
	if (localTheme == null || localTheme == "light") {
		localStorage.setItem("theme", "dark");
		document.querySelector("html").classList.add("dark");
	} else if (localTheme == "dark") {
		localStorage.setItem("theme", "light");
		document.querySelector("html").classList.remove("dark");
	}
});
