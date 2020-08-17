import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Work = () => {
    const {children} = useContext(GlobalContext);
    console.log(context)
    const [workTime, setWorkTime] = useState(25)
    return (
        <div className = "workclass">
            <h2>Work Time</h2>
            <button className = "up" value = {workTime} onClick = {(e) => setWorkTime( e.target.value = parseInt(e.target.value) + 1 ) }>+</button>
            <button className = "down" value={workTime} onClick = {(e) => setWorkTime(e.target.value > 0 ? e.target.value -= 1 : e.target.value = 0 ) }>-</button>
        <h3>{workTime} minutes</h3>
        </div>
    )
}
