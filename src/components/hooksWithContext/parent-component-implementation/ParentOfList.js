import React, { useContext } from "react";
import { GenericItem } from "../complex-implementation/shared/GenericItem";
import { GenericList } from "../complex-implementation/shared/GenericList";
import { ListContext } from "../ListContext";

const ParentOfList = () => {
    const { items, deleteItem } = useContext(ListContext);

    function ListItem(props) {
        return <GenericItem {...props} handler={deleteItem} />;
    }

    return (
        <>
            {/* other stuff can go here goes here */}
            <GenericList renderItem={ListItem} data={items} />
            {/* other stuff can go here goes here */}
        </>
    );
};

export { ParentOfList };
