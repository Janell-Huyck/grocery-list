import React from "react";
import "./App.css";
import useList from "./hooks/useList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";

import Item from "./components/item";

const initialList = [];

function App() {
  let items = useList(initialList);

  const addBanannasHandle = () => {
    let bananas = {
      name: "bananas",
      quantity: 1,
    };
    items.addItem(bananas);
  };

  const addOrangesHandle = () => {
    let oranges = {
      name: "oranges",
      quantity: 1,
    };
    items.addItem(oranges);
  };

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

  const editItemsHandle = (index) => {
    items.toggle(index, "nameEditable");
    items.toggle(index, "quantityEditable");
  };

  const removePurchased = () => {
    items.removePurchased();
  };
  // while (
  //   items.list.filter(function (item) {
  //     return item.purchased === true;
  //   })
  // ) {
  //   items.list.map(function (item) {
  //     if (item.purchased) {
  //       removeItemHandle(item.index);
  //     }
  //   });
  // }
  // for (let i = 0; i < items.list.length; i++) {
  //   if (items.list[i].purchased) {
  //     console.log("removing purchased item: ", items.list[i].name);
  //     items.removeItem(i);
  //   }
  // }

  // let itemsToRemove = items.list.filter(function (item) {
  //   return item.purchased === true;
  // });
  // let indexesToRemove = itemsToRemove.map((item) => item.index);
  // console.dir(itemsToRemove);
  // console.log(indexesToRemove);
  // };

  return (
    <Container>
      <Row className="col-xs-12 font-weight-bold">
        <h2 className="m-auto">Grocery List</h2>
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
      <Button className="btn-success" onClick={removePurchased}>
        Remove Purchased
      </Button>
      <button onClick={addBanannasHandle}>Add Bananas</button>
      <button onClick={addOrangesHandle}>Add Oranges</button>
    </Container>
  );
}

export default App;
