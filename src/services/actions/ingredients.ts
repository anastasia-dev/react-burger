import { IIngredient } from "../../interfaces/IIngredient";

export const SHOW_INGREDIENTS_ERROR : 'SHOW_INGREDIENTS_ERROR' = 'SHOW_INGREDIENTS_ERROR';
export const SHOW_INGREDIENTS_SUCCESS : 'SHOW_INGREDIENTS_SUCCESS' = 'SHOW_INGREDIENTS_SUCCESS';
export const SHOW_INGREDIENTS_REQUEST : 'SHOW_INGREDIENTS_REQUEST' = 'SHOW_INGREDIENTS_REQUEST';
export const INCREASE_ITEM_COUNT : 'INCREASE_ITEM_COUNT' = 'INCREASE_ITEM_COUNT';
export const DECREASE_ITEM_COUNT : 'DECREASE_ITEM_COUNT' = 'DECREASE_ITEM_COUNT';
export const CLEAR_ITEM_COUNT : 'CLEAR_ITEM_COUNT' = 'CLEAR_ITEM_COUNT';

interface IShowIngredientsErrorAction {
    type : typeof SHOW_INGREDIENTS_ERROR
}
interface IShowIngredientsSuccessAction {
    type : typeof SHOW_INGREDIENTS_SUCCESS,
    data? : ReadonlyArray<IIngredient>
}
interface IShowIngredientsRequestAction {
    type : typeof SHOW_INGREDIENTS_REQUEST
}
interface IIncreaseItemCountAction {
    type : typeof INCREASE_ITEM_COUNT,
    itemId? : string
}
interface IDecreaseItemCountAction {
    type : typeof DECREASE_ITEM_COUNT,
    itemId? : string
}
interface IClearItemCountAction {
    type : typeof CLEAR_ITEM_COUNT
}

export type IngredientActions = 
    IShowIngredientsErrorAction |
    IShowIngredientsSuccessAction | 
    IShowIngredientsRequestAction | 
    IIncreaseItemCountAction | 
    IDecreaseItemCountAction | 
    IClearItemCountAction;


