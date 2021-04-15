const QUIZZES_URL = 'https://wbdv-sp21-01-juan-alfaro-serve.herokuapp.com/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

const api = {
    findAllQuizzes, findQuizById
}

export default api
