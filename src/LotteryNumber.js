import React from "react"
import './LotteryNumber.css'

function LotteryNumber(props) {
    function onHandleChange(event) {
        const {value} = event.target
        props.onNumChange(value)
    }
    let className = 'normalNum'
    console.log(props)
    if(props.isMegaBall) {
        console.log('asdas')
        className = 'megaballNum'
    }
    return <textarea className={className} rows={3} cols={5} onChange={onHandleChange} value={props.text}> </textarea>
}

export default LotteryNumber