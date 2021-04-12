import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MultipleChoiceQuestion = ({question}) => {
    const [graded, setGraded] = useState(false)
    const [answer, setAnswer] = useState("")

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
            <ul class="list-group">
                {
                    question.choices.map((choice, index) => {
                        return (
                            <li class={`list-group-item ${evaluateListStyle(choice)}`}
                                key={index}>
                                <input onClick={() => {
                                    !graded && setAnswer(choice)
                                }}
                                       type="radio"
                                       id={question._id + choice + index}
                                       name={question._id}
                                       disabled={graded}/>
                                <label htmlFor={question._id + choice + index}>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
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

export default MultipleChoiceQuestion;