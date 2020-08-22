import React from "react";
import "./App.css";
import useList from "./hooks/useList";

import Item from "./components/item";

const initialList = [];

function App() {
  const items = useList(initialList);

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

  const removeItemHandler = (index) => {
    items.removeItem(index);
  };

  const toggleHandler = (index, trait) => {
    items.toggle(index, trait);
  };

  const keyPressHandler = (e, index, trait) => {
    if (e.key === "Enter") {
      let newValue = e.target.value;
      if (trait === "name") {
        toggleHandler(index, "nameEditable");
      } else if (trait === "quantity") {
        toggleHandler(index, "quantityEditable");
      }
      items.saveItem(index, trait, newValue);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {items.list.map((value, i) => {
          return (
            <Item
              key={`${i}${value.name}`}
              item={value}
              removeItem={removeItemHandler}
              toggle={toggleHandler}
              onKeyPress={keyPressHandler}
              index={i}
            ></Item>
          );
        })}
        <button onClick={addBanannasHandle}>Add Bananas</button>
        <button onClick={addOrangesHandle}>Add Oranges</button>
      </header>
    </div>
  );
}

export default App;
