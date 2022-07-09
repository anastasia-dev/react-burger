import React from "react";
import style from './BurgerConstructor.module.css'
import {CurrencyIcon, Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {IngridientPropType} from "../../types/Ingredients";

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(IngridientPropType.isRequired).isRequired
};

function BurgerConstructor (props) {
    const dataContent = props.data;
    const [editableElement] = React.useState([2,3,6,4,5]);
    const [openModal, setOpenModal] = React.useState(false);

    const modalOpen = () => {
        setOpenModal(true);
    }

    const modalClose = () => {
        setOpenModal(false)
    }
    return (dataContent.length &&
            <div className={style.mainSection}>
                {openModal && (
                    <Modal close={modalClose}>
                        <OrderDetails/>
                    </Modal>
                )}
                <section className={style.fixedItem}>
                    {dataContent.map((item, index) => (
                        item.type === 'bun' && index == 0 &&
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
                    <section className={style.editableItem} key={dataContent[item]._id}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[item].name}
                            price={dataContent[item].price}
                            thumbnail={dataContent[item].image_mobile}
                        />

                    </section>
                    ))}
                </section>
                <section className={style.fixedItem}>
                    {dataContent.map((item, index) => (
                        item.type === 'bun' && index == 0 && <ConstructorElement
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
                        <p className="text text_type_digits-medium">6121</p>
                        <CurrencyIcon type="primary" />
                    </section>
                    <Button type="primary" size="medium" onClick={modalOpen}>Оформить заказ</Button>
                </section>
            </div>
    );
}

export default BurgerConstructor;