import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, updateCourse, deleteCourse}) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title,
            lastModified: new Date(Date.now()).toDateString()
        }
        updateCourse(newCourse)
    }

    return (
            <div className="card card-margins" style={{width: "18rem", margin: "15px"}}>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing && <h5 className="card-title">{course.title}</h5>
                    }
                    {
                        editing &&
                        <h5 className="card-title">
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="form-control"/>
                        </h5>
                    }
                    <p className="card-text">Some quick example text to build on the card title and make up the
                        bulk of
                        the card's content.</p>
                    <Link to="/editor" className="btn btn-primary">
                        Go somewhere
                    </Link>
                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit fa-2x mx-2 float-right"/>
                    }
                    {
                        editing &&
                        <span>
                            <i onClick={() => saveCourse()} className="fas fa-check fa-2x mx-2 float-right"/>
                            <i onClick={() => deleteCourse(course)} className="fas fa-trash fa-2x mx-2 float-right"/>
                        </span>
                    }
                </div>
            </div>
    )
}

export default CourseCard