import React, { useContext } from "react";
import { GenericList } from "./GenericList";
import { FooContext } from "./FooContext";
import { FooItem } from "./FooItem";

const FooList = () => {
    console.log("foo");
    const { items } = useContext(FooContext);
    console.log({ items });
    return <GenericList renderItem={FooItem} data={items} />;
};

export { FooList };
