import * as React from "react";

const GenericItem = ({ item, ...rest }) => {
  return (
    <div
      {...rest}
      onClick={e => {
        console.log("click");
        rest.handler && rest.handler(item.id, e);
      }}
    >
      {item.name}
    </div>
  );
};

export { GenericItem };
