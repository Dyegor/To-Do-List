import React, { Component } from "react";
import DisplayItems from "./input-components/DisplayItems";
import ItemInput from "./input-components/ItemInput";
import TopContainer from "./top-components/TopContainer";

export default class InputContainer extends Component {
    render() {
        return (
            <div className="box">
                    <TopContainer />
                    <DisplayItems />
                    <ItemInput />
            </div>
        );
    }
}