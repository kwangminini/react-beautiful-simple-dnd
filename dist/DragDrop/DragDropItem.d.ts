import React from "react";
import { DraggableProps } from "react-beautiful-dnd";
interface IDragDropItem extends Omit<DraggableProps, "children"> {
    children: React.ReactNode;
}
export default function DragDropItem({ draggableId, index, children }: IDragDropItem): React.JSX.Element;
export {};
