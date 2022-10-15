import {
    ORDER_FEED_CONNECTION_ERROR,
    ORDER_FEED_CONNECTION_CLOSED,
    ORDER_FEED_CONNECTION_SUCCESS,
    ORDER_FEED_UPDATE,
    OrderFeedActions,
    IOrderFeedMessage,
} from "../actions/orderFeed";


type OrderFeedState = {
    ordersFeed : IOrderFeedMessage | undefined,
    isFeedConnected : boolean
}

const orderFeedInitialState : OrderFeedState = {
    ordersFeed: undefined,
    isFeedConnected : false,
}

export const orderFeedReducer = (state : OrderFeedState = orderFeedInitialState, action : OrderFeedActions) : OrderFeedState => {
    switch (action.type) {
        case ORDER_FEED_CONNECTION_ERROR: {
            return {
                ordersFeed: undefined,
                isFeedConnected: false,
            };
        }
        case ORDER_FEED_CONNECTION_SUCCESS: {
            return {
                ordersFeed: undefined,
                isFeedConnected: true
            };
        }
        case ORDER_FEED_UPDATE: {
            return {
                ...state,
                ordersFeed: action.payload
            };
        }
        case ORDER_FEED_CONNECTION_CLOSED: {
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