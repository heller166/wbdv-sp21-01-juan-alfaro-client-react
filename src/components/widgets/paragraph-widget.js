import React from 'react';

const ParagraphWidget = ({widget, editing, editingWidget, setEditingWidget}) => {
    return (
        <>
            {
                editing &&
                <>
                    <select onChange={
                        (e) => setEditingWidget({
                            ...editingWidget, type: e.target.value
                        })
                    } value={editingWidget.type}>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"HEADING"}>Heading</option>
                    </select>
                    <textarea onChange={
                        (e) => setEditingWidget({
                            ...editingWidget, text: e.target.value
                        })
                    } value={editingWidget.text} className="form-control"/>
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