import {
    SHOW_INGREDIENTS,
    SHOW_INGREDIENTS_ERROR,
    INCREASE_ITEM_COUNT,
    DECREASE_ITEM_COUNT,
    CLEAR_ITEM_COUNT
} from "../actions/ingredients";


const ingredientsInitialState = {
    dataContent: [],
    ingredientsLoading: true,
    ingredientsFailed: false
}

export const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch (action.type) {
        case SHOW_INGREDIENTS: {
            return {
                ...state,
                dataContent: action.data,
                ingredientsLoading: false,
                ingredientsFailed: false,
            };
        }
        case SHOW_INGREDIENTS_ERROR: {
            return {
                ...state,
                dataContent: action.data,
                ingredientsLoading: false,
                ingredientsFailed: true,
            };
        }
        case DECREASE_ITEM_COUNT: {
            const item = state.dataContent.find(item => item._id == action.itemId);
            if (item && item.count > 0)
                item.count--;
            else
                return state;
            return {
                ...state,
            };
        }
        case INCREASE_ITEM_COUNT: {
            const item = state.dataContent.find(item => item._id == action.itemId);
            if (item)
                item.count++;
            else
                return state;
            return {
                ...state,
            };
        }
        case CLEAR_ITEM_COUNT: {
            state.dataContent.forEach((elem, index) => elem.count = 0);

            return {
                ...state,
            };
        }
        default: {
            return state
        }
    }
}