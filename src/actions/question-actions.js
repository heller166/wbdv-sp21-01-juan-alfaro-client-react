import questionService from '../services/question-service'

export const FIND_QUESTIONS_FOR_QUIZ = "FIND_QUESTIONS_FOR_QUIZ"

export const findQuestionsForQuiz = (dispatch, quizId) =>
    questionService.findQuestionsForQuiz(quizId)
        .then(theQuestions => dispatch({
            type: FIND_QUESTIONS_FOR_QUIZ,
            questions: theQuestions
        }))

const questionActions = {
    findQuestionsForQuiz
}

export default questionActions
