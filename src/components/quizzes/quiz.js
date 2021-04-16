import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import questionActions from "../../actions/question-actions";
import quizActions from "../../actions/quiz-actions";
import quizAttemptActions from "../../actions/quiz-attempts-actions";

const Quiz = (
    {
        questions = [],
        quizzes = [],
        findQuestionsForQuiz,
        findQuizById,
        updateQuestion,
        submitQuiz
    }) => {
    const {quizId} = useParams();
    const [quiz, setQuiz] = useState({title:""})
    const [graded, setGraded] = useState(false)

    useEffect(() => {
        findQuestionsForQuiz(quizId)
        findQuizById(quizId)
        const quizCache = quizzes.find((quiz) => quiz._id === quizId)
        if(quizCache) {
            setQuiz(quizCache)
        }
    },[quizId])

    return(
        <div className="container">
            <h2>{quiz.title}</h2>
            <ul className="list-group col-8">
                {
                    questions.map((question) =>
                        <li key={question._id} className="list-group-item">
                            <Question question={question}
                                      updateQuestion={updateQuestion}
                                      graded={graded}/>
                        </li>
                    )
                }
            </ul>
            <button onClick={
                () => {
                    setGraded(true)
                    submitQuiz(quizId, questions)
                }
            } type="button" className="btn btn-success">Submit
            </button>
        </div>
    );
}

const stpm = (state) => ({
    questions: state.questionReducer.questions,
    quizzes: state.quizReducer.quizzes
})

const dtpm = (dispatch) => {
    return {
        findQuestionsForQuiz: (quizId) => questionActions.findQuestionsForQuiz(dispatch, quizId),
        findQuizById: (quizId) => quizActions.findQuizById(dispatch, quizId),
        updateQuestion: (question) => questionActions.updateQuestion(dispatch, question),
        submitQuiz: (quizId, questions) => quizAttemptActions.createQuizAttempt(dispatch, quizId, questions)
    }
}

export default connect(stpm, dtpm)(Quiz);