import React, { createContext , useReducer } from 'react;'

//Initial state
const initialState = {
    time: [25]
}

//create context
export const GlobalContext = useContext(initialState)