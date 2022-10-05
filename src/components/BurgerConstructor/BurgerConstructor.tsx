import React, {ReactElement} from "react";
import style from './BurgerConstructor.module.css'
import {CurrencyIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {getOrderNumber} from "../../services/actions/getOrderNumber";
import {ADD_INGREDIENT, CLEAR_CONSTRUCTOR_DATA, DELETE_INGREDIENT, SET_BUN} from "../../services/actions/constructor";
import {CLEAR_ORDER_NUMBER} from "../../services/actions/orderNumber";
import {CLEAR_ITEM_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT} from "../../services/actions/ingredients";
import {useDrop} from 'react-dnd';
import EditableItem from "./EditableItem/EditableItem";
import {isAuthorized} from "../../services/actions/usersAuth";
import {useLocation, useNavigate} from "react-router-dom";
import {IIngredient} from "../../interfaces/IIngredient";

function BurgerConstructor () {
    const elements  = useSelector((state: any) => state.ingredients);
    const editableElements = useSelector((state: any)  => state.editableIngredients);
    const orderNumberLoading = useSelector((state: any)  => state.orderNumber.orderNumberLoading);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    let content: ReactElement = (<></>);

    const getSum = () => {
        let sum: number = 0;
        if(editableElements.ingredientList) {
            sum += editableElements.ingredientList.reduce(function (prevSum:number, elem:IIngredient) {
                return prevSum + elem.price;
            }, 0);
        }
        if (editableElements.bun)
            sum += 2 * editableElements.bun.price;
        return sum;
    }

    const showOrderModal = () => {
        if (!isAuthorized()) {
            navigate('/login', {state: {from: location}});
        }
        else {
            let order: Array<string> = [];
            if (editableElements.bun) {
                order.push(editableElements.bun._id);
                order.push(editableElements.bun._id);
            } else {
                alert("Для оформления заказа добавьте в заказ булку");
                return;
            }
            editableElements.ingredientList.map((element:IIngredient) => element._id).forEach(item => order.push(item));
            dispatch(getOrderNumber({ingredients: order}));
        }
    }

    const hideOrderModal = () => {
        dispatch({
            type: CLEAR_ORDER_NUMBER
        });
        dispatch({
            type: CLEAR_ITEM_COUNT
        });
        dispatch({
            type: CLEAR_CONSTRUCTOR_DATA
        });
    }
    const deleteItem = (itemUid) => {
        dispatch({
            type: DECREASE_ITEM_COUNT,
            itemId: editableElements.ingredientList.find(ingredient => ingredient.uid === itemUid)._id
        });
        dispatch({
            type: DELETE_INGREDIENT,
            key: itemUid
        });
    }

    const [, dropIngredient] = useDrop({
        accept: "draggableIngredient",
        drop(itemId) {
            const element = elements.dataContent.find(e => e._id === itemId.id);
            if(element.type === 'bun') {
                if (editableElements.bun)
                    dispatch({
                        type: DECREASE_ITEM_COUNT,
                        itemId: editableElements.bun._id
                    });
                dispatch({
                    type: SET_BUN,
                    bun: element
                });
            } else {
                dispatch({
                    type: ADD_INGREDIENT,
                    item: element
                });
            }
            dispatch({
                type: INCREASE_ITEM_COUNT,
                itemId: element._id
            });
        },
    });

    const orderSum = React.useMemo(() => getSum(), [editableElements]);

    if(!elements.ingredientsLoading) {
        content = (
            <section ref={dropIngredient} className={style.mainSection}>
                {!orderNumberLoading && (
                    <Modal close={hideOrderModal}>
                        <OrderDetails />
                    </Modal>
                )}
                <section className={style.fixedItem}>
                    {!editableElements.bun && (
                        <section className={style.defaultConstructorText}>
                            <p className="text text_type_main-large">
                                Для сборки бургера перетащите сюда ингридиенты
                            </p>
                        </section>
                    )}
                    {
                        editableElements.bun && (
                            <ConstructorElement
                                type="top"
                                key={editableElements.bun._id}
                                text={editableElements.bun.name + " (верх)"}
                                price={editableElements.bun.price}
                                thumbnail={editableElements.bun.image_mobile}
                                isLocked={true}
                            />
                        )
                    }
                </section>
                <section className={style.editableSection}>
                    {editableElements.ingredientList.map((item,index)=>(
                        <EditableItem key={item.uid} item={item} deleteItem={deleteItem}/>
                    ))}
                </section>
                <section className={style.fixedItem}>
                    {editableElements.bun && (
                        <ConstructorElement
                            type="bottom"
                            key={editableElements.bun._id}
                            text={editableElements.bun.name + " (низ)"}
                            price={editableElements.bun.price}
                            thumbnail={editableElements.bun.image_mobile}
                            isLocked={true}
                        />
                    )}
                </section>
                <section className={style.orderInfo}>
                    <section className={style.orderSum}>
                        <p className="text text_type_digits-medium">{orderSum}</p>
                        <CurrencyIcon type="primary" />
                    </section>
                    <Button type="primary" size="medium" onClick={showOrderModal}>Оформить заказ</Button>
                </section>
            </section>
        )
    }

    return content;
}

export default BurgerConstructor;