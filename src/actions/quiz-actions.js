import quizService from "../services/quiz-service"

export const FIND_QUIZZES_FOR_COURSE = "FIND_QUIZZES_FOR_COURSE"
export const FIND_QUIZ_BY_ID = "FIND_QUIZ_BY_ID"

export const findQuizzesForCourse = (dispatch, courseId) => {
    quizService.findAllQuizzes()
        .then(theQuizzes => dispatch({
            type: FIND_QUIZZES_FOR_COURSE,
            quizzes: theQuizzes
        }))
}

export const findQuizById = (dispatch, quizId) => {
    quizService.findQuizById(quizId)
        .then(quiz => dispatch({
            type: FIND_QUIZ_BY_ID,
            quiz: quiz
        }))
}

const quizActions = {
    findQuizzesForCourse,
    findQuizById
}

export default quizActions;