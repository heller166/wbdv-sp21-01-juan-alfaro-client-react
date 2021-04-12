import {FIND_QUIZ_BY_ID, FIND_QUIZZES_FOR_COURSE} from "../actions/quiz-actions";

const initialState = {
    quizzes: []
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_QUIZZES_FOR_COURSE:
            return {
                ...state,
                quizzes: action.quizzes
            }
        case FIND_QUIZ_BY_ID:
            return {
                ...state,
                quizzes: state.quizzes.map((quiz) => {
                    if(quiz._id === action.quiz._id) {
                        return action.quiz
                    } else {
                        return quiz
                    }
                })
            }
        default:
            return state
    }
}

export default quizReducer