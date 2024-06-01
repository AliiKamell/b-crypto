// import { createStore, applyMiddleware } from "redux";
// import { coinReducer } from "./reducers/coin-reducer";
// import { redux } from "zustand/middleware";
// import { thunk } from "redux-thunk";

// export const store = createStore(coinReducer, redux.applyMiddleWare(thunk));

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { coinReducer, newsReducer } from './reducers/coin-reducer';


const appRedcuder = combineReducers({
    coins: coinReducer,
    news: newsReducer
})

export const store = createStore(appRedcuder, applyMiddleware(thunk));
