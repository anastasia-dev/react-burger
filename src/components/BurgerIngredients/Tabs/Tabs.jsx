import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Tabs.module.css'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";


function Tabs () {
    const current = useSelector(state => state.activeTab.activeTab)
    return (
        <div className={style.tabs}>
            <Tab value="one" active={current === 'one'} >Булки</Tab>
            <Tab value="two" active={current === 'two'} >Соусы</Tab>
            <Tab value="three" active={current === 'three'} >Начинки</Tab>
        </div>
    )
}

Tabs.propTypes = {
    value: PropTypes.string,
    active: PropTypes.string
}

export default Tabs;