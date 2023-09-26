# react-beautiful-simple-dnd
Very easy and simple dnd based on react-beautiful-dnd

## Compare with react-beautiful-dnd
Compared to react-beautiful-dnd, <b>using react-beautiful-simple-dnd results in much cleaner code.</b>
### react-beautiful-dnd (Javascript)
```jsx
import { useState } from 'react';
import { DragDropContext, Draggable,  Droppable } from "react-beautiful-dnd";
function App() {
  //itemList
  const [itemList, setItemList] = useState([
    {id:1,name:'list_1'},
    {id:2,name:'list_2'},
    {id:3,name:'list_3'}
  ])
  //Function executed when drag n drop
  const handleOrder = (result) => {
    if(result.destination){
      //Enter logic to change the order of the list.
    }
    
  };
  return (
    <DragDropContext onDragEnd={result => handleOrder(result)}>
      <Droppable droppableId="droppable">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {itemList.map((item, index)=> {
              return (
                <Draggable
                  draggableId={item.id.toString()}
                  index={index}
                >
                    {provided => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                            {item.name}
                        </div>
                    )}
                </Draggable>
              )
            })}
              {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
```
### react-beautiful-simple-dnd (Javascript)
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
