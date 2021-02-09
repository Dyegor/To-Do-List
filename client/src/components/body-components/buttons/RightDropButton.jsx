import React, { Component } from "react";

export default class RigtDropButton extends Component {
    render() {
        return (
            <button
                className="menu_btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fas fa-ellipsis-v fa-1x"></i>
            </button>
        );
    }
}