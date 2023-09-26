import React from "react";
import { Draggable, DraggableProps,DraggableProvided } from "react-beautiful-dnd";

interface IDragDropItem extends Omit<DraggableProps, "children"> {
    children:React.ReactNode
}
export default function DragDropItem({ draggableId, index, children }:IDragDropItem){
    return (
        <Draggable draggableId={draggableId} index={index}>
            {(provided:DraggableProvided) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {children}
                </div>
            )}
        </Draggable>
    );
};
