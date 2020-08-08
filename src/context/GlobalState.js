import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    time: 25
}

//create context
export const GlobalContext = createContext(initialState);

//provider comoonents
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function timerAdd(time) {
        dispatch({
            type: 'ADD_TIME',
            payload: time
        });
    }

    function timerMinus(time) {
        dispatch({
            type: 'MINUS_TIME',
            payload: time
        })
    }

    return (<GlobalContext.Provider value =  {{
        time: state.time,
        timerAdd,
        timerMinus
    }}>
        { children }
    </GlobalContext.Provider>);

}