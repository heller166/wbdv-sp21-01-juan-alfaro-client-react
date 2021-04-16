import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TrueFalseQuestion = ({question, updateQuestion, graded}) => {

    const evaluateListStyle = (choice) => {
        if (graded) {
            if (choice === question.correct) {
                return "list-group-item-success"
            } else if (choice === question.answer) {
                return "list-group-item-danger"
            } else {
                return ""
            }
        }
    }

    const setAnswer = (answer) => {
        question.answer = answer
        updateQuestion(answer)
    }

    return (
        <div>
            <h4>
                {question.question}
                {
                    graded &&
                    <>
                        {
                            question.answer === question.correct &&
                            <FontAwesomeIcon icon="check" color="green" pull="right"/>
                        }
                        {
                            question.answer !== question.correct &&
                            <FontAwesomeIcon icon="times" color="red" pull="right"/>
                        }
                    </>
                }
            </h4>
            <ul className="list-group">
                <li className={`list-group-item ${evaluateListStyle("true")}`}>
                    <input onClick={() => {
                        !graded && setAnswer("true")
                    }}
                           type="radio"
                           id={question._id + "TRUE"}
                           name={question._id}
                           disabled={graded}/>
                    <label htmlFor={question._id + "TRUE"}>
                        TRUE
                    </label>
                </li>
                <li className={`list-group-item ${evaluateListStyle("false")}`}>
                    <input onClick={() => {
                        !graded && setAnswer("false")
                    }}
                           type="radio"
                           id={question._id + "FALSE"}
                           name={question._id}
                           disabled={graded}/>
                    <label htmlFor={question._id + "FALSE"}>
                        FALSE
                    </label>
                </li>
            </ul>
            <br/>
            <p>{`Your answer: ${question.answer}`}</p>
        </div>
    )
}

export default TrueFalseQuestion;