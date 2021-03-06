import React, { useContext } from "react";
import Context from "../../context/Context";
import deleteList from "../../../functions/deleteList";

export default function DeleteButton() {
    const { listName } = useContext(Context);
    return (
        <button
            onClick={deleteList.bind(this, listName)}
            type="submit"
            className="dropdown-item delete-list-button"
        >
            <i className="far fa-trash-alt fa-1x"></i>&nbsp;&nbsp;Delete list
        </button>
    );
}

