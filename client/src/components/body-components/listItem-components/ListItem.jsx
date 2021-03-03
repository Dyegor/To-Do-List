import React from "react";
import OpenListButton from "../buttons/OpenListButton";

export default function ListItem(props) {
    return (
        <li key={props.index}>
            <OpenListButton
                listName={props.listName}
            />
        </li>
    );
}