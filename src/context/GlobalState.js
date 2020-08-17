import React, { createContext , useReducer } from 'react'
import AppReducer from './AppReducer'
//Initial state
const initialState = {
    time: [25]
}

//create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value = {{
        time: state.time
    }}>
        {children}
    </GlobalContext.Provider>);
}