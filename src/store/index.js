import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReduser } from './cashReduser';
import { customerReduser } from './customerReduser';

const rootReduser = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
})
export const store = createStore(rootReduser, composeWithDevTools())
