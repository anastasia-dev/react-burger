import { CLEAR_ITEM_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT, SHOW_INGREDIENTS_ERROR, SHOW_INGREDIENTS_REQUEST, SHOW_INGREDIENTS_SUCCESS } from "../actions/ingredients";
import { ingredientsInitialState, ingredientsReducer } from "./burgerIngredientsReducer";

describe("burger ingredients reducer", () => {
    it("should return the burger ingredients reducer inital state", () => {
        expect(ingredientsReducer(undefined, {})).toEqual(ingredientsInitialState);
    })

    const testState = {
      dataContent: [{}],
      ingredientsFailed: false,
      ingredientsLoading: false,
      ingredientsSuccess: false
   }

    it("should handle SHOW_INGREDIENTS_REQUEST", () => {
        expect(ingredientsReducer({
            ...testState,
            ingredientsLoading: false
         }, {
            type: SHOW_INGREDIENTS_REQUEST
         })).toEqual({
            ...testState,
            ingredientsLoading: true
         });
    })

    it("should handle SHOW_INGREDIENTS_ERROR", () => {
        expect(ingredientsReducer(testState, {
            type: SHOW_INGREDIENTS_ERROR
         })).toEqual({
            ...testState,
            dataContent: [],
            ingredientsFailed: true
         });
    })

    it("should handle SHOW_INGREDIENTS_SUCCESS", () => {
        const data = [{}, {}]
        expect(ingredientsReducer(testState, {
            type: SHOW_INGREDIENTS_SUCCESS,
            data: data
         })).toEqual({
            ...testState,
            dataContent: data,
            ingredientsSuccess: true
         });
    })

    const ingredientId = "1";
    const bunId = "2"
    const ingredientCount0 = {_id: ingredientId, count: 0 };
    const bunCount0 = {_id: bunId, count: 0, type: "bun" };
    const ingredientCount1 = { ...ingredientCount0, count: 1 };
    const bunCount2 = { ...bunCount0, count: 2 };

    it("should handle INCREASE_ITEM_COUNT", () => {
         const data = [ingredientCount0, bunCount0]
         const state = { 
            ...testState,
            dataContent: data,
         };
        expect(ingredientsReducer(state, {
            type: INCREASE_ITEM_COUNT,
            itemId: ingredientId
         })).toEqual({
            ...state, 
            dataContent: [ingredientCount1, bunCount0]
         });
         expect(ingredientsReducer(state, {
            type: INCREASE_ITEM_COUNT,
            itemId: bunId
         })).toEqual({
            ...state,
            dataContent: [ingredientCount1, bunCount2],
         });
    })

    it("should handle DECREASE_ITEM_COUNT", () => {
        const data = [ingredientCount0, bunCount0]
        const state = {          
            ...testState,  
            dataContent: data,
        };
        expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: ingredientId
         })).toEqual({
            ...state, 
            dataContent: [ingredientCount0, bunCount2]
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: ingredientId
         })).toEqual({
            ...state, 
            dataContent: [ingredientCount0, bunCount2]
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: bunId
         })).toEqual({
            ...state,
            dataContent: [ingredientCount0, bunCount0],
         });
         expect(ingredientsReducer(state, {
            type: DECREASE_ITEM_COUNT,
            itemId: bunId
         })).toEqual({
            ...state,
            dataContent: [ingredientCount0, bunCount0],
         });
    })

    it("should handle CLEAR_ITEM_COUNT", () => {
        const data = [ingredientCount1, bunCount2]
        const state = {        
            ...testState,    
            dataContent: data,
        };
        expect(ingredientsReducer(state, {
            type: CLEAR_ITEM_COUNT,
         })).toEqual({
            ...state, 
            dataContent: [ingredientCount0, bunCount0]
         });
    })
});