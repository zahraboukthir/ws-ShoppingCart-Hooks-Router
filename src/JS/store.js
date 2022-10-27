import {createStore} from 'redux'
import { rootReducer } from './reducer';

const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store=createStore(rootReducer,devtools)