import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    SET_BUN,
    CLEAR_CONSTRUCTOR_DATA,
    SWAP_INGREDIENTS,
    BurgerConstructorActions
} from "../actions/constructor";
import { v4 as uuidv4 } from "uuid";
import { IIngredient } from "../../interfaces/IIngredient";

interface IConstructorIngredient extends IIngredient {
    uid: string
}

type BurgerConstructorState = {
    ingredientList : Array<IConstructorIngredient>
    bun? : IIngredient
}

const constructorInitialState : BurgerConstructorState = {
    ingredientList: [],
    bun: undefined
}

export const burgerConstructorReducer = (state : BurgerConstructorState = constructorInitialState, action : BurgerConstructorActions) : BurgerConstructorState => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            state.ingredientList.push({ ...action.item as IIngredient, uid: uuidv4() });
            return {
                ...state
            };
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredientList: state.ingredientList.filter((e, index) => e.uid !== action.key)
            };
        }
        case SET_BUN: {
            return {
                ...state,
                bun: action.bun
            };
        }
        case CLEAR_CONSTRUCTOR_DATA: {
            return {
                ingredientList: [],
                bun: undefined
            };
        }
        case SWAP_INGREDIENTS: {
            const firstIndex = action.dragIndex;
            const secondIndex = action.hoverIndex;
            state.ingredientList.splice(secondIndex, 0, state.ingredientList.splice(firstIndex, 1)[0]);
            return {
                ...state
            };
        }
        default: {
            return state
        }
    }
}