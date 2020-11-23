import React from "react"
import './LotteryNumber.css'

function LotteryNumber(props) {
    function onHandleChange(event) {
        const {value} = event.target
        props.onNumChange(value)
    }
    let className = 'normalNum'
    if(props.isMegaBall) {
        className = 'megaballNum'
    }
    return <input type="text" className={className} onChange={onHandleChange} value={props.text} />
}

export default LotteryNumber