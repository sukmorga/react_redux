import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cashReduser } from './cashReduser';
import { customerReduser } from './customerReduser';
import createSagaMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga';


const sagaMiddleware = createSagaMiddleware();

const rootReduser = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
})
export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(countWatcher)
