import { CLEAR_ORDER_NUMBER, SHOW_ORDER_NUMBER_ERROR, SHOW_ORDER_NUMBER_REQUEST, SHOW_ORDER_NUMBER_SUCCESS } from "../actions/orderNumber";
import { orderNumberInitialState, orderNumberReducer } from "./odrerNumberReducer";

describe("order number reducer", () => {
    it("should return the order number reducer inital state", () => {
        expect(orderNumberReducer(undefined, {})).toEqual(orderNumberInitialState);
    });

    it("should handle SHOW_ORDER_NUMBER_REQUEST", () => {
        expect(orderNumberReducer(orderNumberInitialState, {
            type: SHOW_ORDER_NUMBER_REQUEST
         })).toEqual({
            ...orderNumberInitialState,
            orderNumberLoading: true
         });
    })

    it("should handle SHOW_ORDER_NUMBER_ERROR", () => {
        expect(orderNumberReducer(orderNumberInitialState, {
            type: SHOW_ORDER_NUMBER_ERROR
         })).toEqual({
            ...orderNumberInitialState,
            orderNumberFailed: true
         });
    })

    it("should handle SHOW_ORDER_NUMBER_SUCCESS", () => {
        expect(orderNumberReducer(orderNumberInitialState, {
            type: SHOW_ORDER_NUMBER_SUCCESS,
            data: "123"
         })).toEqual({
            ...orderNumberInitialState,
            orderNumber: "123",
            orderNumberSuccess: true
         });
    })

    it("should handle CLEAR_ORDER_NUMBER", () => {
        expect(orderNumberReducer({
            ...orderNumberInitialState,
            orderNumber: "1234"
         }, {
            type: CLEAR_ORDER_NUMBER,
         })).toEqual(orderNumberInitialState);
    })
});