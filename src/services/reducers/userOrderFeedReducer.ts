import { IOrderFeedMessage } from "../actions/orderFeed";
import {
    USER_ORDER_FEED_CONNECTION_ERROR,
    USER_ORDER_FEED_CONNECTION_CLOSED,
    USER_ORDER_FEED_CONNECTION_SUCCESS,
    USER_ORDER_FEED_UPDATE,
    UserOrderFeedActions,
} from "../actions/userOrderFeed";


type UserOrderFeedState = {
    ordersFeed : IOrderFeedMessage | undefined,
    isFeedConnected : boolean
}

export const orderFeedInitialState : UserOrderFeedState = {
    ordersFeed: undefined,
    isFeedConnected : false,
}

export const userOrderFeedReducer = (state : UserOrderFeedState = orderFeedInitialState, action : UserOrderFeedActions) : UserOrderFeedState => {
    switch (action.type) {
        case USER_ORDER_FEED_CONNECTION_ERROR: {
            return {
                ordersFeed: undefined,
                isFeedConnected: false,
            };
        }
        case USER_ORDER_FEED_CONNECTION_SUCCESS: {
            return {
                ordersFeed: undefined,
                isFeedConnected: true
            };
        }
        case USER_ORDER_FEED_UPDATE: {
            return {
                ...state,
                ordersFeed: action.payload
            };
        }
        case USER_ORDER_FEED_CONNECTION_CLOSED: {
            return {
                ordersFeed: undefined,
                isFeedConnected: false,
            };
        }
        default: {
            return state
        }
    }
}