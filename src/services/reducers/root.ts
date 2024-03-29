import { combineReducers } from 'redux';
import { ingredientsReducer } from "./burgerIngredientsReducer"
import { activeTabReducer } from "./activeTabReducer";
import { burgerConstructorReducer } from "./burgerConstructorReducer";
import { orderNumberReducer } from "./odrerNumberReducer";
import { userReducer } from "./userReducer";
import { orderFeedReducer } from './orderFeedReducer';
import { userOrderFeedReducer } from './userOrderFeedReducer';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    editableIngredients: burgerConstructorReducer,
    orderNumber: orderNumberReducer,
    activeTab: activeTabReducer,
    user: userReducer,
    orderFeed: orderFeedReducer,
    userOrderFeed : userOrderFeedReducer
});