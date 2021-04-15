import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizActions from "../../actions/quiz-actions";
import {connect} from "react-redux";

const QuizzesList = (
    {
        quizzes = [],
        findQuizzesForCourse,
        history
    }) => {
    const {courseId} = useParams();

    useEffect(() => {
        findQuizzesForCourse(courseId)
    }, [courseId])

    return(
        <div className="container">
            <h2>Quizzes</h2>
            <div className="list-group col-6">
                {
                    quizzes.map((quiz, index) => {
                        return(
                            <Link
                                key={index}
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                                <button onClick={() => history.push(`/courses/${courseId}/quizzes/${quiz._id}`)}
                                        type="button"
                                        className="btn btn-primary float-right">Start
                                </button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

const stpm = (state) => ({
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => {
    return {
        findQuizzesForCourse: (courseId) => quizActions.findQuizzesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)(QuizzesList);