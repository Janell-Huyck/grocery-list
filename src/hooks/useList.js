import { useState } from "react";

function useList(init) {
  const [list, setList] = useState(init);

  return {
    list,
    removeItem(index) {
      let copyList = [...list];
      copyList.splice(index, 1);
      setList(copyList);
    },
    saveItem(index, trait, newVal) {
      let copyList = [...list];
      copyList[index][trait] = newVal;
      setList(copyList);
    },
    addItem(item) {
      let copyList = [...list];
      copyList.push(item);
      setList(copyList);
    },
    toggle(index, trait) {
      let copyList = [...list];
      let targetItem = copyList[index];
      targetItem[trait] = !targetItem[trait];
      setList(copyList);
    },
    removePurchased() {
      let copyList = list.filter(function (item) {
        return !item.purchased;
      });
      setList(copyList);
    },
  };
}

export default useList;
