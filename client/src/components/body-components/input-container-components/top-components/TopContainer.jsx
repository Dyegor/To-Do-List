import React, { Component } from "react";
import ListNameInput from "../../input-container-components/input-components/ListNameInput";
import LeftDropdown from "../../dropdown-components/LeftDropdown";
import RightDropdown from "../../dropdown-components/RightDropdown";

export default class TopContainer extends Component {
    render() {
        return (
            <div className="box">
                <LeftDropdown />
                <ListNameInput />
                <RightDropdown />
            </div>
        );
    }
}