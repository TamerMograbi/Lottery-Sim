import React,{useState} from "react"
import './LotteryNumber.css'

function LotteryNumber() {
    const [text,setText] = useState("")
    function onHandleChange(event) {
        const {value} = event.target
        setText(value)
    }
    return <textarea rows={3} cols={5} className="num" onChange={onHandleChange} value={text}> </textarea>
}

export default LotteryNumber