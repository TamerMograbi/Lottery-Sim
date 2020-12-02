import React from "react"
import './css/LotteryNumber.css'

function LotteryNumber(props) {
    function onHandleChange(event) {
        const {value} = event.target
        props.onNumChange(value)
    }
    let className = 'normalNum'
    let animationClass = ''
    if(props.isMegaBall) {
        className = 'megaballNum'
    }
    if(props.slotIndex === props.animationClassName[1]) {
        animationClass = 'animation'
    }
    return <input type="text" className={`${className} ${animationClass}`} onChange={onHandleChange} value={props.text} />
}

export default LotteryNumber