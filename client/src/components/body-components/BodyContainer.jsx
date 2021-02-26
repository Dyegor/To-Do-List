import React, { Component } from "react";
import axios from 'axios';
import Context from "../context/Context";
import InputContainer from "./input-container-components/InputContainer";
import Footer from "../footer-components/Footer";

export default class BodyContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listName: '',
            existingListNames: [],

            item: {
                id: '',
                toDo: ''
            },
            listItems: []
        };

        this.onGetList = this.onGetList.bind(this);
    }

    componentDidMount() {
        axios.get('v1/names')
            .then(response => {
                const listItems = response.data;
                listItems.forEach(item => {
                    this.setState({
                        existingListNames: [...this.state.existingListNames, item.name]
                    })
                })
            })
    }

    onGetList(listName) {
        axios.get('v1/', { params: { listName: listName } })
            .then(response => {
                const toDoItems = response.data[0].listItems;

                this.setState({
                    listName: listName,
                    listItems: []
                });

                toDoItems.forEach(item => {
                    this.setState({
                        listItems: [...this.state.listItems, item]
                    });
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        const currentList = this.onGetList;

        return (
            <div className="main-container">
                <Context.Provider value={{currentList}}>
                    <InputContainer />
                </Context.Provider>
                <Footer />
            </div>
        );
    }
}