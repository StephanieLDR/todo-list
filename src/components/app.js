import "materialize-css/dist/css/materialize.min.css";
//to use bootstrap: import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import List from "./list";
import AddItem from "./add_item";
import listData from "../data/list";


class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            list: []
        };
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item) {
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    getListData() {
        //make call to server to get data eventually
        this.setState({
            list: listData,
        })
    }

    render(){
        console.log("App state: ", this.state);

        return (


            <div>
                <div className="container">
                   <h1 className="center deep-purple accent-1" >To Do List</h1>
                    <AddItem add={this.addItem.bind(this)} />
                    <List data={this.state.list} />
                </div>
            </div>
        );
    }
}

export default App;
