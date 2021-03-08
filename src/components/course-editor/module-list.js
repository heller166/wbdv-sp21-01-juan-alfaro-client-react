import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
// import {findModulesForCourse, createModule} from "../services/module-service";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        modules = [],
        createModule,
        updateModule,
        deleteModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [courseId])
    return (<div>
        <ul>
            <li>layout: {layout}</li>
            <li>courseId: {courseId}</li>
            <li>moduleId: {moduleId}</li>
            <li>lessonId: {lessonId}</li>
            <li>topicId: {topicId}</li>
        </ul>
        <ul className="list-group">
            {
                modules.map(module =>
                    <li className="list-group-item" key={module._id}>
                        <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                            deleteItem={deleteModule}
                            updateItem={updateModule}
                            item={module}/>
                    </li>
                )
            }
            <li className="list-group-item" key={courseId}>
                <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x"/>
            </li>
        </ul>
    </div>)
}

const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

const dtpm = (dispatch) => ({
    createModule: (courseId) => {
        moduleService.createModule(courseId, {title: 'New Module'})
            .then(module => dispatch({type: "CREATE_MODULE", module: module}))

    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(() => dispatch({type: "UPDATE_MODULE", updateModule: newItem}))
    },
    deleteModule: (moduleToDelete) => {
        moduleService.deleteModule(moduleToDelete._id)
            .then(() => dispatch({type: "DELETE_MODULE", moduleToDelete: moduleToDelete}))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    }
})

export default connect(stpm, dtpm)(ModuleList)
