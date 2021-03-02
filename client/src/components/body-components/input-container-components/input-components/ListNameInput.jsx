import React, { useContext } from "react";
import Context from "../../../context/Context";

export default function ListNameInput() {
    const { currentListName, listName } = useContext(Context);

    return (
        <input
            onChange={currentListName}
            type="text"
            className="list-name"
            name="listName"
            placeholder="New List"
            value={listName}
            autoComplete="off"
        />
    );
}