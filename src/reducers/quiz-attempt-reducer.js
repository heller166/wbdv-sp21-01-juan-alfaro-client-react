import {FIND_QUIZ_ATTEMPTS_FOR_QUIZ, CREATE_QUIZ_ATTEMPT} from "../actions/quiz-attempts-actions";

const initialState = {
    quizAttempts: []
}

const quizAttemptsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_QUIZ_ATTEMPTS_FOR_QUIZ:
            return {
                ...state,
                quizAttempts: action.quizAttempts
            }
        case CREATE_QUIZ_ATTEMPT:
            return {
                ...state,
                quizAttempts: [
                    ...state.quizAttempts,
                    action.quizAttempt
                ]
            }
        default:
            return state
    }
}

export default quizAttemptsReducer