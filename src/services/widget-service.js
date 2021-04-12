const WIDGETS_URL = `http://wbdv-sp21-03-juan-alfaro-serve.herokuapp.com/api`

export const createWidget = (topicId, widget) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`)
        .then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    createWidget,
    findWidgetsForTopic,
    deleteWidget,
    updateWidget
}

export default api;