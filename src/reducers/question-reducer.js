import {FIND_QUESTIONS_FOR_QUIZ, UPDATE_QUESTION} from "../actions/question-actions";

const initialState = {
    questions: []
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_QUESTIONS_FOR_QUIZ:
            return {
                ...state,
                questions: action.questions
            }
        case UPDATE_QUESTION:
            return {
                ...state,
                questions: state.questions.map(question => {
                    if(question._id === action.question._id) {
                        return action.question
                    } else {
                        return question
                    }
                })
            }

        default:
            return state
    }
}

export default questionReducer
