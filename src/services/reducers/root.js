import { combineReducers } from 'redux';
import {ingredientDetailsReducer} from "../reducers/ingredientDetailsReducer";
import {ingredientsReducer} from "./burgerIngredientsReducer"
import {activeTabReducer} from "../reducers/activeTabReducer";
import {burgerConstructorReducer} from "./burgerConstructorReducer";
import {orderNumberReducer} from "./odrerNumberReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    detailsItem: ingredientDetailsReducer,
    editableIngredients: burgerConstructorReducer,
    orderNumber: orderNumberReducer,
    activeTab: activeTabReducer,
});