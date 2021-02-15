import React from "react";

export default function LeftDropButton() {
    return (
        <button
            className="menu_btn left dropdown-toggle"
            type="submit"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            <i className="fas fa-bars fa-1x"></i>
        </button>
    );
}