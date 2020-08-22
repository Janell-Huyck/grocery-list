import React, { useState } from "react";
import "./App.css";

import Item from "./components/item";

const initialList = [];

function App() {
  const [list, setList] = useState(initialList);

  const addBanannasHandle = () => {
    let copyList = [...list];
    let bananas = {
      name: "bananas",
      quantity: 1,
    };
    copyList.push(bananas);
    setList(copyList);
  };

  const addOrangesHandle = () => {
    let copyList = [...list];
    let oranges = {
      name: "oranges",
      quantity: 1,
    };
    copyList.push(oranges);
    setList(copyList);
  };

  const removeItemHandler = (e, index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  const toggleNameEdit = (index) => {
    let copyList = [...list];
    let targetItem = copyList[index];
    targetItem.nameEditable = !targetItem.nameEditable;
    setList(copyList);
  };

  const toggleQuantityEdit = (index) => {
    let copyList = [...list];
    let targetItem = copyList[index];
    targetItem.quantityEditable = !targetItem.quantityEditable;
    setList(copyList);
  };

  const keyPressHandler = (e, index, trait) => {
    if (e.key === "Enter") {
      if (trait === "name") {
        toggleNameEdit(index);
      } else if (trait === "quantity") {
        toggleQuantityEdit(index);
      }
      let copyList = [...list];
      copyList[index][trait] = e.target.value;
      setList(copyList);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {list.map((value, i) => {
          return (
            <Item
              key={`${i}${value.name}`}
              item={value}
              removeItem={removeItemHandler}
              editName={toggleNameEdit}
              editQuantity={toggleQuantityEdit}
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
