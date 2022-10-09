import React from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Tabs.module.css'
import {useSelector} from "react-redux";

function Tabs () {
    const current = useSelector((state: any) => state.activeTab.activeTab)
    return (
        <div className={style.tabs}>
            <Tab value="one" active={current === 'one'} onClick={()=>{}}>Булки</Tab>
            <Tab value="two" active={current === 'two'} onClick={()=>{}}>Соусы</Tab>
            <Tab value="three" active={current === 'three'} onClick={()=>{}}>Начинки</Tab>
        </div>
    )
}

export default Tabs;