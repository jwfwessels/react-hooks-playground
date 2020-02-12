import * as React from "react";

const GenericList = ({ renderItem, data }) => {
  const ListItemComponent = renderItem;

  return (
    <div>
      {data.map((item, index) => {
        let key = item.id ? item.id : index;
        return <ListItemComponent key={key} item={item} />;
      })}
    </div>
  );
};

export { GenericList };
