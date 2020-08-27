import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Item(props) {
  return (
    <Row
      data-status={props.item.purchased}
      className="col-xs-12 item-style shadow-sm bg-light rounded mb-1 "
    >
      <button
        name={props.item.name}
        className="fa fa-check-square btn-success edit-button"
        onClick={() => props.toggle(props.index, "purchased")}
      >
        Purchase
      </button>

      {props.item.quantityEditable ? (
        <input
          type="text"
          defaultValue={props.item.quantity}
          onKeyPress={(e) => props.onKeyPress(e, props.index, "quantity")}
        />
      ) : (
        <div
          className={
            props.item.purchased ? "purchased item-quantity" : "item-quantity"
          }
          onDoubleClick={() => props.toggle(props.index, "quantityEditable")}
        >
          {props.item.quantity && <>{props.item.quantity}</>}
          {!props.item.quantity && <></>}
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
          className={props.item.purchased ? "purchased item-name" : "item-name"}
          onDoubleClick={() => props.toggle(props.index, "nameEditable")}
        >
          {props.item.name && (
            <div className="name-text">{props.item.name}</div>
          )}
          {!props.item.name && <>Enter Item</>}
        </div>
      )}
      <button
        name={props.item.name}
        className="fa fa-pencil-square btn-secondary edit-button"
        onClick={() => props.editItem(props.index)}
      >
        Edit
      </button>
      <button
        name={props.item.name}
        className="fa fa-trash-o btn-danger remove-button ml-auto"
        onClick={() => props.removeItem(props.index)}
      >
        Remove
      </button>
    </Row>
  );
}

export default Item;
