import React from "react";
import style from './BurgerConstructor.module.css'
import {CurrencyIcon, Button, ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import data from '../../utils/data.json';


function BurgerConstructor() {
    const [dataContent] = React.useState(data);
    return (
            <div className={style.mainSection}>
                <section className={style.fixedItem}>
                    <ConstructorElement
                        type="top"
                        text={dataContent[0].name}
                        price={dataContent[0].price}
                        thumbnail={dataContent[0].image_mobile}
                        isLocked={true}
                    />
                </section>
                <section className={style.editableSection}>
                    <section className={style.editableItem}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[1].name}
                            price={dataContent[1].price}
                            thumbnail={dataContent[1].image_mobile}
                        />
                    </section>
                    <section className={style.editableItem}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[2].name}
                            price={dataContent[2].price}
                            thumbnail={dataContent[2].image_mobile}
                        />
                    </section>
                    <section className={style.editableItem}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[3].name}
                            price={dataContent[3].price}
                            thumbnail={dataContent[3].image_mobile}
                        />
                    </section>
                    <section className={style.editableItem}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[4].name}
                            price={dataContent[4].price}
                            thumbnail={dataContent[4].image_mobile}
                        />
                    </section>
                    <section className={style.editableItem}>
                        <section><DragIcon type="primary" /></section>
                        <ConstructorElement
                            text={dataContent[5].name}
                            price={dataContent[5].price}
                            thumbnail={dataContent[5].image_mobile}
                        />
                    </section>
                </section>
                <section className={style.fixedItem}>
                    <ConstructorElement
                        type="bottom"
                        text={dataContent[0].name}
                        price={dataContent[0].price}
                        thumbnail={dataContent[0].image_mobile}
                        isLocked={true}
                    />
                </section>
                <section className={style.orderInfo}>
                    <section className={style.orderSum}>
                        <p className="text text_type_digits-medium">6121</p>
                        <CurrencyIcon type="primary" />
                    </section>
                    <Button type="primary" size="medium">Оформить заказ</Button>
                </section>
            </div>
    );
}

export default BurgerConstructor;