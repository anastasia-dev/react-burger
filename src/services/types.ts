import { store } from './store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { ISetActiveTabAction } from './actions/activeTab';
import { IngredientActions } from './actions/ingredients';
import { OrderNumberActions } from './actions/orderNumber';
import { BurgerConstructorActions } from './actions/constructor';
import { UserActions } from './actions/userRegistration';
import { OrderFeedActions } from './actions/orderFeed';
import { UserOrderFeedActions } from './actions/userOrderFeed';
import {AnyAction} from "redux";

type TApplicationActions =
  | ISetActiveTabAction
  | IngredientActions
  | OrderNumberActions
  | BurgerConstructorActions
  | UserActions
  | OrderFeedActions
  | UserOrderFeedActions;
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    never,
    TApplicationActions
    >