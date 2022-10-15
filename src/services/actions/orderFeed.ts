import { IIngredient } from "../../interfaces/IIngredient";
import { IWebSocketActions } from "../middleware/socketMiddleware";

export const ORDER_FEED_CONNECTION_START: 'ORDER_FEED_CONNECTION_START' = 'ORDER_FEED_CONNECTION_START';
export const ORDER_FEED_CONNECTION_SUCCESS : 'ORDER_FEED_CONNECTION_SUCCESS' = 'ORDER_FEED_CONNECTION_SUCCESS';
export const ORDER_FEED_CONNECTION_ERROR : 'ORDER_FEED_CONNECTION_ERROR' = 'ORDER_FEED_CONNECTION_ERROR';
export const ORDER_FEED_CONNECTION_CLOSED : 'ORDER_FEED_CONNECTION_CLOSED' = 'ORDER_FEED_CONNECTION_CLOSED';
export const ORDER_FEED_UPDATE: 'ORDER_FEED_UPDATE' = 'ORDER_FEED_UPDATE';

export interface IOrderFeedMessage {
    success: boolean,
    orders: ReadonlyArray<IOrderFeedItem>,
    total: number,
    totalToday : number
}

export interface IOrderFeedItem {
    ingredients: ReadonlyArray<string>,
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string,
    name: string
}

interface IOrderFeedUpdateAction {
    type : typeof ORDER_FEED_UPDATE,
    payload? : IOrderFeedMessage
}
interface IOrderFeedConnectionErrorAction {
    type : typeof ORDER_FEED_CONNECTION_ERROR,
}
interface IOrderFeedConnectionSuccessAction {
    type : typeof ORDER_FEED_CONNECTION_SUCCESS
}
interface IOrderFeedConnectionClosedAction {
    type : typeof ORDER_FEED_CONNECTION_CLOSED
}
interface IOrderFeedConnectionStartAction {
    type : typeof ORDER_FEED_CONNECTION_START
}

export const OrderFeedWebSocketActions : IWebSocketActions = {
    connect: ORDER_FEED_CONNECTION_START,
    closed: ORDER_FEED_CONNECTION_CLOSED,
    connected: ORDER_FEED_CONNECTION_SUCCESS,
    error: ORDER_FEED_CONNECTION_ERROR,
    messageReceived: ORDER_FEED_UPDATE
}

export type OrderFeedActions = 
    IOrderFeedConnectionErrorAction |
    IOrderFeedConnectionSuccessAction | 
    IOrderFeedUpdateAction |
    IOrderFeedConnectionClosedAction |
    IOrderFeedConnectionStartAction;


