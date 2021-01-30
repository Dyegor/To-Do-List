import React, { useContext } from "react";
import Context from "../../context/Context";

export default function LeftMenu() {
    const { currentList } = useContext(Context);
    const listToView = "Today Task's";
    return (
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
                <a href="list" onClick={() => currentList(listToView)} className="dropdown-item">
                    {listToView}
                </a>
            </li>
        </ul>
    );
}