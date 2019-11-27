import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer";
import {logger} from "redux-logger";
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
