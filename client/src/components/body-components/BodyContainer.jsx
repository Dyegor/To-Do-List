import React, { Component } from "react";
import axios from 'axios';
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

    render() {
        return (
            <div className="main-container">
                <InputContainer />
                <Footer />
            </div>
        );
    }
}