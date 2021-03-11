import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    {item.title}
                    <FontAwesomeIcon icon="edit" pull="right" size="lg" onClick={() => {
                        setEditing(true)
                    }}/>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <FontAwesomeIcon icon="check" pull="right" size="lg" onClick={() => {
                        setEditing(false)
                        updateItem(itemCache)
                    }}/>
                    <FontAwesomeIcon icon="times" pull="right" size="lg" onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }}/>
                </>
            }
        </>
    )
}

export default EditableItem