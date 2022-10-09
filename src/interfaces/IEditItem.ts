import {IEditIngredient} from "./IIngredient";

export interface IEditItem {
    deleteItem: (itemUid: string) => void;
    item: IEditIngredient;
}