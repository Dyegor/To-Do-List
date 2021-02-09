import React, { Component } from "react";
import DeleteButton from "../buttons/DeleteButton";
import SaveButton from "../buttons/SaveButton";

export default class RightMenu extends Component {
    render() {
        return (
            <form className="dropdown-menu">
                <SaveButton />
                <DeleteButton />
            </form>
        );
    }
}