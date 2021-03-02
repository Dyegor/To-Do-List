import React, { useContext } from "react";
import Context from "../../../context/Context";

export default function ItemInput() {
    const { currentItem, addItem } = useContext(Context);

    return (
        <form className="item" id="formItem">
            <input
                onChange={currentItem}
                type="text"
                className="newInput"
                name="toDo"
                placeholder="New Task"
                autoComplete="off"
            />
            <button onClick={addItem} className="checkButton">
                <i className="fas fa-check fa-sm"></i>
            </button>
        </form>
    );
}