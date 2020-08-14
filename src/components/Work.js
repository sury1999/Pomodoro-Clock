import React, {useState} from 'react'

export const Work = () => {
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
