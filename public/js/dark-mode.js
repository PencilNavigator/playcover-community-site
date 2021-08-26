const htmlTag = document.querySelector("html");
const themeBtn = document.querySelector(".switch-theme");

// add event listeners
// themeBtn.addEventListener("click", () => {
// 	let htmlClasses = htmlTag.classList;
// 	if (localStorage.theme == "dark") {
// 		htmlClasses.remove("dark");
// 		localStorage.removeItem("theme");
// 	} else {
// 		htmlClasses.add("dark");
// 		localStorage.theme = "dark";
// 	}
// });

themeBtn.addEventListener("click", () => {
	let htmlClasses = htmlTag.classList;
	if (localStorage.theme == "dark") {
		htmlClasses.remove("dark");
		localStorage.theme = "light";
	} else {
		htmlClasses.add("dark");
		localStorage.theme = "dark";
	}
});
