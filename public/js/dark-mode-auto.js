function checkDarkMode() {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return true;
	}
	return false;
}

if (checkDarkMode()) {
	if (localStorage.theme != "light" && localStorage.theme != "dark") {
		document.querySelector("html").classList.add("dark");
		localStorage.theme = "dark";
	}
}
