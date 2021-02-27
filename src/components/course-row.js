import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    const removeCourse = (course) => {
        setEditing(false)
        deleteCourse(course)
    }

    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/editor">
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td className="d-none d-md-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>
                {
                    editing &&
                    <span>
                        <i onClick={() => saveCourse()} className="fas fa-2x fa-check"/>
                        <i onClick={() => removeCourse(course)} className="fas fa-2x fa-trash mx-2"/>
                    </span>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-2x fa-edit mx-2"/>
                }
            </td>
        </tr>)
}

export default CourseRow
