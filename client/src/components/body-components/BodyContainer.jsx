import React, { Component } from "react";
import Footer from "../footer-components/Footer";
import InputContainer from "./input-container-components/InputContainer";

export default class BodyContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <InputContainer />
                <Footer />
            </div>
        );
    }
}