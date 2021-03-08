import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>
                            <h5>Course Name</h5>
                        </td>
                        <td className="d-none d-md-table-cell">
                            <h5>Owned By</h5>
                        </td>
                        <td className="d-none d-lg-table-cell">
                            <h5>Last Modified</h5>
                        </td>
                        <td>
                            <i className="fas fa-2x fa-folder mx-2"/>
                            <i className="fas fa-2x fa-sort-alpha-up-alt mx-2"/>
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th mx-2"/>
                            </Link>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                key={course._id}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
