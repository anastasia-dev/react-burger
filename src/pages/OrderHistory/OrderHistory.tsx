import { useEffect } from "react";
import style from "./OrderHistory.module.css";
import styleFeed from "../../components/OrderFeed/OrderFeed.module.css";
import OrderFeedList from "../../components/OrderFeed/OrderFeedList";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { IOrderFeedItem, ORDER_FEED_CONNECTION_CLOSED, ORDER_FEED_CONNECTION_START } from "../../services/actions/orderFeed";
import OrderFeedStatuses from "../../components/OrderFeed/OrderFeedStatuses";


function OrderHistory() {
    const { ordersFeed } = useAppSelector(state => state.orderFeed)
    const dispatch = useAppDispatch();

    //todo: replace with thunks
    useEffect(() => {
        dispatch(
            {
                type: ORDER_FEED_CONNECTION_START 
            }
        );
        return () => {
            dispatch(
                {
                    type: ORDER_FEED_CONNECTION_CLOSED
                }
            );
        }
    }, []);

    function getOrderCount(orders: ReadonlyArray<IOrderFeedItem> | undefined, isDone: boolean) : number[] {
        return orders?.filter(i => (i.status === "done") === isDone).map(item => item.number).slice(0, 10) ?? [];
    }

    let color: boolean = true;

    return (
        <section className={style.mainBlock}>
            <h1 className={style.feedh1 + " text text_type_main-large"}>Лента заказов</h1>
            <main className={styleFeed.ordersFeedBlock}>
                <section className={styleFeed.leftColumnBlock}>
                    <OrderFeedList orders={ordersFeed?.orders} showStatus={true} modalUrl="/feed/" />
                </section>
                <section className={styleFeed.rightColumnBlock}>
                    <section className={styleFeed.currentStatuses}> 
                    <div className={styleFeed.statusBlock}><OrderFeedStatuses header={"Готовы"} orderNumbers={getOrderCount(ordersFeed?.orders, true)} textColor={color} /></div>
                    <div className={styleFeed.statusBlock}><OrderFeedStatuses header={"В работе"} orderNumbers={getOrderCount(ordersFeed?.orders, false)} textColor={!color} /></div>
                    </section>
                    <section className={styleFeed.totalBlock}>
                        <div className={styleFeed.totalHack + " text text_type_main-medium"}>Выполнено за все время:</div>
                        <div className="text text_type_digits-large">{ordersFeed?.total}</div>
                        <div className="text text_type_main-medium mt-15">Выполнено за сегодня</div>
                        <div className="text text_type_digits-large">{ordersFeed?.totalToday}</div>
                    </section>
                </section>
            </main>
        </section>
    );
}

export default OrderHistory;