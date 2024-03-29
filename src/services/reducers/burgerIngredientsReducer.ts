import { IIngredient } from "../../interfaces/IIngredient";
import {
    SHOW_INGREDIENTS_REQUEST,
    SHOW_INGREDIENTS_SUCCESS,
    SHOW_INGREDIENTS_ERROR,
    INCREASE_ITEM_COUNT,
    DECREASE_ITEM_COUNT,
    CLEAR_ITEM_COUNT,
    IngredientActions
} from "../actions/ingredients";


type IngredientsState = {
    dataContent? : ReadonlyArray<IIngredient>,
    ingredientsLoading : boolean,
    ingredientsSuccess : boolean,
    ingredientsFailed : boolean,
}

export const ingredientsInitialState : IngredientsState = {
    dataContent: [],
    ingredientsLoading: false,
    ingredientsSuccess: false,
    ingredientsFailed: false
}

export const ingredientsReducer = (state : IngredientsState = ingredientsInitialState, action : IngredientActions) : IngredientsState => {
    switch (action.type) {
        case SHOW_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsLoading: true,
            };
        }
        case SHOW_INGREDIENTS_ERROR: {
            return {
                dataContent: [],
                ingredientsLoading: false,
                ingredientsSuccess: false,
                ingredientsFailed: true,
            };
        }
        case SHOW_INGREDIENTS_SUCCESS: {
            return {
                dataContent: action.data,
                ingredientsLoading: false,
                ingredientsFailed: false,
                ingredientsSuccess: true,
            };
        }
        case DECREASE_ITEM_COUNT: {
            const item = state.dataContent?.find(item => item._id === action.itemId);
            if(item?.type === 'bun') {
                if (item && item.count > 0)
                    item.count = item.count - 2;
                else
                    return state;
            } else {
                if (item && item.count > 0)
                    item.count--;
                else
                    return state;
            }
            return {
                ...state,
            };
        }
        case INCREASE_ITEM_COUNT: {
            const item = state.dataContent?.find(item => item._id === action.itemId);
            if(item?.type === 'bun') {
                if (item)
                    item.count = item.count + 2;
                else
                    return state;
            } else {
                if (item)
                    item.count++;
                else
                    return state;
            }
            return {
                ...state,
            };
        }
        case CLEAR_ITEM_COUNT: {
            state.dataContent?.forEach((elem, index) => elem.count = 0);
            return {
                ...state,
            };
        }
        default: {
            return state
        }
    }
}
