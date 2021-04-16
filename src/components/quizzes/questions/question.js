import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const Question = ({question, updateQuestion, graded}) => {
    return (
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    updateQuestion={updateQuestion}
                    graded={graded}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    updateQuestion={updateQuestion}
                    graded={graded}/>
            }
        </div>
    )
}

export default Question;