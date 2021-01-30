import React, { Component } from "react";

export default class LeftDropButton extends Component {
    render() {
        return (
            <button className="menu_btn left dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bars fa-1x"></i>
            </button>
        );
    }
}