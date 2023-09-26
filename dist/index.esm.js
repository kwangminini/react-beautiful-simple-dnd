import { __assign } from '/Users/glosign/Documents/glosign/npmTest/node_modules/tslib/tslib.es6.js';
import React from 'react';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';

function DragDropItem(_a) {
    var draggableId = _a.draggableId, index = _a.index, children = _a.children;
    return (React.createElement(Draggable, { draggableId: draggableId, index: index }, function (provided) { return (React.createElement("div", __assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps), children)); }));
}

function DragDrop(_a) {
    var itemList = _a.itemList, orderKey = _a.orderKey, handleUpdateItemList = _a.handleUpdateItemList, handleReorder = _a.handleReorder, children = _a.children;
    //default drag n drop reorder function
    var handleDefaultReOrder = function (result) {
        if (result.destination) {
            var startIdx = result.source.index;
            var endIdx = result.destination.index;
            var _itemList = structuredClone(itemList);
            var removed = _itemList.splice(startIdx, 1)[0];
            _itemList.splice(endIdx, 0, removed);
            //itemOrder reorder
            if (orderKey) {
                _itemList = _itemList === null || _itemList === void 0 ? void 0 : _itemList.map(function (mockItem, idx) {
                    var _a;
                    return (__assign(__assign({}, mockItem), (_a = {}, _a[orderKey] = idx, _a)));
                });
            }
            handleUpdateItemList(_itemList);
        }
    };
    return (React.createElement(DragDropContext, { onDragEnd: function (result) { return handleReorder ? handleReorder(result) : handleDefaultReOrder(result); } },
        React.createElement(Droppable, { droppableId: "droppable" }, function (provided) { return (React.createElement("div", __assign({ ref: provided.innerRef }, provided.droppableProps),
            children(itemList),
            provided.placeholder)); })));
}
DragDrop.DragDropItem = DragDropItem;

export { DragDrop };
