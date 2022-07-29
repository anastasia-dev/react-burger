import { combineReducers } from 'redux';
import {ingredientDetailsReducer} from "../reducers/ingredientDetailsReducer";
import {ingredientsReducer} from "../reducers/burgerIngredientsReduser"
import {activeTabReducer} from "../reducers/activeTabReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    detailsItem: ingredientDetailsReducer,
    activeTab: activeTabReducer,
});