import {MutableRefObject} from "react";

export interface IEditDragItem {
    itemUid : string,
    ref : MutableRefObject<HTMLDivElement | any>
}