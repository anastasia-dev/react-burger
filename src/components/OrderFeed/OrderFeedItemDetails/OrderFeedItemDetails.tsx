import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredient } from "../../../interfaces/IIngredient";
import { IOrderFeedItem } from "../../../services/actions/orderFeed";
import { useAppSelector } from "../../../services/hooks";
import { FormatDate } from "../OrderFeedListItem";
import style from "./OrderFeedItemDetails.module.css"

interface IOrderFeedItemDetailsProps {
    item?: IOrderFeedItem
}

type DetailsIngredients = {
    item : IIngredient
    count : number
}

export function getStatus(status: string | undefined){
    let textStatus: string = "";
    if(status === 'done') {
        textStatus = 'Выполнен';
    } else if(status === 'created') {
        textStatus = 'Создан';
    } else if(status === 'pending') {
        textStatus = 'Готовится'
    } else {
        textStatus = 'Отменен'
    }
    return textStatus;
}


function getItemCount(ingredients : ReadonlyArray<IIngredient>, ingredient : IIngredient) {
    let count = 0;
    for (let i of ingredients) {
        if (i === ingredient)
            count++;
    }
    return count;
}

function OrderFeedItemDetails(props : IOrderFeedItemDetailsProps) {
    const { dataContent } = useAppSelector(store => store.ingredients)
    const ingredients = props.item?.ingredients?.map(ingredienId => dataContent?.find(i => i._id === ingredienId));
    const filtered = ingredients?.reduce<Array<DetailsIngredients>>((prev : Array<DetailsIngredients>, current : IIngredient | undefined) => { 
        if (current) {
            const idx = prev.findIndex(i => i.item === current);
            if (idx >= 0)
                prev[idx].count++;
            else
                return [...prev, { item: current, count: 1}];
        }
        return prev;
     }, []);
    const total = ingredients?.reduce<number>((prev : number, current : IIngredient | undefined) => { return prev + (current?.price ?? 0) }, 0);
    return (
        
        <div className={style.ingredientBox}>
            <main className={style.ingredientCaption}>
                <section className={style.headInfo}>
                    <p className={style.orderNum +" text text_type_digits-default"}>#{props.item?.number}</p>
                    <p className="text text_type_main-medium">{props.item?.name}</p>
                    <p className={style.textColor + " text text_type_main-default"}>{getStatus(props.item?.status)}</p>
                    <p className="text text_type_main-medium">Состав:</p>
                </section>
                <section className={style.elementsInfo}>
                    <section className={style.elementsList}>
                        {filtered?.map((details : DetailsIngredients, idx : number) => {
                            return (
                                <section className={style.orderLine} key={details?.item._id + idx.toString()}>
                                    <section className={style.leftPart}>
                                        <div className={style.icon}><img src={details?.item.image_large} alt={details?.item.name}/></div>
                                        <div className={style.name}><p>{details?.item.name}</p></div>
                                    </section>
                                    <section className={style.rightPart}>
                                        <div className={style.price}><span className="text text_type_digits-small mr-1">{details?.count} x {details?.item.price}</span><CurrencyIcon type="primary" /></div>
                                    </section>
                                </section>
                            )})
                        }
                    </section>
                </section>
                <section className={style.bottomLine}>
                    <div className={style.date + " text text_type_main-default"}>{FormatDate(props.item?.createdAt)}
                    </div>
                    <div className={style.price}>
                            <span className="text text_type_digits-default mr-2">{total}</span>
                            <CurrencyIcon type="primary" />
                    </div>
                </section>
            </main>

        </div>
 
    )
}

export default OrderFeedItemDetails;