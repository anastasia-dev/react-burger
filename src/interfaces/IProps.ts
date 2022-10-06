import {IIngredient} from "./IIngredient";

export interface IProps {
    funkClick: (showItemDetails: IIngredient) => void;
    item: IIngredient;
    class?: string;
    count?: number;
}