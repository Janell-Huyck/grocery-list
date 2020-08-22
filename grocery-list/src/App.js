import React, { useState } from "react";
import "./App.css";

import Item from "./components/item";

const initialList = [];

function App() {
  const [list, setList] = useState(initialList);
  const [editable, setEditable] = useState(false);

  const addBanannasHandle = () => {
    let copyList = [...list];
    let bananas = {
      itemName: "bananas",
      quantity: 1,
      quantityType: "bunch",
    };
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
    copyList.push(oranges);
    setList(copyList);
  };

  const removeItemHandler = (e, index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  const makeEditableHandler = (e) => {
    setEditable(true);
  };

  const keyPressHandler = (e, index) => {
    if (e.key === "Enter") {
      setEditable(!editable);
      const copyList = [...list];
      copyList[index].itemName = e.target.value;
    }
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
              onClick={removeItemHandler}
              onDoubleClick={makeEditableHandler}
              editable={editable}
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
