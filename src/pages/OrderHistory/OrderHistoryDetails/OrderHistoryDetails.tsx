import { useEffect } from "react";
//import { closeOrderFeedConnection, startOrderFeedConnection } from "../../../services/actions/thunks/orderFeed";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";
import OrderHistoryDetailsComponent from "../../../components/OrderFeed/OrderHistoryDetailsComponent";
import { ORDER_FEED_CONNECTION_CLOSED, ORDER_FEED_CONNECTION_START } from "../../../services/actions/orderFeed";

function OrderHistoryDetails() {
    const dispatch = useAppDispatch();
    const { ordersFeed } = useAppSelector(state => state.orderFeed)

    useEffect(() => {
        dispatch({
            type: ORDER_FEED_CONNECTION_START
        })
        return () => { 
            dispatch({
                type: ORDER_FEED_CONNECTION_CLOSED
            })
        }
    }, []);
    return ( <OrderHistoryDetailsComponent orders={ordersFeed?.orders} /> )
}

export default OrderHistoryDetails