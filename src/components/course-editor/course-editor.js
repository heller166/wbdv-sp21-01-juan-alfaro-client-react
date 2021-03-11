import React, {useEffect, useState} from 'react'
import {Link, useParams, Route} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";
import courseService from '../../services/course-service'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer,
    // Redux extension debugging
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditor = ({editorPaths}) => {
    const {layout, courseId} = useParams();
    const [currTitle, setCourseTitle] = useState('');

    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
    }, [courseId])

    return (
        <Provider store={store}>
            <h1>
                <Link to={`/courses/${layout}`}>
                    <FontAwesomeIcon icon="arrow-left"/>
                </Link>
                {currTitle}
            </h1>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <Route path={[
                        editorPaths.modulesPath,
                        editorPaths.lessonsPath,
                        editorPaths.topicsPath]} exact={true}>
                        <LessonTabs/>
                    </Route>
                    <Route path={[
                        editorPaths.lessonsPath,
                        editorPaths.topicsPath]} exact={true}>
                        <TopicPills/>
                    </Route>
                </div>
            </div>
        </Provider>)
}

export default CourseEditor
