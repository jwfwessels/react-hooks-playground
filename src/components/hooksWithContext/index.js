import React from "react";
import { ListContextProvider } from "./ListContext";
import { ComplexList as HOCList } from "./complex-implementation/ComplexList";
import { ParentOfList } from "./parent-component-implementation/ParentOfList";
import { BasicList } from "./basic-implementation/BasicList";

const Box = props => {
    return (
        <div style={{ border: "1px solid red", padding: "16px", margin: '32px' }}>
            {props.children}
        </div>
    );
};

const HooksWithContext = () => {
    return (
        <ListContextProvider>
            {/* implement version with HOC abstraction using generic dumb components */}
            <Box>
                <h2>HOC list</h2>
                <HOCList />
            </Box>
            {/* implement version without HOC abstraction */}
            <Box>
                <h2>Parent containing list</h2>
                <ParentOfList />
            </Box>
            <Box>
                <h2>Basic list</h2>
                <BasicList />
            </Box>
        </ListContextProvider>
    );
};
export { HooksWithContext };
