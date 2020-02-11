import React from "react";
import { FooContextProvider } from "./FooContext";
import { FooList } from "./FooList";

const HooksWithContext = () => {
  return (
    <FooContextProvider>
      <FooList />
    </FooContextProvider>
  );
};
export { HooksWithContext };
