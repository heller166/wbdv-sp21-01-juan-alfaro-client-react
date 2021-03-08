import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";

const LessonTabs = (
    {
        lessons=[],
        createLesson,
        updateLesson,
        deleteLesson,
        findLessonsForModule
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findLessonsForModule(moduleId)
    }, [moduleId])
    return(<div>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item" key={lesson._id}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li className="list-group-item" key={moduleId}>
                <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x"/>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({
    createLesson: (moduleId) => {
        lessonService.createLesson(moduleId, {title: 'New Lesson'})
            .then(lesson => dispatch({type: "CREATE_LESSON", lesson: lesson}))
    },
    updateLesson: (newItem) => {
        lessonService.updateLesson(newItem._id, newItem)
            .then(() => dispatch({type: "UPDATE_LESSON", updateLesson: newItem}))
    },
    deleteLesson: (lessonToDelete) => {
        lessonService.deleteLesson(lessonToDelete._id)
            .then(() => dispatch({type: "DELETE_LESSON", lessonToDelete: lessonToDelete}))
    },
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
    }
})

export default connect(stpm, dtpm)(LessonTabs)