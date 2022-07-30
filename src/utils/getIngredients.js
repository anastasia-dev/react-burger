import {SHOW_INGREDIENTS,  SHOW_INGREDIENTS_ERROR} from "../services/actions/ingredients";
import {checkApiResponse} from "./apiCheck";
import {URL_INGREDIENTS} from "./constants";

const getDataInfo = URL_INGREDIENTS;

export function getIngredients () {
    return function (dispatch) {
        fetch(getDataInfo)
            .then(checkApiResponse)
            .then(res => {
                dispatch({
                    type: SHOW_INGREDIENTS,
                    data: res.data.map(e => { return  { ...e, count: 0} })
                });
            })
            .catch (e => {
                alert(e);
                dispatch({
                    type: SHOW_INGREDIENTS_ERROR,
                    data: `Произошла ошибка ${e}`
                })
            })
    }
}

