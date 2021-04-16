import questionService from '../services/question-service'

export const FIND_QUESTIONS_FOR_QUIZ = "FIND_QUESTIONS_FOR_QUIZ"
export const UPDATE_QUESTION = "UPDATE_QUESTION"

export const findQuestionsForQuiz = (dispatch, quizId) =>
    questionService.findQuestionsForQuiz(quizId)
        .then(theQuestions => dispatch({
            type: FIND_QUESTIONS_FOR_QUIZ,
            questions: theQuestions
        }))

export const updateQuestion = (dispatch, question) =>
    dispatch({
        type: UPDATE_QUESTION,
        question: question
    })

const questionActions = {
    findQuestionsForQuiz,
    updateQuestion
}

export default questionActions
