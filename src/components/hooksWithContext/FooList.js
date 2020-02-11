import React, { useContext } from "react";
import { GenericList } from "./GenericList";
import { GenericItem } from "./GenericItem";
import { FooContext } from "./FooContext";

const FooItem = props => {
  const { deleteItem } = useContext(FooContext);
  return <GenericItem {...props} handler={deleteItem} />;
};

const FooList = () => {
  console.log("foo");
  const { items } = useContext(FooContext);
  console.log({ items });
  return <GenericList renderItem={FooItem} data={items} />;
};

export default FooList;
