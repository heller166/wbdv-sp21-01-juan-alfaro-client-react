import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons'
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import QuizAttempts from "./components/quizzes/quiz-attempts";
import {combineReducers, createStore} from "redux";
import moduleReducer from "./reducers/module-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import widgetReducer from "./reducers/widget-reducer";
import questionReducer from "./reducers/question-reducer";
import quizReducer from "./reducers/quiz-reducer";
import {Provider} from "react-redux";
import quizAttemptsReducer from "./reducers/quiz-attempt-reducer";

library.add(fab, fas);


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
    questionReducer: questionReducer,
    quizReducer: quizReducer,
    quizAttemptsReducer: quizAttemptsReducer
})

const store = createStore(reducer,
    // Redux extension debugging
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


function App() {
    const editorPaths = {
        coursesPath: "/courses/:layout/edit/:courseId",
        modulesPath: "/courses/:layout/edit/:courseId/modules/:moduleId",
        lessonsPath: "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
        topicsPath: "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
    }

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container-fluid">
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/courses/:courseId/quizzes" component={QuizzesList}/>
                    <Route path="/courses/:courseId/quizzes/:quizId" component={Quiz} exact={true}/>
                    <Route path="/courses/:courseId/quizzes/:quizId/attempts" component={QuizAttempts}/>
                    <Route path="/courses" component={CourseManager}/>
                    <Route path={Object.values(editorPaths)}
                           exact={true}
                           render={(props) => <CourseEditor editorPaths={editorPaths} {...props}/>}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
