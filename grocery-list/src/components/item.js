import React from "react";
import "./item.css";

// { itemName: "", quantity: 0, quantityType: "", unitSize: 0, unitType: "" }

function Item(props) {
  return (
    <div className="item-style">
      <h3>
        <div className="item-quantity">
          {props.item.quantity && (
            <>
              {props.item.quantity}{" "}
              {props.item.quantityType && <>{props.item.quantityType}</>}
            </>
          )}
        </div>
        <div className="item-unit">
          {props.unitSize && (
            <>
              {props.item.unitSize} {props.item.unitType}
            </>
          )}
        </div>
        <div className="item-name">{props.item.itemName}</div>
      </h3>
      <button
        name={props.item.name}
        className="item-remove"
        onClick={props.onClick}
      >
        Remove
      </button>
    </div>
  );
}

export default Item;
