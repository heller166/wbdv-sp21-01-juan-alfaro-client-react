import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        linkClassName
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (

        <NavLink to={to} className={linkClassName} activeClassName="active">
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