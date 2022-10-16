import { IWebSocketActions } from "../middleware/socketMiddleware";
import { IOrderFeedMessage } from "./orderFeed";

export const USER_ORDER_FEED_CONNECTION_START: 'USER_ORDER_FEED_CONNECTION_START' = 'USER_ORDER_FEED_CONNECTION_START';
export const USER_ORDER_FEED_CONNECTION_SUCCESS : 'USER_ORDER_FEED_CONNECTION_SUCCESS' = 'USER_ORDER_FEED_CONNECTION_SUCCESS';
export const USER_ORDER_FEED_CONNECTION_ERROR : 'USER_ORDER_FEED_CONNECTION_ERROR' = 'USER_ORDER_FEED_CONNECTION_ERROR';
export const USER_ORDER_FEED_CONNECTION_CLOSED : 'USER_ORDER_FEED_CONNECTION_CLOSED' = 'USER_ORDER_FEED_CONNECTION_CLOSED';
export const USER_ORDER_FEED_UPDATE: 'USER_ORDER_FEED_UPDATE' = 'USER_ORDER_FEED_UPDATE';

interface IUserOrderFeedUpdateAction {
    type : typeof USER_ORDER_FEED_UPDATE,
    payload? : IOrderFeedMessage
}
interface IUserOrderFeedConnectionErrorAction {
    type : typeof USER_ORDER_FEED_CONNECTION_ERROR,
}
interface IUserOrderFeedConnectionSuccessAction {
    type : typeof USER_ORDER_FEED_CONNECTION_SUCCESS
}
interface IUserOrderFeedConnectionClosedAction {
    type : typeof USER_ORDER_FEED_CONNECTION_CLOSED
}
interface IUserOrderFeedConnectionStartAction {
    type : typeof USER_ORDER_FEED_CONNECTION_START
}

export const UserOrderFeedWebSocketActions : IWebSocketActions = {
    connect: USER_ORDER_FEED_CONNECTION_START,
    closed: USER_ORDER_FEED_CONNECTION_CLOSED,
    connected: USER_ORDER_FEED_CONNECTION_SUCCESS,
    error: USER_ORDER_FEED_CONNECTION_ERROR,
    messageReceived: USER_ORDER_FEED_UPDATE
}

export type UserOrderFeedActions = 
    IUserOrderFeedConnectionErrorAction |
    IUserOrderFeedConnectionSuccessAction | 
    IUserOrderFeedUpdateAction |
    IUserOrderFeedConnectionClosedAction |
    IUserOrderFeedConnectionStartAction;


