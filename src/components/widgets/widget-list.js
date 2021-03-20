import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
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
            <i onClick={createWidget} className="fas fa-plus fa-2x float-right"/>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"/>
                                    <i onClick={() => deleteWidget(widget.id)}
                                       className="fas fa-2x fa-trash float-right"/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => {
    return {
        createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
        deleteWidget: (item) => widgetActions.deleteWidget(dispatch, item),
        updateWidget: (widget) => widgetActions.updateWidget(dispatch, widget),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
    }

}


export default connect(stpm, dtpm)(WidgetList);
