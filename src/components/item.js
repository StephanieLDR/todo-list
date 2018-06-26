import React from "react";


export default (props)=> {
    //console.log("Item props: ", props);
    return (
        <li className="collection-item row">
            <div className="col s10">
            {props.title}
            </div>
            <div className="col s2 right-align">
            <button onClick={props.delete} className="btn deep-purple">Delete</button>
            </div>
        </li>
    )
}