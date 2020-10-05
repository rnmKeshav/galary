import React from "react";

const Item = ({item_value}) => {
  return (
    <div className="item" id="listItem">
      {item_value}
    </div>
  );
}

export default Item;