import React, { useContext } from "react";
import { GenericItem } from "./GenericItem";
import { FooContext } from "./FooContext";

const FooItem = props => {
    const { deleteItem } = useContext(FooContext);
    return <GenericItem {...props} handler={deleteItem} />;
};

export { FooItem }