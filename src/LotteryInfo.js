import React from "react"
import './css/LotteryInfo.css'
import {getDaysYearsPassed} from './util'

function LotteryInfo(props) {
    const numOfTrials = getDaysYearsPassed(props.countTrials)

    const mappedSpans = props.closestMatch.map( (val,index) => {
        if(props.closestMatch.length === 0) {
            return ""
        }
        if(val === props.numChosenByUser[index]) {
            return <span className={"matched"}>{val.toString() + " "}</span>
        }
        return <span className={"unmatched"}>{val.toString() + " "}</span>
    })
    return (
        <div className="lotteryInfo">
            <h2>{props.genNum}</h2>
            <h2>closest Match: {mappedSpans}</h2>
            <h2>Number Of Trials: {numOfTrials}</h2>
            {props.isGameWon && <h1>You won!! random = {props.genNum}</h1>}
        </div>
    )
}

export default LotteryInfo