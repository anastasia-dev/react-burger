import { IOrderFeedItem } from "../../services/actions/orderFeed";
import OrderFeedListItem from "./OrderFeedListItem";
import style from "./OrderFeed.module.css"

interface IOrderFeedListProps {
    orders? : ReadonlyArray<IOrderFeedItem>
    modalUrl : string
    showStatus: boolean
}

function OrderFeedList(props : IOrderFeedListProps) {
    return (
        <section>
            { props.orders?.map(elem => <OrderFeedListItem item={elem} key={elem._id} showStatus={props.showStatus} modalUrl={props.modalUrl}/>) }
        </section>
    )
}

export default OrderFeedList;