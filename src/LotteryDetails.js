import React from "react"
import './css/LotteryDetails.css'

function LotteryDetails() {
    return (
        <div className="lotteryDetailsContainer">
            <h2>About The Sim</h2>
            <p className="detailsPar">
                Pick 6 numbers, first 5 are between 1-70 and the last one is between 1-25 and then click Start sim button.
                you'll start seeing a number that is changing too quickly for you to be able to read it. that's a number
                that keeps getting randomly generated and later checked if it's equal to the number that you chose, if it is
                then you've won, if you didn't win it will still show you the closest match.</p>
                <p className="detailsPar">
                The closest match is the randomly generated
                number which matches most of the numbers that you've chosen up till now. (matches show up as green)
                the simulation also shows you how much time has passed,
                assuming you are buying one ticket a day. it also shows you how much money has been spent buying these tickets, assuming each
                ticket costs $2.
            </p>
            <h2>Odds Of Winning</h2>
            <p className="detailsPar">Your odds of winning are low, and I mean real low. picking only six numbers seems not that hard
            but the first five can be any from 1-70 and the last between 1-25
            So in order to get the odds of winning, you need to multiply 1/70 five time and multiply the result by 1/25
            In the end it turns out that your odds of winning are about 1 to 42 billion!</p>
            <p className="detailsPar">Therefore, don't be surprised when centuries pass and you still didn't win.</p>
            <h2>Things more likely to happen than winning</h2>
            <h3>Death By Vending Machine</h3>
            <p className="detailsPar">Odds are 1 in 112 million to get crushed by a vending machine and die.</p>
            <h3>Getting Struck By Lightning</h3>
            <p className="detailsPar">Odds are 1 in a million.</p>
            <h3>Death from a car crash</h3>
            <p className="detailsPar">Better walk instead of drive to get your ticket.</p>
            <h3>Becoming an astronaut</h3>
            <p className="detailsPar">Odds are 1 in 12 million.</p>
        </div>
    )
}

export default LotteryDetails