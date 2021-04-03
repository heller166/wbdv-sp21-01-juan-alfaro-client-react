import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import ImageWidget from "./image-widget";
import ListWidget from "./list-widget";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        updateWidget,
        deleteWidget,
        findWidgetsForTopic
    }) => {
    const {topicId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId])

    return (
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"/>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(editingWidget)
                                        setEditingWidget({})
                                    }} className="fas fa-2x fa-check float-right"/>
                                    <i onClick={() => {
                                        deleteWidget(editingWidget)
                                        setEditingWidget({})
                                    }} className="fas fa-2x fa-trash float-right"/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)}
                                   className="fas fa-2x fa-cog float-right"/>
                            }
                            {
                                ((widget.id === editingWidget.id && editingWidget.type === "LIST")
                                    ||
                                    (widget.id !== editingWidget.id && widget.type === "LIST"))
                                &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    editingWidget={editingWidget}
                                    setEditingWidget={setEditingWidget}
                                    widget={widget}/>
                            }
                            {
                                ((widget.id === editingWidget.id && editingWidget.type === "IMAGE")
                                    ||
                                    (widget.id !== editingWidget.id && widget.type === "IMAGE"))
                                &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    editingWidget={editingWidget}
                                    setEditingWidget={setEditingWidget}
                                    widget={widget}/>

                            }
                            {
                                ((widget.id === editingWidget.id && editingWidget.type === "HEADING")
                                    ||
                                    (widget.id !== editingWidget.id && widget.type === "HEADING"))
                                &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    editingWidget={editingWidget}
                                    setEditingWidget={setEditingWidget}
                                    widget={widget}/>

                            }
                            {
                                ((widget.id === editingWidget.id && editingWidget.type === "PARAGRAPH")
                                    ||
                                    (widget.id !== editingWidget.id && widget.type === "PARAGRAPH"))
                                &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    editingWidget={editingWidget}
                                    setEditingWidget={setEditingWidget}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        deleteWidget: (widget) => widgetActions.deleteWidget(dispatch, widget),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
    }

}


export default connect(stpm, dtpm)(WidgetList);


