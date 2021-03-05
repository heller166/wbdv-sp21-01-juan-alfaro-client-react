import React from "react";

const CourseAddButton = ({changeCourseTitle, className}) => {
    return (
        <span style={{color: "Red"}}>
            <i className={`fa fa-plus-circle fa-2x ${className}`}
               onClick={() => changeCourseTitle()}
               type="submit"/>
        </span>
    )
}

export default CourseAddButton