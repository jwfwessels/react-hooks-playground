import React, { useContext } from "react";
import { GenericList } from "./GenericList";
import { ListContext } from "./ListContext";
import { ComplexItem } from "./ComplexItem";

const ComplexList = () => {
    console.log("foo");
    const { items } = useContext(ListContext);
    console.log({ items });
    return <GenericList renderItem={ComplexItem} data={items} />;
};

export { ComplexList };
