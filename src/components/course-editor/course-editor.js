import React, {useEffect, useState} from 'react'
import {Link, useParams, Route} from "react-router-dom";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import courseService from '../../services/course-service'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WidgetList from "../widgets/widget-list";

const CourseEditor = ({editorPaths}) => {
    const {layout, courseId} = useParams();
    const [currTitle, setCourseTitle] = useState('');

    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
    }, [courseId])

    return (
        <>
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
                    <Route path={[
                        editorPaths.topicsPath]} exact={true}>
                        <WidgetList/>
                    </Route>
                </div>
            </div>
        </>)
}

export default CourseEditor
