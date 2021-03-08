import './App.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
    const editorPaths = {
        coursesPath: "/courses/:layout/edit/:courseId",
        modulesPath: "/courses/:layout/edit/:courseId/modules/:moduleId",
        lessonsPath: "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
        topicsPath: "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
    }

    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact={true} component={Home}/>
                <Route path="/courses" component={CourseManager}/>
                <Route path={Object.values(editorPaths)}
                       exact={true}
                       render={(props) => <CourseEditor editorPaths={editorPaths} {...props}/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
