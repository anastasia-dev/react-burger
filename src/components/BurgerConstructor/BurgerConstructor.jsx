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
    ingredientsData: PropTypes.arrayOf(IngridientPropType.isRequired)
};



function BurgerConstructor () {
    const [orderSum, orderSumDispatch] = React.useReducer(BurgerConstructorReducer, 0);
    const ingredientsData = React.useContext(BurgerConstructorContext);
    const bun = React.useMemo(() => ingredientsData.find(el => el.type === "bun"), [ingredientsData]);

    const [editableElement] = React.useState([2,3,6,4,5]);
    const [openModal, setOpenModal] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(0)


    const getSum = () => {
        if(ingredientsData?.length) {
            return editableElement.reduce(function (prevSum, currentSum) {
                return prevSum + ingredientsData[currentSum].price;
            }, 0) + 2 * bun.price;
        }
    }

    React.useEffect(()=> orderSumDispatch({type:finalSum, orderSum: getSum()}),[editableElement, bun, ingredientsData]);

    const getNum = () => {
        let ingredientIds = { ingredients: [] };
        ingredientIds.ingredients.push(bun._id);
        ingredientIds.ingredients.push(bun._id);
        editableElement.map((item) => ingredientIds.ingredients.push(ingredientsData[item]._id));

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
    return (ingredientsData?.length &&
        <section className={style.mainSection}>
            {orderNumber !=0 && openModal && (
                <Modal close={modalClose}>
                    <OrderDetails number={orderNumber} />
                </Modal>
            )}
            <section className={style.fixedItem}>
                {ingredientsData.map((item, index) => (
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
                    <section className={style.editableItem} key={ingredientsData[item]._id}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={ingredientsData[item].name}
                            price={ingredientsData[item].price}
                            thumbnail={ingredientsData[item].image_mobile}
                        />

                    </section>
                ))}
            </section>
            <section className={style.fixedItem}>
                {ingredientsData.map((item, index) => (
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
        </section>
    );
}

export default BurgerConstructor;