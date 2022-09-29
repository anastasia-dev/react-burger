import React, {useEffect} from "react";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getIngredients} from "../../utils/getIngredients";
import {HIDE_INGREDIENT_DETAILS, SHOW_INGREDIENT_DETAILS} from "../../services/actions/ingredientDetails";


function IngredientsId() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector((store) => store.ingredients);
    const detailsItem = useSelector((store) => store.detailsItem);

    const setActiveItem = () => {
        if (items.dataContent?.length) {
            dispatch({
                type: SHOW_INGREDIENT_DETAILS,
                item: items.dataContent[items.dataContent.findIndex((elem) => elem._id === id)]
            })
        }
    };

    useEffect(()=>{ dispatch(getIngredients()); },[]);
    useEffect( ()=> {
        setActiveItem();
        return () => { dispatch({ type: HIDE_INGREDIENT_DETAILS }) }
    },[items]);

    return (detailsItem.item ? <IngredientDetails/> : null);
}

export default IngredientsId;