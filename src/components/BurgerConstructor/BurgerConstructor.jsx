import React  from "react";
import style from './BurgerConstructor.module.css'
import {CurrencyIcon, Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../types/Ingredients";
import {BurgerConstructorContext} from "../../services/BurgerConstructorContext";
import BurgerConstructorReducer from "./BurgerConstructorReducer";
import {finalSum} from "./BurgerConstructorReducer";

const getOrdersInfo = 'https://norma.nomoreparties.space/api/orders';

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(IngridientPropType.isRequired).isRequired
};



function BurgerConstructor () {
    const [orderSum, orderSumDispatch] = React.useReducer(BurgerConstructorReducer, 0);
    const newData = React.useContext(BurgerConstructorContext);
    const [fixed] = React.useState(0);
    const [editableElement] = React.useState([2,3,6,4,5]);
    const [openModal, setOpenModal] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0)


    const getSum = () => {
        if(newData?.length) {
            return editableElement.reduce(function (prevSum, currentSum) {
                return prevSum + newData[currentSum].price;
            }, 0) + 2 * newData[fixed].price;
        }
    }

    React.useEffect(()=> orderSumDispatch({type:finalSum, orderSum: getSum()}),[editableElement, fixed, newData]);

    const getNum = () => {
        let ingredientIds = { ingredients: [] };
        ingredientIds.ingredients.push(newData[fixed]._id);
        ingredientIds.ingredients.push(newData[fixed]._id);
        editableElement.map((item) => ingredientIds.ingredients.push(newData[item]._id));

        fetch(getOrdersInfo,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredientIds)
        })
        .then(res =>{
            if (res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Произошла ошибка ${res?.status}`);
            }

        })
        .then(newData => {
            setOrderNumber(newData.order.number);
            setOpenModal(true);
        })
        .catch (e => {
            alert(e);
        })
    }
    const modalOpen = () => {
        getNum();
    }

    const modalClose = () => {
        setOpenModal(false);
        setOrderNumber(0);
    }
    return (newData?.length &&
        <div className={style.mainSection}>
            {orderNumber !=0 && openModal && (
                <Modal close={modalClose}>
                    <OrderDetails number={orderNumber} />
                </Modal>
            )}
            <section className={style.fixedItem}>
                {newData.map((item, index) => (
                    item?.type === 'bun' && index == 0 &&
                    <ConstructorElement
                        type="top"
                        key={item._id}
                        text={item.name + " (верх)"}
                        price={item.price}
                        thumbnail={item.image_mobile}
                        isLocked={true}
                    />
                ))}
            </section>
            <section className={style.editableSection}>
                {editableElement.map((item,index)=>(
                    <section className={style.editableItem} key={newData[item]._id}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={newData[item].name}
                            price={newData[item].price}
                            thumbnail={newData[item].image_mobile}
                        />

                    </section>
                ))}
            </section>
            <section className={style.fixedItem}>
                {newData.map((item, index) => (
                    item?.type === 'bun' && index == 0 && <ConstructorElement
                        type="bottom"
                        key={item._id}
                        text={item.name + " (низ)"}
                        price={item.price}
                        thumbnail={item.image_mobile}
                        isLocked={true}
                    />
                ))}
            </section>
            <section className={style.orderInfo}>
                <section className={style.orderSum}>
                    <p className="text text_type_digits-medium">{orderSum}</p>
                    <CurrencyIcon type="primary" />
                </section>
                <Button type="primary" size="medium" onClick={modalOpen}>Оформить заказ</Button>
            </section>
        </div>
    );
}

export default BurgerConstructor;