import React from "react"
import {DragDropContext, Droppable,DropResult,DroppableProvided} from "react-beautiful-dnd"
import DragDropItem from "./DragDropItem";

interface IDragDrop<T> {
    itemList: T[];
    handleUpdateItemList: (itemList: T[]) => void;
    orderKey?: string;
    handleReorder? : (result: DropResult) => void;
    children: (itemList: T[]) => React.ReactNode;
}
export function DragDrop<T extends object>({ itemList, orderKey, handleUpdateItemList, handleReorder, children }: IDragDrop<T>){
    //default drag n drop reorder function
    const handleDefaultReOrder = (result: DropResult) => {
        if (result.destination) {
            const startIdx = result.source.index;
            const endIdx = result.destination.index;

            let _itemList = structuredClone(itemList);
            const [removed] = _itemList.splice(startIdx, 1);
            _itemList.splice(endIdx, 0, removed);
            //itemOrder reorder
            if(orderKey){
                _itemList = _itemList?.map((mockItem, idx) => ({ ...mockItem, [orderKey]: idx }));
            }
            handleUpdateItemList(_itemList);
        }
    };
    return (
        <DragDropContext onDragEnd={(result:DropResult) => handleReorder ? handleReorder(result) : handleDefaultReOrder(result)}>
            <Droppable droppableId="droppable">
                {(provided:DroppableProvided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {children(itemList)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

DragDrop.DragDropItem = DragDropItem