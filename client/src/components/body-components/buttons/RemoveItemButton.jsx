import React, { useContext } from "react";
import Context from "../../context/Context";

export default function RemoveItemButton(props) {
    const { removeItem } = useContext(Context);
    return (
        <button
            className="delete-btn"
            type="submit"
            onClick={removeItem.bind(this, props.itemId)}
        >
            <i className="far fa-trash-alt fa-sm"></i>
        </button>
    );
}