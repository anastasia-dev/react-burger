            payload: [ 1, 2, 3 ]
import { ORDER_FEED_CONNECTION_ERROR, ORDER_FEED_CONNECTION_SUCCESS, ORDER_FEED_UPDATE, ORDER_FEED_CONNECTION_CLOSED } from "../actions/orderFeed";
import { orderFeedReducer } from "./orderFeedReducer";

describe("order feed reducer", () => {
    it("should return the reducer inital state", () => {
        expect(orderFeedReducer(undefined, {})).toEqual({
            ordersFeed: undefined,
            isFeedConnected : false,
        });
    });

    it("should handle ORDER_FEED_CONNECTION_ERROR", () => {
        expect(orderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { type: ORDER_FEED_CONNECTION_ERROR })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: false
        });
    })

    it("should handle ORDER_FEED_CONNECTION_SUCCESS", () => {
        expect(orderFeedReducer({
            ordersFeed: [],
            isFeedConnected: false 
        }, { 
            type: ORDER_FEED_CONNECTION_SUCCESS

        })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: true
        });
    })

    it("should handle ORDER_FEED_UPDATE", () => {
        expect(orderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { 
            type: ORDER_FEED_UPDATE,
            payload: [ 1, 2, 3 ]
        })).toEqual({
            ordersFeed: [ 1, 2, 3 ],
            isFeedConnected: true
        });
    })

    it("should handle ORDER_FEED_CONNECTION_CLOSED", () => {
        expect(orderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { 
            type: ORDER_FEED_CONNECTION_CLOSED
        })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: false
        });
    })
})
