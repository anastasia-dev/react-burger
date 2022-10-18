import { ORDER_FEED_CONNECTION_ERROR, ORDER_FEED_CONNECTION_SUCCESS, ORDER_FEED_UPDATE, ORDER_FEED_CONNECTION_CLOSED } from "../actions/orderFeed";
import { orderFeedInitialState, orderFeedReducer } from "./orderFeedReducer";

describe("order feed reducer", () => {
    it("should return the reducer inital state", () => {
        expect(orderFeedReducer(undefined, {})).toEqual(orderFeedInitialState);
    });

    const connectedState = {
        ordersFeed: [],
        isFeedConnected: true 
    };

    it("should handle ORDER_FEED_CONNECTION_ERROR", () => {
        expect(orderFeedReducer(connectedState,{ 
                type: ORDER_FEED_CONNECTION_ERROR 
            })).toEqual(orderFeedInitialState);
    })

    it("should handle ORDER_FEED_CONNECTION_SUCCESS", () => {
        expect(orderFeedReducer(orderFeedInitialState, { 
            type: ORDER_FEED_CONNECTION_SUCCESS
        })).toEqual({
            ...orderFeedInitialState,
            isFeedConnected: true
        });
    })

    it("should handle ORDER_FEED_UPDATE", () => {
        expect(orderFeedReducer(connectedState, { 
            type: ORDER_FEED_UPDATE,
            payload: [ 1, 2, 3 ]
        })).toEqual({
            ...connectedState,
            ordersFeed: [ 1, 2, 3 ],
        });
    })

    it("should handle ORDER_FEED_CONNECTION_CLOSED", () => {
        expect(orderFeedReducer(connectedState, { 
            type: ORDER_FEED_CONNECTION_CLOSED
        })).toEqual(orderFeedInitialState);
    })
})
