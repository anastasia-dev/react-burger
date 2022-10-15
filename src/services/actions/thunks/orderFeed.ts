import { AppDispatch } from "../../types"
import { ORDER_FEED_CONNECTION_CLOSED, ORDER_FEED_CONNECTION_START } from "../orderFeed";
import { USER_ORDER_FEED_CONNECTION_CLOSED, USER_ORDER_FEED_CONNECTION_START } from "../userOrderFeed";

// export const startOrderFeedConnection = () => {
//     return (dispatch : AppDispatch) => {
//         dispatch({
//             type: ORDER_FEED_CONNECTION_START 
//         });
//     }
// } 

// export const closeOrderFeedConnection = () => {
//     return (dispatch : AppDispatch) => {
//         dispatch({
//             type: ORDER_FEED_CONNECTION_CLOSED 
//         });
//     }
// } 

// export const startUserOrderFeedConnection = () => {
//     return (dispatch : AppDispatch) => {
//         dispatch({
//             type: USER_ORDER_FEED_CONNECTION_START 
//         });
//     }
// } 

// export const closeUserOrderFeedConnection = () => {
//     return (dispatch : AppDispatch) => {
//         dispatch({
//             type: USER_ORDER_FEED_CONNECTION_CLOSED
//         });
//     }
// } 