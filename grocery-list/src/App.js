import React, { useState } from "react";
import "./App.css";

import Item from "./components/item";

const initialList = [];

const combineItemName = (item) => {
  item.name = `${item.sizeInt}${item.sizeType}${item.itemName}`;
  return item;
};

function App() {
  const [list, setList] = useState(initialList);

  const addBanannasHandle = () => {
    let copyList = [...list];
    let bananas = {
      itemName: "bananas",
      quantity: 1,
      quantityType: "bunch",
    };
    combineItemName(bananas);
    copyList.push(bananas);
    setList(copyList);
  };
  const addOrangesHandle = () => {
    let copyList = [...list];
    let oranges = {
      itemName: "oranges",
      quantity: 1,
      quantityType: "each",
    };
    combineItemName(oranges);
    copyList.push(oranges);
    setList(copyList);
  };

  const removeItemHandler = (e) => {
    let removable = e.target.getAttribute("name");
    console.dir(e.target.name);
    console.log("e.target.name", e.target.name);
    console.log("removable", removable);
    const filteredList = list.filter(
      () => e.target.getAttribute("name") !== e.target.name
    );
    setList(list.filter((item) => item.name !== removable));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((value, i) => {
          return (
            <Item
              key={`${i}${value.unitSize}${value.unitType}${value.itemName}`}
              item={value}
              name={value.itemName}
              onClick={removeItemHandler}
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
