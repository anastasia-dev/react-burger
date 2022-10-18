import { USER_ORDER_FEED_CONNECTION_ERROR, USER_ORDER_FEED_CONNECTION_SUCCESS, USER_ORDER_FEED_UPDATE, USER_ORDER_FEED_CONNECTION_CLOSED } from "../actions/userOrderFeed";
import { orderFeedInitialState, userOrderFeedReducer } from "./userOrderFeedReducer";

describe("user order feed reducer", () => {
    it("should return the reducer inital state", () => {
        expect(userOrderFeedReducer(undefined, {})).toEqual(orderFeedInitialState);
    });

    const connectedState = {
        ordersFeed: [],
        isFeedConnected: true 
    };

    it("should handle USER_ORDER_FEED_CONNECTION_ERROR", () => {
        expect(userOrderFeedReducer(connectedState, {
            type: USER_ORDER_FEED_CONNECTION_ERROR 
        })).toEqual(orderFeedInitialState);
    })

    it("should handle USER_ORDER_FEED_CONNECTION_SUCCESS", () => {
        expect(userOrderFeedReducer(orderFeedInitialState, { 
            type: USER_ORDER_FEED_CONNECTION_SUCCESS
        })).toEqual({
            ...orderFeedInitialState,
            isFeedConnected: true
        });
    })

    it("should handle USER_ORDER_FEED_UPDATE", () => {
        expect(userOrderFeedReducer(connectedState, { 
            type: USER_ORDER_FEED_UPDATE,
            payload: [ 1, 2, 3 ]
        })).toEqual({
            ...connectedState,
            ordersFeed: [ 1, 2, 3 ],
        });
    })

    it("should handle USER_ORDER_FEED_CONNECTION_CLOSED", () => {
        expect(userOrderFeedReducer(connectedState, { 
            type: USER_ORDER_FEED_CONNECTION_CLOSED
        })).toEqual(orderFeedInitialState);
    })
})
