import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import {connect} from "react-redux";
import questionActions from "../../actions/question-actions";
import quizActions from "../../actions/quiz-actions";

const Quiz = (
    {
        questions = [],
        quizzes = [],
        findQuestionsForQuiz,
        findQuizById
    }) => {
    const {quizId} = useParams();
    const [quiz, setQuiz] = useState({title:""})

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
                            <Question question={question}/>
                        </li>
                    )
                }
            </ul>
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
        findQuizById: (quizId) => quizActions.findQuizById(dispatch, quizId)
    }
}

export default connect(stpm, dtpm)(Quiz);