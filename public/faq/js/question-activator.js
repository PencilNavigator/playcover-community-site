class activator {
	constructor(container) {
		this.container = container;
		this.activator = container.querySelector(".activator");
		this.answer = container.querySelector(".answer");
		this.icon = container.querySelector(".q-icon");
	}
	init() {
		this.activator.addEventListener("click", () => {
			this.icon.classList.toggle("rotate-180");
			this.answer.classList.toggle("hidden");

			this.activator.classList.toggle("dark:shadow");
			this.activator.classList.toggle("border-transparent");
			this.activator.classList.toggle("dark:border-transparent");
			this.activator.classList.toggle("bg-gray-300");
			this.activator.classList.toggle("dark:bg-[#1a1a1a]");
		});
	}
}

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	const instance = new activator(question);
	instance.init();
});
