import React from "react";


export default (props) => {


//listElements is making new array

    const listElements = props.data.map((item, index)=>{
        return <li className="collection-item" key={index}>{item.title}</li>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}