const searchField = document.querySelector ('.search-bar input');
const questionsList = document.querySelectorAll ('.question .activator');

const filterQuestions = searchTerm => {
  Array.from (questionsList)
    .filter (question => {
      return !question.textContent.toLowerCase ().includes (searchTerm);
    })
    .forEach (question => {
      question.parentElement.classList.add ('hidden');
    });

  Array.from (questionsList)
    .filter (question => {
      return question.textContent.toLowerCase ().includes (searchTerm);
    })
    .forEach (question => {
      question.parentElement.classList.remove ('hidden');
    });
};

const resetFilter = () => {
  questionsList.forEach (question => {
    question.parentElement.classList.remove ('hidden');
  });
};

searchField.addEventListener ('keyup', () => {
  const searchTerm = searchField.value.trim ().toLowerCase ();
  if (searchTerm) {
    filterQuestions (searchTerm);
  } else {
    resetFilter ();
  }
});
