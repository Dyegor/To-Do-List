import React, { useContext } from "react";
import Context from "../../context/Context";
import saveList from "../../../functions/saveList";

export default function SaveButton() {
    const { listName, listItems } = useContext(Context);
    
    return (
        <button
            onClick={saveList.bind(this, listName, listItems)}
            type="submit"
            className="dropdown-item save-list-button"
        >
            <i className="far fa-save"></i>&nbsp;&nbsp;Save List
        </button>
    );
}