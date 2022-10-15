import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Tabs.module.css'
import { useAppSelector } from "../../../services/hooks";

function Tabs () {
    const current = useAppSelector(state => state.activeTab.activeTab)
    return (
        <div className={style.tabs}>
            <Tab value="one" active={current === 'one'} onClick={()=>{}}>Булки</Tab>
            <Tab value="two" active={current === 'two'} onClick={()=>{}}>Соусы</Tab>
            <Tab value="three" active={current === 'three'} onClick={()=>{}}>Начинки</Tab>
        </div>
    )
}

export default Tabs;