# react-beautiful-simple-dnd
Very easy and simple dnd based on react-beautiful-dnd

## Examples

### Javascript
```jsx
import {DragDrop} from "react-beautiful-simple-dnd"
import { useState } from 'react';

function App() {
  //itemList
  const [itemList, setItemList] = useState([
    {id:1,name:'list_1'},
    {id:2,name:'list_2'},
    {id:3,name:'list_3'}
  ])
  //Function executed when drag n drop
  const handleUpdateItemList = (itemList) => {
    setItemList(itemList)
  };
  return (
      <DragDrop
        itemList={itemList}
        handleUpdateItemList={handleUpdateItemList}
      >
        {(itemList)=>{
          return itemList.map((item, index)=> (
              <DragDrop.DragDropItem
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                <div>{item.name}</div>
              </DragDrop.DragDropItem>
            )
          )}}
      </DragDrop>
  );
}
```
