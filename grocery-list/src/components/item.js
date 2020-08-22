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
        {/* examples: 3 each, 1 loaf, 1 dozen, 1 gallon */}
        <div className="item-quantity" onDoubleClick={props.onDoubleClick}>
          {props.item.quantity && (
            <>
              {props.item.quantity}{" "}
              {props.item.quantityType && <>{props.item.quantityType}</>}
            </>
          )}
        </div>

        {/* examples: 14 oz. (can) - gets combined into the "name" feature   */}
        <div className="item-size" onDoubleClick={props.onDoubleClick}>
          {props.sizeInt && (
            <>
              {props.item.sizeInt} {props.item.sizeType}
            </>
          )}
        </div>

        {/* examples: "canned tomatoes"  "Trix cereal" "lunchmeat" */}
        {props.editable ? (
          <input
            type="text"
            defaultValue={props.item.itemName}
            onKeyPress={(e) => props.onKeyPress(e, props.index)}
          />
        ) : (
          <div className="item-name" onDoubleClick={props.onDoubleClick}>
            {props.item.itemName}
          </div>
        )}
      </h3>

      <button
        name={props.item.name}
        className="item-remove"
        onClick={(e) => props.onClick(e, props.index)}
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
