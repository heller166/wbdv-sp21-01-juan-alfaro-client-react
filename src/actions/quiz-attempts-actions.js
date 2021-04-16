import quizAttemptService from '../services/quiz-attempt-service'

export const FIND_QUIZ_ATTEMPTS_FOR_QUIZ = "FIND_QUIZ_ATTEMPTS_FOR_QUIZ"
export const CREATE_QUIZ_ATTEMPT = "CREATE_QUIZ_ATTEMPT"

export const findQuizAttemptsForQuiz = (dispatch, quizId) =>
    quizAttemptService.findQuizAttemptsForQuiz(quizId)
        .then(theAttempts => dispatch({
            type: FIND_QUIZ_ATTEMPTS_FOR_QUIZ,
            quizAttempts: theAttempts
        }))

export const createQuizAttempt = (dispatch, quizId, questions) =>
    quizAttemptService.createQuizAttempt(quizId, questions)
        .then(attempt => dispatch({
            type: CREATE_QUIZ_ATTEMPT,
            quizAttempt: attempt
        }))

const quizAttemptActions = {
    findQuizAttemptsForQuiz,
    createQuizAttempt
}

export default quizAttemptActions
