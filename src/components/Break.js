import React,{useState} from 'react'

export const Break = () => {
    const [breakTime, setBreakTime] = useState(5)
    return (
        <div className = "breakclass">
            <h2>Break Time</h2>
            <button className = "up" value = {breakTime} onClick = {(e) => setBreakTime( e.target.value = parseInt(e.target.value) + 1 ) }>+</button>
            <button className = "down" value = {breakTime} onClick = {(e) => setBreakTime(e.target.value > 0 ? e.target.value -= 1 : e.target.value = 0 ) }>-</button>
            <h3>{breakTime} minutes</h3>
            
        </div>
    )
}
