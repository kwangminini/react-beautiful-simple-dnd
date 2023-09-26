import React from "react";
import { DropResult } from "react-beautiful-dnd";
interface IDragDrop<T> {
    itemList: T[];
    handleUpdateItemList: (itemList: T[]) => void;
    orderKey?: string;
    handleReorder: (result: DropResult) => void;
    children: (itemList: T[]) => React.ReactNode;
}
export declare function DragDrop<T extends object>({ itemList, orderKey, handleUpdateItemList, handleReorder, children }: IDragDrop<T>): React.JSX.Element;
export declare namespace DragDrop {
    var DragDropItem: typeof import("./DragDropItem").default;
}
export {};
