import React from 'react';

const ParagraphWidget = ({widget, editing}) => {
    return (
        <>
            {
                editing &&
                <>
                    <textarea value={widget.text} className="form-control"/>
                </>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}



export default ParagraphWidget;