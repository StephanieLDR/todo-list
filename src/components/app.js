import "materialize-css/dist/css/materialize.min.css";
//to use bootstrap: import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import List from "./list";
import AddItem from "./add_item";
import axios from "axios";


class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            list: []
        };

        this.base_url = "http://api.reactprototypes.com";
            this.api_key ="?key=ragsdale";
    }

    componentDidMount(){
        this.getListData();
    }

    async addItem(item) {
       try {
           await axios.post(`${this.base_url}/todos${this.api_key}`, item);
           this.getListData();
       } catch(error) {
           console.log("error adding item: ", error.response.data.error)
       }

    }

    async deleteItem(id){

       // console.log("Delete item with ID: ", id);
         const response = await axios.delete(`${this.base_url}/todos/${id}${this.api_key}`);
       // console.log("Delete response: ", response);
        this.getListData();
    }

    async getListData() {
        //make call to server to get data eventually
    //     axios.get(`${this.base_url}/todos${this.api_key}`).then(response => {
    //         console.log("Get Todos response: ", response.data.todos);
    //
    //         this.setState({
    //             list: response.data.todos
    //         });
    //     }).catch(error=> {
    //         console.log("Get Todos error: ", error.message);
    //     })

//same as the above but much cleaner, less code

        try {
            const response = await axios.get(`${this.base_url}/todos${this.api_key}`);
            this.setState({
                list: response.data.todos
            });
        } catch(error) {
            console.log("Get data error: ", error.message)
        }

     }

    render(){
        //console.log("App state: ", this.state);

        return (


            <div>
                <div className="container">
                   <h1 className="center deep-purple accent-1" >To Do List</h1>
                    <AddItem add={this.addItem.bind(this)} />
                    <List data={this.state.list} delete={this.deleteItem.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
