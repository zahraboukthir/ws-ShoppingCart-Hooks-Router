import {createStore} from 'redux'
import { panierReducer } from './reducer/panierReducer';
const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(panierReducer,devtools)