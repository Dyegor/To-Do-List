import React, { useContext } from "react";
import Context from "../../../context/Context";
import RemoveItemButton from "../../buttons/RemoveItemButton";
import Checkbox from "../../checkbox-components/Checkbox";
import Paragraph from "../../paragraph-components/Paragraph";

export default function DisplayItems() {
    const { listItems } = useContext(Context);
    return (
        listItems.map(item =>
            <div className="item" key={item.id} >
                <Checkbox />
                <Paragraph toDo={item.toDo} />
                <RemoveItemButton itemId={item.id} />
            </div>
        )
    );
}