import React from "react";
import style from './ModalOverlay.module.css';
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
};

function ModalOverlay (props) {
    return (
        <div className={style.overlayBox} onClick={props.close}></div>
    );
}

export default ModalOverlay