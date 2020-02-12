import React, { useContext } from "react";
import { ListContext } from "../ListContext";

const BasicItem = ({ item, ...rest }) => {
    const { deleteItem } = useContext(ListContext);
    return (
        <div
            onClick={e => {
                console.log("click");
                deleteItem && deleteItem(item.id, e);
            }}
        >
            {item.name}
        </div>
    );
};

export { BasicItem };
