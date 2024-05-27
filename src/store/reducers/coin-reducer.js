import { GET_COINS } from "../actions/coin-action";


export const coinReducer = (state = [], action) => {
    switch (action.type) {
        case GET_COINS:
            return [...action.payload];
        default:
            return state;
    }
}