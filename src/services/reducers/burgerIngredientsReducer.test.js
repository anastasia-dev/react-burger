import { CLEAR_ITEM_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT, SHOW_INGREDIENTS_ERROR, SHOW_INGREDIENTS_REQUEST, SHOW_INGREDIENTS_SUCCESS } from "../actions/ingredients";
import { ingredientsReducer } from "./burgerIngredientsReducer";

describe("burger ingredients reducer", () => {
    it("should return the burger ingredients reducer inital state", () => {
        expect(ingredientsReducer(undefined, {})).toEqual({
            dataContent: [],
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false
         });
    })

    it("should handle SHOW_INGREDIENTS_REQUEST", () => {
        expect(ingredientsReducer({
            dataContent: [],
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false
         }, {
            type: SHOW_INGREDIENTS_REQUEST
         })).toEqual({
            dataContent: [],
            ingredientsFailed: false,
            ingredientsLoading: true,
            ingredientsSuccess: false
         });
    })

    it("should handle SHOW_INGREDIENTS_ERROR", () => {
        expect(ingredientsReducer({
            dataContent: [{}],
            ingredientsFailed: false,
            ingredientsLoading: true,
            ingredientsSuccess: true
         }, {
            type: SHOW_INGREDIENTS_ERROR
         })).toEqual({
            dataContent: [],
            ingredientsFailed: true,
            ingredientsLoading: false,
            ingredientsSuccess: false
         });
    })

    it("should handle SHOW_INGREDIENTS_SUCCESS", () => {
        const data = [{}, {}]
        expect(ingredientsReducer({
            dataContent: [{}],
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false
         }, {
            type: SHOW_INGREDIENTS_SUCCESS,
            data: data
         })).toEqual({
            dataContent: data,
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: true
         });
    })

    it("should handle INCREASE_ITEM_COUNT", () => {
        const data = [{_id: "1", count: 0 }, {_id: "2", count: 0, type: "bun" }]
        const state = {            
            dataContent: data,
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false 
        };
        expect(ingredientsReducer(state, {
            type: INCREASE_ITEM_COUNT,
            itemId: "1"
         })).toEqual({
            ...state, 
            dataContent: [{_id: "1", count: 1 }, {_id: "2", count: 0, type: "bun"}]
         });
         expect(ingredientsReducer(state, {
            type: INCREASE_ITEM_COUNT,
            itemId: "2"
         })).toEqual({
            ...state,
            dataContent: [{_id: "1", count: 1 }, {_id: "2", count: 2, type: "bun"}],
         });
    })

    it("should handle DECREASE_ITEM_COUNT", () => {
        const data = [{_id: "1", count: 1 }, {_id: "2", count: 2, type: "bun" }]
        const state = {            
            dataContent: data,
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false 
        };
        expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: "1"
         })).toEqual({
            ...state, 
            dataContent: [{_id: "1", count: 0 }, {_id: "2", count: 2, type: "bun"}]
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: "1"
         })).toEqual({
            ...state, 
            dataContent: [{_id: "1", count: 0 }, {_id: "2", count: 2, type: "bun"}]
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: "2"
         })).toEqual({
            ...state,
            dataContent: [{_id: "1", count: 0 }, {_id: "2", count: 0, type: "bun"}],
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: "2"
         })).toEqual({
            ...state,
            dataContent: [{_id: "1", count: 0 }, {_id: "2", count: 0, type: "bun"}],
         });
    })

    it("should handle CLEAR_ITEM_COUNT", () => {
        const data = [{_id: "1", count: 1 }, {_id: "2", count: 2, type: "bun" }]
        const state = {            
            dataContent: data,
            ingredientsFailed: false,
            ingredientsLoading: false,
            ingredientsSuccess: false 
        };
        expect(ingredientsReducer(state, {
            type: CLEAR_ITEM_COUNT,
         })).toEqual({
            ...state, 
            dataContent: [{_id: "1", count: 0 }, {_id: "2", count: 0, type: "bun"}]
         });
    })

});