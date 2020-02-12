import React, { useContext } from "react";
import { BasicItem } from "./BasicItem";
import { ListContext } from "../ListContext";

const BasicList = () => {
    const { items } = useContext(ListContext);
    return (
        <div>
            {items.map((item, index) => {
                let key = item.id ? item.id : index;
                return <BasicItem key={key} item={item} />;
            })}
        </div>
    );
};

export { BasicList };
