import { CLEAR_ORDER_NUMBER, SHOW_ORDER_NUMBER_ERROR, SHOW_ORDER_NUMBER_REQUEST, SHOW_ORDER_NUMBER_SUCCESS } from "../actions/orderNumber";
import { orderNumberReducer } from "./odrerNumberReducer";

describe("order number reducer", () => {
    it("should return the order number reducer inital state", () => {
        expect(orderNumberReducer(undefined, {})).toEqual({
           orderNumber: undefined,
           orderNumberFailed: false,
           orderNumberLoading: false,
           orderNumberSuccess: false,
        });
    });

    it("should handle SHOW_ORDER_NUMBER_REQUEST", () => {
        expect(orderNumberReducer({
            orderNumber: undefined,
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         }, {
            type: SHOW_ORDER_NUMBER_REQUEST
         })).toEqual({
            orderNumber: undefined,
            orderNumberFailed: false,
            orderNumberLoading: true,
            orderNumberSuccess: false,
         });
    })

    it("should handle SHOW_ORDER_NUMBER_ERROR", () => {
        expect(orderNumberReducer({
            orderNumber: undefined,
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         }, {
            type: SHOW_ORDER_NUMBER_ERROR
         })).toEqual({
            orderNumber: undefined,
            orderNumberFailed: true,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         });
    })

    it("should handle SHOW_ORDER_NUMBER_SUCCESS", () => {
        expect(orderNumberReducer({
            orderNumber: undefined,
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         }, {
            type: SHOW_ORDER_NUMBER_SUCCESS,
            data: "123"
         })).toEqual({
            orderNumber: "123",
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: true,
         });
    })

    it("should handle CLEAR_ORDER_NUMBER", () => {
        expect(orderNumberReducer({
            orderNumber: "1234",
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         }, {
            type: CLEAR_ORDER_NUMBER,
         })).toEqual({
            orderNumber: undefined,
            orderNumberFailed: false,
            orderNumberLoading: false,
            orderNumberSuccess: false,
         });
    })
});