import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialNewQuantity = "";
const initialNewName = "";

const AddItem = (props) => {
  const [newQuantity, setNewQuantity] = useState(initialNewQuantity);
  const [newName, setNewName] = useState(initialNewName);

  const quantityRef = useRef();
  const itemNameRef = useRef();
  const addItemRef = useRef();
  const clearRef = useRef();

  useEffect(() => {
    quantityRef.current.focus();
  }, []);

  const handleInput = (e, trait) => {
    if (trait === "quantity") {
      setNewQuantity(e.target.value);
    } else if (trait === "name") {
      setNewName(e.target.value);
    }
  };

  const handleKeyPress = (e, trait) => {
    if (e.key === "Enter") {
      if (trait === "quantity") {
        console.log("quantity enter");
        itemNameRef.current.focus();
      }
      if (trait === "name") {
        console.log("name enter");
        props.addNewItem(newQuantity, newName);
        clearNewHandle();
        quantityRef.current.focus();
      }
    }
  };

  const clearNewHandle = () => {
    setNewQuantity(initialNewQuantity);
    setNewName(initialNewName);
  };

  return (
    <Form.Row className=" d-flex flex-column col-6 shadow-sm bg-light rounded mb-1 border border-dark p-2 m-2">
      <h2 className="text-center">Add Item</h2>
      <Form.Row className="justify-content-center">
        <Form.Group className="d-flex flex-column col-2">
          <Form.Label>Qty.</Form.Label>
          <input
            type="text"
            ref={quantityRef}
            placeholder={"#"}
            value={newQuantity}
            onKeyPress={(e) => handleKeyPress(e, "quantity")}
            onChange={(e) => handleInput(e, "quantity")}
          ></input>
        </Form.Group>
        <Form.Group className="d-flex flex-column col-8">
          <Form.Label>Item Name</Form.Label>
          <input
            type="text"
            ref={itemNameRef}
            placeholder={"Item name"}
            value={newName}
            onKeyPress={(e) => handleKeyPress(e, "name")}
            onChange={(e) => handleInput(e, "name")}
          ></input>
        </Form.Group>
      </Form.Row>
      <Form.Group className="d-flex justify-content-around">
        <Button
          onClick={() => {
            props.addNewItem(newQuantity, newName);
            clearNewHandle();
          }}
          ref={addItemRef}
        >
          Add
        </Button>
        <Button onClick={clearNewHandle} ref={clearRef}>
          Clear
        </Button>
      </Form.Group>
    </Form.Row>
  );
};

export default AddItem;
