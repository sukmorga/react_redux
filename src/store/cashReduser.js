


const defaultState = {
    cash: 0,
}

export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';
export const ASYNC_ADD_CASH = 'ADD_CASH';

export const cashReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return { ...state, cash: state.cash + 1 }
        case GET_CASH:
            return { ...state, cash: state.cash - 1 }
        default:
            return state
    }
}

export const addCashAction = (payload) => ({ type: ADD_CASH })
export const getCashAction = (payload) => ({ type: GET_CASH })
export const asyncAddCashAction = (payload) => ({ type: ASYNC_ADD_CASH })
