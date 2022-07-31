import style from "../BurgerConstructor.module.css";
import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import PropTypes from "prop-types";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IngridientPropType} from "../../../types/Ingredients";
import {useDispatch, useSelector} from "react-redux";
import {SWAP_INGREDIENTS} from "../../../services/actions/constructor";

const EditableItem = (props) => {
    const ingredientList = useSelector(state => state.editableIngredients.ingredientList);
    const itemUid = props.item.uid;
    const ref = useRef(null);
    const dispatch = useDispatch();

    const [{isDragging}, drag] = useDrag({
        type: 'editableItem',
        item: {itemUid, ref},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    });

    const [, drop] = useDrop({
        accept: 'editableItem',
        hover(item, monitor) {
            if (!item.ref.current) {
                return
            }
            const dragIndex = ingredientList.findIndex(a => a.uid == item.itemUid);
            const hoverIndex = ingredientList.findIndex(a => a.uid == itemUid);
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
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
    const opacity = isDragging ? 0.5 : 1
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

EditableItem.propTypes = {
    item: IngridientPropType.isRequired,
    deleteItem: PropTypes.func.isRequired,
}

export default EditableItem