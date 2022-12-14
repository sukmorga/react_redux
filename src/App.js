import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customers";
import { addCashAction, asyncAddCashAction, getCashAction } from "./store/cashReduser";
import { addCustomerAction, removeCustomerAction } from "./store/customerReduser";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div style={{ fontSize: 20 }}>{cash}</div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => dispatch(asyncAddCashAction())}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer => <div onClick={() => removeCustomer(customer)} style={{ border: '1px solid red' }}>{customer.name}</div>)}
                </div>
                :
                <div>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
}

export default App;
