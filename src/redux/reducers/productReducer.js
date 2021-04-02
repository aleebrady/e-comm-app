import { ActionTypes } from "../constants/action-types"; // reducer always takes the initial state and action 

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}