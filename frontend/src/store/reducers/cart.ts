import { Map } from "immutable";
import {
    REMOVE_ITEM,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    CLEAR_CART
} from "constants/cart";
import { CartAction, CartState } from "types/state";

export const defaultState: CartState = Map();

function reducer(state: CartState = defaultState, action: CartAction) {
    switch (action.type) {
        case REMOVE_ITEM:
            return state.delete(action.payload.id);

        case INCREASE_ITEM_QUANTITY: {
            const isItemInCart = state.has(action.payload.id);

            return isItemInCart
                ? state.update(
                      action.payload.id,
                      (quantity: number) => (quantity += 1)
                  )
                : state.set(action.payload.id, 1);
        }

        case DECREASE_ITEM_QUANTITY: {
            const itemQuantity = state.get(action.payload.id);

            return itemQuantity > 1
                ? state.update(
                      action.payload.id,
                      (quantity: number) => (quantity -= 1)
                  )
                : state.delete(action.payload.id);
        }

        case CLEAR_CART:
            return state.clear();

        default:
            return state;
    }
}

export default reducer;
