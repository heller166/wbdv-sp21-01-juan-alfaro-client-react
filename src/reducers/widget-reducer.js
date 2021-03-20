import {CREATE_WIDGET, DELETE_WIDGET, FIND_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widget-actions"

const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    return widget._id !== action.widgetToDelete._id;
                })
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if(widget._id === action.widget._id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer