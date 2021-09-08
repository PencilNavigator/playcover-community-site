// auto detect dark mode
if (localStorage.getItem("theme") == null) {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		localStorage.setItem("theme", "dark");
		document.querySelector("html").classList.add("dark");
	}
}

// theme switcher from local storage
if (localStorage.getItem("theme") == "dark") {
	if (!document.querySelector("html").classList.contains("dark")) {
		document.querySelector("html").classList.add("dark");
	}
} else if (localStorage.getItem("theme") == "light") {
	if (document.querySelector("html").classList.contains("dark")) {
		document.querySelector("html").classList.remove("dark");
	}
}
