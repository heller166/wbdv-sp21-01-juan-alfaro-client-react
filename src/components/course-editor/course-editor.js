import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer,
    // Redux extension debugging
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditor = ({history, params}) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    return (
        <Provider store={store}>
            <h1>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"/>
                </Link>
                Course Editor
                <i className="fas fa-times float-right"
                   onClick={() => history.goBack()}/>
            </h1>
            <div className="row">
                <div className="col-3">
                    <ModuleList/>
                </div>
                <div className="col-9">
                    {
                        moduleId !== undefined ?
                            <LessonTabs/> : <></>
                    }
                    {
                        lessonId !== undefined ?
                            <TopicPills/> : <></>
                    }
                </div>

            </div>
        </Provider>)
}
// const CourseEditor = () => {
//   return (
//     <h1>Course Editor</h1>
//   )
// }
export default CourseEditor

/*
import React from 'react'
import {Link, useHistory} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div className="container">
        <h1>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"/>
            </Link>
            Course Editor
            <i className="fas fa-times float-right"
               onClick={() => history.goBack()}/>
        </h1>
        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <div className="alert alert-success">
                        Module has been deleted.
                    </div>
                    <li className="list-group-item active">
                        Module 1
                        <i className="pull-right fa fa-trash"/>
                    </li>
                    <li className="list-group-item">
                        Module 2
                        <i className="pull-right fa fa-trash"/>
                    </li>
                    <li className="list-group-item">Module 3</li>
                    <li className="list-group-item">Module 4</li>
                    <li className="list-group-item">Module 5</li>
                    <li className="list-group-item">Module 6</li>
                    <li className="list-group-item">Module 7</li>
                </ul>
            </div>
            <div className="col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Build
                            <i className="pull-right fa fa-trash"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fa fa-plus"/>
                        </a>
                    </li>
                </ul>
                <br/>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fa fa-plus"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


export default CourseEditor
*/
