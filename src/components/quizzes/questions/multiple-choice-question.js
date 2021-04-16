import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MultipleChoiceQuestion = ({question, updateQuestion, graded}) => {

    const evaluateListStyle = (choice) => {
       if(graded) {
           if (choice === question.correct) {
               return "list-group-item-success"
           } else if (choice === question.answer){
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
                {
                    question.choices.map((choice, index) => {
                        return (
                            <li className={`list-group-item ${evaluateListStyle(choice)}`}
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
            <p>{`Your answer: ${question.answer}`}</p>
        </div>
    )
}

export default MultipleChoiceQuestion;