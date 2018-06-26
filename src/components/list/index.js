import React from "react";
import Item from "./item";
import "./list.css";


export default (props) => {

    //console.log("item props: ", props);
//listElements is making new array

    const listElements = props.data.map((item, index)=>{
        //console.log("Item in list index: ", item);
        return <Item key={item._id} complete={item.complete} title={item.title} delete={props.delete.bind(this, item._id)}/>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
}