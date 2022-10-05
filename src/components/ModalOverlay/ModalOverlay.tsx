import React from "react";
import style from './ModalOverlay.module.css';
import {IModal} from "../../interfaces/IModal";

function ModalOverlay (props:IModal) {
    return (
        <div className={style.overlayBox} onClick={props.close}></div>
    );
}

export default ModalOverlay