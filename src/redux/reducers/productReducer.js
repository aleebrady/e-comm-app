import { ActionTypes } from "../constants/action-types"; // reducer always takes the initial state and action 

const initialState = {
    products = [
        {
            id: 1,
            title: "Knee Sleeves",
            category: "fitness equipment"
        },
    ]
}
export const productReducer = (state, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}