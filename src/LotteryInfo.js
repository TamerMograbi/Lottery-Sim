import React from "react"
import './css/LotteryInfo.css'
import {getDaysYearsPassed} from './util'

function LotteryInfo(props) {
    const numOfTrials = getDaysYearsPassed(props.countTrials)
    return (
        <div className="lotteryInfo">
            <h2>{props.genNum}</h2>
            <h2>closest Match: {props.closestMatch} number of Matches: {props.numOfMatches}</h2>
            <h2>Number Of Trials: {numOfTrials}</h2>
            {props.isGameWon && <h1>You won!! random = {props.genNum}</h1>}
        </div>
    )
}

export default LotteryInfo