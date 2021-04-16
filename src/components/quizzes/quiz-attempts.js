import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import quizActions from "../../actions/quiz-actions";
import quizAttemptActions from "../../actions/quiz-attempts-actions";

const QuizAttempts = (
    {
        quizAttempts = [],
        quizzes,
        findQuizById,
        findQuizAttemptsForQuiz,
    }) => {
    const {quizId} = useParams();
    const [quiz, setQuiz] = useState({title: ""})

    useEffect(() => {
        findQuizAttemptsForQuiz(quizId)
        findQuizById(quizId)
        const quizCache = quizzes.find((quiz) => quiz._id === quizId)
        if (quizCache) {
            setQuiz(quizCache)
        }
    }, [quizId])

    return (
        <div className="container">
            <h2>{quiz.title}</h2>
            <ul>
                {
                    quizAttempts.map((attempt, index) =>
                        <li key={index} className="list-group-item">
                            <h4>{`Attempt #${index + 1}`}</h4>
                            <h4>{`Score: ${attempt.score}`}</h4>
                            <ul className="list-group col-8">
                                {
                                    attempt.answers.map((question) =>
                                        <li key={question._id} className="list-group-item">
                                            <Question question={question}
                                                      updateQuestion={(question)=>true}
                                                      graded={true}/>
                                        </li>
                                    )
                                }
                            </ul>
                        </li>
                    ).reverse()
                }
            </ul>
        </div>
    );
}

const stpm = (state) => ({
    quizAttempts: state.quizAttemptsReducer.quizAttempts,
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => {
    return {
        findQuizAttemptsForQuiz: (quizId) => quizAttemptActions.findQuizAttemptsForQuiz(dispatch, quizId),
        findQuizById: (quizId) => quizActions.findQuizById(dispatch, quizId)
    }
}

export default connect(stpm, dtpm)(QuizAttempts);