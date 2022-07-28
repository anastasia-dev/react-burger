import React from "react";
import * as ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Modal.module.css';
import PropTypes from "prop-types";

Modal.propTypes = {
    title: PropTypes.string,
    close: PropTypes.func.isRequired
};

const modalRoot = document.getElementById("modal-root");

function Modal (props) {
    const pressEsc = React.useCallback((e) => {
        if (e.key === 'Escape') {
            props.close();
        }
    },[props.close]);

    React.useEffect(() => {
        document.addEventListener("keydown", pressEsc);

        return () => {
            document.removeEventListener("keydown", pressEsc);
        };
    },[props.close]);

    return modalRoot && ReactDOM.createPortal(
        <>
            <ModalOverlay close={props.close}/>
            <div className={style.modalPopup}>
                <section className={style.ElementInfo}>
                    <p className="text text_type_main-medium">{props.title}</p>
                    <CloseIcon type="primary" onClick={props.close}/>
                </section>
                {props.children}
            </div>
        </>,
        modalRoot
    );
}

export default Modal