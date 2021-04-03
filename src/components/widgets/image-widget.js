import React from 'react'

const ImageWidget = ({widget, editing, editingWidget, setEditingWidget}) =>
    <div>
        {
            !editing &&
            <img width={widget.width} height={widget.height} src={widget.src}/>
        }
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
                        ...editingWidget, src: e.target.value
                    })
                } value={editingWidget.src} className="form-control"/>
                <input type={'number'} onChange={
                    (e) => setEditingWidget({
                        ...editingWidget, width: e.target.value
                    })
                } value={editingWidget.width} className="form-control"/>
                <input type={'number'} onChange={
                    (e) => setEditingWidget({
                        ...editingWidget, height: e.target.value
                    })
                } value={editingWidget.height} className="form-control"/>
            </>
        }
    </div>

export default ImageWidget