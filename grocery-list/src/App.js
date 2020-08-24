import React from "react";
import "./App.css";
import useList from "./hooks/useList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";

import Item from "./components/item";
import AddItem from "./components/addItem";

const initialList = [];

function App() {
  let items = useList(initialList);

  const removeItemHandle = (index) => {
    items.removeItem(index);
  };

  const toggleHandle = (index, trait) => {
    items.toggle(index, trait);
  };

  const keyPressHandle = (e, index, trait) => {
    if (e.key === "Enter") {
      let newValue = e.target.value;
      if (trait === "name") {
        toggleHandle(index, "nameEditable");
      } else if (trait === "quantity") {
        toggleHandle(index, "quantityEditable");
      }
      items.saveItem(index, trait, newValue);
    }
  };

  const addNewItem = (quantity, name) => {
    items.addItem({ quantity: quantity, name: name });
  };

  const editItemsHandle = (index) => {
    items.toggle(index, "nameEditable");
    items.toggle(index, "quantityEditable");
  };

  const removePurchased = () => {
    items.removePurchased();
  };

  return (
    <Container>
      <Row className="col-xs-12 font-weight-bold">
        <h2 className="m-auto">Grocery List</h2>
        <Button className="btn-success p-2 m-5" onClick={removePurchased}>
          Remove Purchased
        </Button>
      </Row>
      {items.list.map((value, i) => {
        return (
          <Item
            key={`${i}${value.name}`}
            item={value}
            removeItem={removeItemHandle}
            toggle={toggleHandle}
            onKeyPress={keyPressHandle}
            index={i}
            editItem={editItemsHandle}
          ></Item>
        );
      })}
      <AddItem addNewItem={addNewItem} />
    </Container>
  );
}

export default App;
