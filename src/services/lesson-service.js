import {NEU_USERNAME} from "./course-service";

const MODULES_URL = `https://wbdv-generic-server.herokuapp.com/api/${NEU_USERNAME}/modules`
const LESSONS_URL = `https://wbdv-generic-server.herokuapp.com/api/${NEU_USERNAME}/lessons`

export const createLesson = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

const api = {
    createLesson,
    findLessonsForModule,
    deleteLesson,
    updateLesson
}

export default api;