import { USER_ORDER_FEED_CONNECTION_ERROR, USER_ORDER_FEED_CONNECTION_SUCCESS, USER_ORDER_FEED_UPDATE, USER_ORDER_FEED_CONNECTION_CLOSED } from "../actions/userOrderFeed";
import { userOrderFeedReducer } from "./userOrderFeedReducer";

describe("user order feed reducer", () => {
    it("should return the reducer inital state", () => {
        expect(userOrderFeedReducer(undefined, {})).toEqual({
            ordersFeed: undefined,
            isFeedConnected : false,
        });
    });

    it("should handle USER_ORDER_FEED_CONNECTION_ERROR", () => {
        expect(userOrderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { type: USER_ORDER_FEED_CONNECTION_ERROR })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: false
        });
    })

    it("should handle USER_ORDER_FEED_CONNECTION_SUCCESS", () => {
        expect(userOrderFeedReducer({
            ordersFeed: [],
            isFeedConnected: false 
        }, { 
            type: USER_ORDER_FEED_CONNECTION_SUCCESS

        })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: true
        });
    })

    it("should handle USER_ORDER_FEED_UPDATE", () => {
        expect(userOrderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { 
            type: USER_ORDER_FEED_UPDATE,
            payload: [ 1, 2, 3 ]
        })).toEqual({
            ordersFeed: [ 1, 2, 3 ],
            isFeedConnected: true
        });
    })

    it("should handle USER_ORDER_FEED_CONNECTION_CLOSED", () => {
        expect(userOrderFeedReducer({
            ordersFeed: [],
            isFeedConnected: true 
        }, { 
            type: USER_ORDER_FEED_CONNECTION_CLOSED
        })).toEqual({
            ordersFeed: undefined,
            isFeedConnected: false
        });
    })
})
