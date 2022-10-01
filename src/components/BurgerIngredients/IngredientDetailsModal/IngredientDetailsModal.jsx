import React from "react";
import {useNavigate} from "react-router-dom";
import IngredientDetails from "../../IngredientDetails/IngredientDetails";
import Modal from "../../Modal/Modal";

function IngredientDetailsModal () {
    const navigate = useNavigate();
    const closeModal = e => {
        e.stopPropagation();
        navigate(-1);
    };

    return (<Modal title="Детали ингредиента" close={closeModal}>
        <IngredientDetails />
    </Modal>)
}

export default IngredientDetailsModal;