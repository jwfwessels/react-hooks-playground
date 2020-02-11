import React, { useContext } from "react";
import { GenericItem } from "./GenericItem";
import { ListContext } from "./ListContext";

const ComplexItem = props => {
    const { deleteItem } = useContext(ListContext);
    return <GenericItem {...props} handler={deleteItem} />;
};

export { ComplexItem }