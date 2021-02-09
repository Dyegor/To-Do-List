import React, { Component } from "react";
import RigthDropButton from "../buttons/RightDropButton";
import RightMenu from "../menu-components/RightMenu";

export default class RightDropdown extends Component {
    render() {
        return (
            <div className="right-dropdown">
                <RigthDropButton />
                <RightMenu />
            </div>
        );
    }
}