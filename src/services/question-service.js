const QUIZZES_URL = 'https://wbdv-sp21-01-juan-alfaro-serve.herokuapp.com/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

const api = {
    findQuestionsForQuiz
}

export default api
