// dark mode activator
if (localStorage.getItem("theme") == "dark") {
	if (!document.querySelector("html").classList.contains("dark")) {
		document.querySelector("html").classList.add("dark");
	}
} else if (localStorage.getItem("theme") == "light") {
	if (document.querySelector("html").classList.contains("dark")) {
		document.querySelector("html").classList.remove("dark");
	}
}
