import React from "react";
import style from './ModalOverlay.module.css'

function ModalOverlay (props) {
    return (
        <div className={style.overlayBox} onClick={props.close}></div>
    );
}

export default ModalOverlay