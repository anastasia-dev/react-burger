import { useParams } from "react-router-dom";
import OrderFeedItemDetails from "./OrderFeedItemDetails/OrderFeedItemDetails";
import { IOrderFeedItem } from "../../services/actions/orderFeed";

interface IOrderHistoryDetailsProps {
    orders? : ReadonlyArray<IOrderFeedItem>
}

function OrderHistoryDetailsComponent(props: IOrderHistoryDetailsProps) {
    const { id } = useParams();
    const item = props.orders?.find(order => order.number.toString() === id);
    return (
        item != undefined && item != null ? <OrderFeedItemDetails item={item} /> : <p>Заказ не найден</p>
    )
}

export default OrderHistoryDetailsComponent