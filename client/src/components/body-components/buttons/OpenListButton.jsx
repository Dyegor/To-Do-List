import React, { useContext } from "react";
import Context from "../../context/Context";

export default function OpenListButton(props) {
    const { currentList } = useContext(Context);
    return (
        <button
            onClick={() => currentList(props.listName)}
            className="dropdown-item"
        >
            {props.listName}
        </button>
    );
}