import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Tabs.module.css'
import PropTypes from "prop-types";


const Tabs = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={style.tabs}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>Булки</Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>Соусы</Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>Начинки</Tab>
        </div>
    )
}

Tabs.propTypes = {
    value: PropTypes.string,
    active: PropTypes.string,
    onClick: PropTypes.func
}

export default Tabs;