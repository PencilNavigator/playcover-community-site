const searchField = document.querySelector('.search-bar input');
const questionsList = document.querySelectorAll('.question .activator');

const filterQuestions = (searchTerm) => {
    Array.from(questionsList)
        .filter((question) => {
            return !question.textContent.toLowerCase().includes(searchTerm);
        })
        .forEach((question) => {
            question.parentElement.classList.add('hidden');
        });

    Array.from(questionsList)
        .filter((question) => {
            const checkQuestion = question.textContent.toLowerCase().includes(searchTerm);
            const checkAnswer = question.nextElementSibling.textContent.toLowerCase().includes(searchTerm);
            return checkQuestion || checkAnswer;
        })
        .forEach((question) => {
            question.parentElement.classList.remove('hidden');
        });
};

const resetFilter = () => {
    questionsList.forEach((question) => {
        question.parentElement.classList.remove('hidden');
    });
};

searchField.addEventListener('keyup', () => {
    const searchTerm = searchField.value.trim().toLowerCase();
    if (searchTerm) {
        filterQuestions(searchTerm);
    } else {
        resetFilter();
    }
});


document.querySelectorAll('form').forEach(e => {
    e.addEventListener('submit', form => {
        form.preventDefault()
        /*
        const searchTerm = searchField.value.trim().toLowerCase();
        questionsList.forEach(item => {
            if (!(item.textContent.toLowerCase().includes(searchTerm) || item.nextElementSibling.textContent.toLowerCase().includes(searchTerm))) {
                console.log(!(item.textContent.toLowerCase().includes(searchTerm) || item.nextElementSibling.textContent.toLowerCase().includes(searchTerm)))
                searchField.value = ''
            }
        })
        */
    })
})