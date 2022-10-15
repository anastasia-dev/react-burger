import { IIngredient } from "../../interfaces/IIngredient";

export const ADD_INGREDIENT : 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const SET_BUN : 'SET_BUN' = 'SET_BUN';
export const DELETE_INGREDIENT : 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const SWAP_INGREDIENTS : 'SWAP_INGREDIENTS' = 'SWAP_INGREDIENTS';
export const CLEAR_CONSTRUCTOR_DATA : 'CLEAR_CONSTRUCTOR_DATA' = 'CLEAR_CONSTRUCTOR_DATA';

interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT,
    readonly item?: IIngredient
}
interface ISetBunAction {
    readonly type: typeof SET_BUN,    
    readonly bun?: IIngredient
}
interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT,
    readonly key: string 
}
interface ISwapIngredientsAction {
    readonly type: typeof SWAP_INGREDIENTS,    
    readonly hoverIndex: number,
    readonly dragIndex: number
}
interface IClearConstructorDataAction {
    readonly type: typeof CLEAR_CONSTRUCTOR_DATA,    
}

export type BurgerConstructorActions = IAddIngredientAction | ISetBunAction | IDeleteIngredientAction | ISwapIngredientsAction | IClearConstructorDataAction;