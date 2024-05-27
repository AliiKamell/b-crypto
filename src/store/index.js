// import { createStore, applyMiddleware } from "redux";
// import { coinReducer } from "./reducers/coin-reducer";
// import { redux } from "zustand/middleware";
// import { thunk } from "redux-thunk";

// export const store = createStore(coinReducer, redux.applyMiddleWare(thunk));

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { coinReducer } from './reducers/coin-reducer';

export const store = createStore(coinReducer, applyMiddleware(thunk));
