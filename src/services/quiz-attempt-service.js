const QUIZZES_URL = 'https://wbdv-sp21-01-juan-alfaro-serve.herokuapp.com/api/quizzes';

const findQuizAttemptsForQuiz = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())
}

const createQuizAttempt = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const api = {
    findQuizAttemptsForQuiz,
    createQuizAttempt
}

export default api