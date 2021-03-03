import React, { useContext } from "react";
import Context from "../../context/Context";
import ListItem from "../listItem-components/ListItem";

export default function LeftMenu() {
    const { existingListNames } = useContext(Context);
    return (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {existingListNames.map((listName, index) =>
                <ListItem
                    key={index}
                    listName={listName}
                />
            )}
        </ul>
    );
}