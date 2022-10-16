import { IOrderFeedItem } from "../../services/actions/orderFeed";

import styleFeed from "../../components/OrderFeed/OrderFeed.module.css";
import { useAppSelector } from "../../services/hooks";
import { IIngredient } from "../../interfaces/IIngredient";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ILocation } from "../../interfaces/ILocation";
import { getStatus } from "./OrderFeedItemDetails/OrderFeedItemDetails";

interface IOrderFeedListItemProps {
    item: IOrderFeedItem
    modalUrl: string 
    showStatus: boolean
}

export function PadWithLeadingZeroes(num: number, length : number) {
    let result = num.toString();
    const count = length - result.length;
    for (let i = 0; i < count; i++)
        result = "0" + result;
    return result;
}
export function getDateDiff(a : Date, b : Date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc1 - utc2) / _MS_PER_DAY);
  }
export function FormatDate(dateString: string | undefined) {
    if (dateString === null || dateString === undefined)
        return "";
    const date = new Date(dateString);
    const currentDate = new Date();
    const hours = PadWithLeadingZeroes(date.getHours(), 2);
    const minutes = PadWithLeadingZeroes(date.getMinutes(), 2);
    const daysDiff = getDateDiff(currentDate, date);
    const days = daysDiff <= 0 ? "Сегодня" : (daysDiff <= 1 ? "Вчера" : `${daysDiff} дня(-ей) назад`);
    return `${days}, ${hours}:${minutes} i-GMT+${-date.getTimezoneOffset()/60}`;
}

function OrderFeedListItem(props : IOrderFeedListItemProps) {
    const MAX_IMG_COUNT = 5;
    
    const { dataContent } = useAppSelector(store => store.ingredients)
    const ingredients = props.item.ingredients?.map(ingredienId => dataContent?.find(i => i._id === ingredienId));
    const trimmedCount = ingredients.length - MAX_IMG_COUNT;    
    const total = ingredients.reduce<number>((prev : number, current : IIngredient | undefined) => { return prev + (current?.price ?? 0) }, 0);
    const navigate = useNavigate();
    const location = useLocation() as ILocation;

    const showItemDetails = (elem : IOrderFeedItem) => {
        navigate(`${props.modalUrl}${elem.number}`, {state: { background: location }});
    }

    return (
        <section className={styleFeed.feedListItemBlock} onClick={(e) => showItemDetails(props.item)}>
            <section className={styleFeed.topBlock}>
                <div className="text text_type_digits-default">#{props.item.number}</div>
                <div className={styleFeed.date + " text text_type_main-default"}>{FormatDate(props.item.createdAt)}</div>
            </section>
            <section className={styleFeed.nameBlock}>
                <div className="text text_type_main-medium mt-6">{props.item.name}</div>
            </section>
            <section className={styleFeed.statusLeftBlock}>
                { props.showStatus ? (<p className="text text_type_main-small">{getStatus(props.item.status)}</p>) : <></> }
            </section>
            <section className={styleFeed.orderFeedIcon}>
                <div className={styleFeed.iconsBlock}>
                    {ingredients.slice(0, MAX_IMG_COUNT).map((ingredient, index : number) => {
                        const zIndex = MAX_IMG_COUNT - index - 1;
                        if (index !== MAX_IMG_COUNT - 1 || trimmedCount === 0)
                            return (
                                <div className={styleFeed.icon} style={{zIndex: zIndex}} key={ingredient?._id + index.toString()}>
                                    <img src={ingredient?.image_large} alt={ingredient?.name} />
                                </div>
                            )
                        else
                            return (
                                <div className={styleFeed.icon} style={{zIndex: zIndex}} key={ingredient?._id + index.toString()}>
                                    {<p className={styleFeed.lastIcon}><img src={ingredient?.image_large} /><span>+{trimmedCount}</span></p>}
                                    
                                </div>
                            )
                    })}
                </div>
                <div className={styleFeed.price}>
                    <span className="text text_type_digits-default mr-2">{total}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </section>
        </section>
    )
}

export default OrderFeedListItem;