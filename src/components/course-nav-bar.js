import React, {useState} from 'react'
import {Link} from "react-router-dom";
import CourseAddButton from "./course-add-button";
import "./course-nav-bar.css"


const CourseNavbar = ({addCourse}) => {
    const [newCourseTitle, setNewCourseTitle] = useState("")

    const changeCourseTitle = () => {
        const newCourse = {
            title: newCourseTitle,
            owner: "Juanito",
            lastModified: new Date(Date.now()).toDateString()
        }
        addCourse(newCourse)
        setNewCourseTitle("")
    }

    return (
        <div className="container-fluid">
            <div className="navbar">
                <div className="col-1 d-none d-sm-block">
                    <i className="fa fa-bars fa-2x"/>
                </div>
                <div className="col-2 d-none d-lg-block">
                    <h4>Course Manager</h4>
                </div>
                <div className="col-7">
                    <input
                        onChange={(e) => setNewCourseTitle(e.target.value)}
                        value={newCourseTitle}
                        className="form-control"/>
                </div>
                <div className="col-1">
                    <CourseAddButton changeCourseTitle={changeCourseTitle}/>
                </div>
                <Link to="/" className="col-1">
                    <i className="fas fa-2x fa-home float-right"/>
                </Link>

            </div>
            <CourseAddButton
                changeCourseTitle={changeCourseTitle}
                className="button-stuck-bottom-right fa-4x"/>
        </div>
    )
}

export default CourseNavbar