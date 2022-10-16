export const SHOW_ORDER_NUMBER_REQUEST : 'SHOW_ORDER_NUMBER_REQUEST' = 'SHOW_ORDER_NUMBER_REQUEST';
export const SHOW_ORDER_NUMBER_SUCCESS : 'SHOW_ORDER_NUMBER_SUCCESS' = 'SHOW_ORDER_NUMBER_SUCCESS';
export const SHOW_ORDER_NUMBER_ERROR : 'SHOW_ORDER_NUMBER_ERROR' = 'SHOW_ORDER_NUMBER_ERROR';
export const CLEAR_ORDER_NUMBER : 'CLEAR_ORDER_NUMBER' = 'CLEAR_ORDER_NUMBER';

interface IShowOrderNumberRequestAction {
    type : typeof SHOW_ORDER_NUMBER_REQUEST
}
interface IShowOrderNumberSuccessAction {
    type : typeof SHOW_ORDER_NUMBER_SUCCESS
    data : string
}
interface IShowOrderNumberErrorAction {
    type : typeof SHOW_ORDER_NUMBER_ERROR
}
interface IClearOrderNumber {
    type : typeof CLEAR_ORDER_NUMBER
}
export type OrderNumberActions = IShowOrderNumberErrorAction | IShowOrderNumberRequestAction | IShowOrderNumberSuccessAction | IClearOrderNumber;