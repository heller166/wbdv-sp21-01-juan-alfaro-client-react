import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from './course-card'

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div>
        <div className="navbar">
            <div className="container">
                <div className="col d-none d-md-block">
                    <h5>Recent Documents</h5>
                </div>
                <div className="col d-none d-md-block">
                    <h5>
                        Owned by Juanito
                        <i className="fa fa-sort-down mx-2"/>
                    </h5>
                </div>
                <div className="col">
                    <Link to="/courses/table">
                        <i className="fas fa-2x fa-list float-right mx-2"/>
                    </Link>
                    <i className="fas fa-2x fa-sort-alpha-down-alt float-right mx-2"/>
                    <i className="fas fa-2x fa-folder float-right mx-2"/>
                </div>
            </div>
        </div>
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}
                        key={course._id}
                    />)
            }
        </div>
    </div>

export default CourseGrid
