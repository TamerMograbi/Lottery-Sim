import React from "react"
import './LotteryNumber.css'

function LotteryNumber(props) {
    function onHandleChange(event) {
        const {value} = event.target
        props.onNumChange(value)
    }
    return <textarea rows={3} cols={5} className="num" onChange={onHandleChange} value={props.text}> </textarea>
}

export default LotteryNumber