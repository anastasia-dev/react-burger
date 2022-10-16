import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useAppSelector } from "../../../services/hooks";
import Modal from "../../Modal/Modal";
import OrderFeedItemDetails from "./OrderFeedItemDetails";

function OrderFeedItemDetailsModal() {
    const navigate = useNavigate();
    const closeModal = () : void => {
        navigate(-1);
    };
    const { ordersFeed } = useAppSelector(state => state.orderFeed)
    const { id } = useParams();
    const item = ordersFeed?.orders.find(order => order.number.toString() === id);
    return (
        <Modal close={closeModal} >
            <OrderFeedItemDetails item={item} />
        </Modal>
    )
}

export default OrderFeedItemDetailsModal;