import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import OrderHistoryDetailsComponent from "../../../../components/OrderFeed/OrderHistoryDetailsComponent";
import { USER_ORDER_FEED_CONNECTION_CLOSED, USER_ORDER_FEED_CONNECTION_START } from "../../../../services/actions/userOrderFeed";
import { useEffect } from "react";

function ProfileOrderHistoryDetails() {
    const { ordersFeed } = useAppSelector(state => state.userOrderFeed)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch({
            type: USER_ORDER_FEED_CONNECTION_START
        })
        return () => { 
            dispatch({
                type: USER_ORDER_FEED_CONNECTION_CLOSED
            })
        }
    }, []);
    return ( <OrderHistoryDetailsComponent orders={ordersFeed?.orders} /> )
}

export default ProfileOrderHistoryDetails