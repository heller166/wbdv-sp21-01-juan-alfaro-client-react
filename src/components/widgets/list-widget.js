import React from 'react'

const ListWidget = ({widget, editing, editingWidget, setEditingWidget}) => {
    return (
        <div>
            {
                editing &&
                <>
                    <select onChange={
                        (e) => setEditingWidget({
                            ...editingWidget, type: e.target.value
                        })
                    } value={editingWidget.type}>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LIST"}>List</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"HEADING"}>Heading</option>
                    </select>
                    <input onChange={
                        (e) => setEditingWidget({
                            ...editingWidget, ordered: e.target.checked
                        })
                    } checked={editingWidget.ordered} type="checkbox"/> Ordered
                    <br/>
                    Item list
                    <textarea onChange={
                        (e) => setEditingWidget({
                            ...editingWidget, text: e.target.value
                        })
                    } value={editingWidget.text} rows={10} className="form-control"/>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget