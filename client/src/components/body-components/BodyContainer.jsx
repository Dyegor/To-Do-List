import React, { Component } from "react";
import uuid from 'react-uuid';
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

        this.onListNameChange = this.onListNameChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
        this.onItemAdd = this.onItemAdd.bind(this);
        this.onItemRemove = this.onItemRemove.bind(this);
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

    onListNameChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onItemChange(event) {
        this.setState({
            item: {
                id: uuid(),
                [event.target.name]: event.target.value
            }
        });
    }

    onItemAdd(event) {
        event.preventDefault();

        const { item } = this.state;
        this.setState({
            listItems: [...this.state.listItems, item],
            item: {
                id: '',
                toDo: ''
            }
        });

        document.getElementById('formItem').reset();
    }

    onItemRemove(key) {
        this.setState(prevState => ({
            listItems: prevState.listItems.filter(item => item.id !== key)
        }));
    }

    render() {
        const currentList = this.onGetList;
        const currentListName = this.onListNameChange;
        const currentItem = this.onItemChange;
        const addItem = this.onItemAdd;
        const removeItem = this.onItemRemove;
        const { listItems, existingListNames, listName } = this.state;

        return (
            <div className="main-container">
                <Context.Provider
                    value={{
                        currentList,
                        currentListName,
                        currentItem,
                        addItem,
                        removeItem,
                        listItems,
                        existingListNames,
                        listName
                    }}
                >
                    <InputContainer />
                </Context.Provider>
                <Footer />
            </div>
        );
    }
}