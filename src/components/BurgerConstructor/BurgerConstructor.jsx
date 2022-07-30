import React  from "react";
import style from './BurgerConstructor.module.css'
import {CurrencyIcon, Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../types/Ingredients";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {getOrderNumber} from "../../utils/getOrderNumber";
import {ADD_INGREDIENT, CLEAR_CONSTRUCTOR_DATA, DELETE_INGREDIENT, SET_BUN} from "../../services/actions/constructor";
import {HIDE_ORDER_MODAL} from "../../services/actions/orderModal";
import {CLEAR_ORDER_NUMBER} from "../../services/actions/orderNumber";
import {CLEAR_ITEM_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT} from "../../services/actions/ingredients";
import {useDrop} from 'react-dnd';
import EditableItem from "./EditableItem/EditableItem";

BurgerConstructor.propTypes = {
    ingredientsData: PropTypes.arrayOf(IngridientPropType.isRequired)
};


function BurgerConstructor () {
    const elements  = useSelector(state => state.ingredients);
    const editableElements = useSelector(state => state.editableIngredients);
    const orderNumberLoad = useSelector(state => state.orderNumber.getOrderNumberLoad);

    const dispatch = useDispatch();

    const getSum = () => {
        let sum = 0;
        if(editableElements.ingredientList) {
            sum += editableElements.ingredientList.reduce(function (prevSum, elem) {
                return prevSum + elem.price;
            }, 0);
        }
        if (editableElements.bun)
            sum += 2 * editableElements.bun.price;
        return sum;
    }

    const showOrderModal = () => {
        let order = [];
        if (editableElements.bun) {
            order.push(editableElements.bun._id);
            order.push(editableElements.bun._id);
        } else {
            alert("Для оформления заказа добавьте в заказ булку");
            return;
        }
        editableElements.ingredientList.map(element => element._id).forEach(item => order.push(item));
        dispatch(getOrderNumber({ ingredients: order }));
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
        dispatch({
            type: HIDE_ORDER_MODAL
        });

    }
    const deleteItem = (itemUid) => {
        dispatch({
            type: DECREASE_ITEM_COUNT,
            itemId: editableElements.ingredientList.find(ingredient => ingredient.Uid == itemUid)._id
        });
        dispatch({
            type: DELETE_INGREDIENT,
            key: itemUid
        });
    }

    const [, dropIngredient] = useDrop({
        accept: "draggableIngredient",
        drop(itemId) {
            const element = elements.dataContent.find(e => e._id == itemId.id);
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

    return (!elements.ingredientsLoading &&
        <section ref={dropIngredient} className={style.mainSection}>
            {!orderNumberLoad && (
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
                            key={uuidv4()}
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
                    <EditableItem key={item.Uid} item={item} deleteItem={deleteItem}/>
                ))}
            </section>
            <section className={style.fixedItem}>
                {editableElements.bun && (
                <ConstructorElement
                    type="bottom"
                    key={uuidv4()}
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
    );
}

export default BurgerConstructor;