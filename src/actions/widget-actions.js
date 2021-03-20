import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId, {type: "HEADING", size:1, text: "New Widget"})
        .then(theActualWidget => dispatch({
            type: CREATE_WIDGET,
            widget: theActualWidget
        }))
}
export const deleteWidget = (dispatch, item) =>
    widgetService.deleteWidget(item._id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widgetToDelete: item
        }))

export const updateWidget = (dispatch, widget) =>
    widgetService.updateWidget(widget._id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget
        }))

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(theWidgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets: theWidgets
        }))
}

const widgetActions = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default widgetActions;