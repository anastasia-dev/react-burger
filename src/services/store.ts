import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root';

import { compose } from 'redux';
import { socketMiddleware } from './middleware/socketMiddleware';
import { OrderFeedWebSocketActions } from './actions/orderFeed';
import { URL_ORDER_FEED, URL_USER_ORDER_FEED } from '../utils/constants';
import { UserOrderFeedWebSocketActions } from './actions/userOrderFeed';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, 
  socketMiddleware(URL_ORDER_FEED, OrderFeedWebSocketActions, false),
  socketMiddleware(URL_USER_ORDER_FEED, UserOrderFeedWebSocketActions, true))
);

export const store = createStore(rootReducer, enhancer);