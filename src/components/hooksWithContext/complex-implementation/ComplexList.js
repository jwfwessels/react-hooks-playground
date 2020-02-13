import React, { useContext } from "react";
import { GenericList } from "./shared/GenericList";
import { ListContext } from "../ListContext";
import { ComplexItem } from "./ComplexItem";

const ComplexList = () => {
    const { items } = useContext(ListContext);
    console.log({ items });
    return <GenericList renderItem={ComplexItem} data={items} />;
};

export { ComplexList };
