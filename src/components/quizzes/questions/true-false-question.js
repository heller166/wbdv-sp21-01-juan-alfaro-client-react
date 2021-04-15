import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState("")
    const [graded, setGraded] = useState(false)

    const evaluateListStyle = (choice) => {
        if(graded) {
            if (choice === question.correct) {
                return "list-group-item-success"
            } else if (choice === answer){
                return "list-group-item-danger"
            } else {
                return ""
            }
        }
    }

    return (
        <div>
            <h4>
                {question.question}
                {
                    graded &&
                    <>
                        {
                            answer === question.correct &&
                            <FontAwesomeIcon icon="check" color="green" pull="right"/>
                        }
                        {
                            answer !== question.correct &&
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
            <p>{`Your answer: ${answer}`}</p>
            <button onClick={
                () => setGraded(true)
            } type="button" className="btn btn-success">Grade
            </button>
        </div>
    )
}

export default TrueFalseQuestion;