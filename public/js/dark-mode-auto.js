function checkDarkMode() {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return true;
	}
	return false;
}

if (localStorage.getItem("theme") == null) {
	if (checkDarkMode()) {
		document.querySelector("html").classList.add("dark");
	}
}
