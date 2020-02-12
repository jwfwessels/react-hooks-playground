import React from "react";
import { ListContextProvider } from "./ListContext";
import { ComplexList } from "./complex-implementation/ComplexList";
import { BasicList } from "./basic-implementation/BasicList";
const HooksWithContext = () => {
    return (
        <ListContextProvider>
            {/* implement version with HOC abstraction using generic dumb components */}
            <ComplexList />
            {/* implement version without HOC abstraction */}
            <BasicList />
        </ListContextProvider>
    );
};
export { HooksWithContext };
