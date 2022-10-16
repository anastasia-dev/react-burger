
import style from "./OrderFeed.module.css"

interface IOrderFeedStatusesProps {
    header: string,
    textColor: boolean,
    orderNumbers? : ReadonlyArray<number>
}

function OrderFeedStatuses(props : IOrderFeedStatusesProps) {
    return (
        <section className={style.feedInfoBlock}>
            <h2>{props.header}</h2>
            <section className={style.ordersProcessNumbers}>
                {props.orderNumbers?.map((item) => {
                    return(
                        <div key={item} className={`text text_type_digits-default mt-2 ${props.textColor ? style.textColor : ""} ${style.ordersProcessNumberItem}`}>{item}</div>
                    );
                })}
            </section>
        </section>
    )
}

export default OrderFeedStatuses;