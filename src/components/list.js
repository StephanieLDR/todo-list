import React from "react";
import Item from "./item";

export default (props) => {


//listElements is making new array

    const listElements = props.data.map((item, index)=>{
        console.log("Item: ", item);
        return <Item key={item._id} title={item.title}/>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}