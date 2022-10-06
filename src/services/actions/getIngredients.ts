import {
    SHOW_INGREDIENTS_ERROR,
    SHOW_INGREDIENTS_REQUEST,
    SHOW_INGREDIENTS_SUCCESS
} from "./ingredients";
import {checkApiResponse} from "../../utils/apiCheck";
import {URL_INGREDIENTS} from "../../utils/constants";
import {Action, Dispatch} from "redux";

const getDataInfo = URL_INGREDIENTS;

export function getIngredients () {
    return function (dispatch: Dispatch<Action>) {
        dispatch({
            type: SHOW_INGREDIENTS_REQUEST
        });
        fetch(getDataInfo)
            .then(checkApiResponse)
            .then(res => {
                dispatch({
                    type: SHOW_INGREDIENTS_SUCCESS,
                    data: res.data.map((e: any) => { return  { ...e, count: 0} })
                });
            })
            .catch (e => {
                dispatch({
                    type: SHOW_INGREDIENTS_ERROR,
                    data: `Произошла ошибка ${e}`
                })
            })
    }
}

