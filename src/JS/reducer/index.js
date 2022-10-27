import { combineReducers } from "redux";
import { prodReducer } from './prodReducer';
import { panierReducer } from './panierReducer';

export const rootReducer=combineReducers({
    prodReducer,panierReducer
})