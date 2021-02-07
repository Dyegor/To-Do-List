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
    }

    render() {

        return (
            <div className="main-container">
                <Context.Provider>
                    <InputContainer />
                </Context.Provider>
                <Footer />
            </div>
        );
    }
}