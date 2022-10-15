import style from "../BurgerConstructor.module.css";
import React, {useRef} from "react";
import {useDrag, useDrop } from "react-dnd";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {SWAP_INGREDIENTS} from "../../../services/actions/constructor";
import {IEditItem} from "../../../interfaces/IEditItem";
import {IEditIngredient} from "../../../interfaces/IIngredient";
import {IEditDragItem} from "../../../interfaces/IEditDragItem";
import { useAppDispatch, useAppSelector } from "../../../services/hooks";

const EditableItem = (props: IEditItem) => {
    const ingredientList = useAppSelector(state => state.editableIngredients.ingredientList);
    const itemUid: string = props.item.uid;
    const ref = useRef<HTMLDivElement | any>(null);
    const dispatch = useAppDispatch();

    const [{isDragging}, drag] = useDrag({
        type: 'editableItem',
        item: {itemUid, ref},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, drop] = useDrop({
        accept: 'editableItem',
        hover(dragObject : IEditDragItem, monitor) {
            if (!dragObject.ref.current) {
                return
            }
            const dragIndex = ingredientList.findIndex((a : IEditIngredient)  => a.uid === dragObject.itemUid);
            const hoverIndex = ingredientList.findIndex((a : IEditIngredient) => a.uid === itemUid);
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffsetY: number = monitor.getClientOffset()?.y ?? 0;
            const hoverClientY: number = clientOffsetY - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch({
                type: SWAP_INGREDIENTS,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex
            })
        },
    })
    drag(drop(ref));
    const opacity: number = isDragging ? 0.5 : 1
    return (
        <section className={style.editableItem} ref={ref} style={{opacity}}>
            <section><DragIcon type="primary" /></section>
            <ConstructorElement
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image_mobile}
                handleClose={() => props.deleteItem(itemUid)}
            />
        </section>
    )
}

export default EditableItem