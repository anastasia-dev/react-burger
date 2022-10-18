import { ADD_INGREDIENT, CLEAR_CONSTRUCTOR_DATA, DELETE_INGREDIENT, SET_BUN, SWAP_INGREDIENTS } from "../actions/constructor";
import { burgerConstructorReducer } from "./burgerConstructorReducer";

describe("burger constructor reducer", () => {
    let state = burgerConstructorReducer(undefined, {});

    it("should return the burger constructor reducer inital state", () => {
        expect(state).toEqual(
            {
                ingredientList: [],
                bun: undefined
            }
        );
    })

    const ingredient1 = {
        _id: "123",
        name: "burger",
        type: "ingredient",
    };

    const ingredient2 = {
        _id: "1234",
        name: "burger1",
        type: "ingredient1",
    };

    const ingredient3 = {
        _id: "12345",
        name: "burger15",
        type: "ingredient15",
    };
    
    
    it("should handle ADD_INGREDIENT", () => {
        state = burgerConstructorReducer(state, { type: ADD_INGREDIENT, item : ingredient1 });
        state = burgerConstructorReducer(state, { type: ADD_INGREDIENT, item : ingredient2 });
        state = burgerConstructorReducer(state, { type: ADD_INGREDIENT, item : ingredient3 });
        expect(state.ingredientList.length).toBe(3);
        testIngredient(state.ingredientList[0], ingredient1);
        testIngredient(state.ingredientList[1], ingredient2);
        testIngredient(state.ingredientList[2], ingredient3);
        expect(state.bun).toBeUndefined();
    })

    it("should handle DELETE_INGREDIENT", () => {
        state = burgerConstructorReducer(state, { type: DELETE_INGREDIENT, key: state.ingredientList[0].uid });
        expect(state.ingredientList.length).toBe(2);
        testIngredient(state.ingredientList[0], ingredient2);
        testIngredient(state.ingredientList[1], ingredient3);
        expect(state.bun).toBeUndefined();
    })

    it("should handle SWAP_INGREDIENTS", () => {
        state = burgerConstructorReducer(state, { type: SWAP_INGREDIENTS, dragIndex: 0, hoverIndex: 1 });
        expect(state.ingredientList.length).toBe(2);
        testIngredient(state.ingredientList[0], ingredient3);
        testIngredient(state.ingredientList[1], ingredient2);
    })

    it("should handle CLEAR_CONSTRUCTOR_DATA", () => {
        expect(burgerConstructorReducer({}, { type: CLEAR_CONSTRUCTOR_DATA })).toEqual({ ingredientList: [], bun: undefined });
    })

    it("should handle SET_BUN", () => {
        expect(burgerConstructorReducer({}, { type: SET_BUN, bun: ingredient1 })).toEqual({
            bun: ingredient1
        });
    })

});

const testIngredient = (actualIngredient, expectedIngredient) => {
    for (let x in actualIngredient) {
        if (x !== "uid")
            expect(actualIngredient[x]).toEqual(expectedIngredient[x]);
    }
    expect(actualIngredient.uid).toBeDefined();
}


