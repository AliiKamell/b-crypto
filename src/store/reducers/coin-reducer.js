import { GET_COINS, GET_NEWS } from "../actions/coin-action";



export const coinReducer = (state = [], action) => {
    switch (action.type) {
        case GET_COINS:
            return [...action.payload];
        default:
            return state;
    }
}


export const newsReducer = (state = [], action) => {
    switch(action.type) {
        case GET_NEWS:
            return [...action.payload];
            default:
                return state;
    }
}
