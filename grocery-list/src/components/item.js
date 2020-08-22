import React from "react";
import "./item.css";

// sizeInt
// sizeType
// quantity
// quantityType

function Item(props) {
  return (
    <div className="item-style">
      <h3>
        {props.item.quantityEditable ? (
          <input
            type="text"
            defaultValue={props.item.quantity}
            onKeyPress={(e) => props.onKeyPress(e, props.index, "quantity")}
          />
        ) : (
          <div
            className="item-quantity"
            onDoubleClick={() => props.toggle(props.index, "quantityEditable")}
          >
            {props.item.quantity && <>{props.item.quantity}</>}
            {!props.item.quantity && <>0</>}
          </div>
        )}

        {props.item.nameEditable ? (
          <input
            type="text"
            defaultValue={props.item.name}
            onKeyPress={(e) => props.onKeyPress(e, props.index, "name")}
          />
        ) : (
          <div
            className="item-name"
            onDoubleClick={() => props.toggle(props.index, "nameEditable")}
          >
            {props.item.name && <>{props.item.name}</>}
            {!props.item.name && <>Enter Item</>}
          </div>
        )}
      </h3>

      <button
        name={props.item.name}
        className="item-remove"
        onClick={(e) => props.removeItem(props.index)}
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
