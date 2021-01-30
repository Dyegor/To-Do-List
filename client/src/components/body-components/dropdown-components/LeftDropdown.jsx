import React, { Component } from "react";
import LeftDropButton from "../buttons/LeftDropButton";
import LeftMenu from "../menu-components/LeftMenu";

export default class LeftDropdown extends Component {
    render() {
        return (
            <div className="left-dropdown">
                <LeftDropButton />
                <LeftMenu />
            </div>
        );
    }
}