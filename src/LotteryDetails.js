import React from "react"
import './css/LotteryDetails.css'

function LotteryDetails() {
    return (
        <div className="lotteryDetailsContainer">
            <h2>How To Use</h2>
            <p className="detailsPar">
            1. Pick 6 numbers, the first 5 between 1-70 and the
            last one between 1-25.<br/>
            2. Click the Start sim button.
            </p>
            <h2>About The Sim</h2>
            <p className="detailsPar">
            You will see a number that is changing rapidly, you
            won’t be able to read it. That is a number that keeps
            getting randomly generated and later checked to
            see if it's equal to the number that you chose. If it is
            the number that you chose then you've won, if you
            didn't win it will show you the closest match.</p>
            <p className="detailsPar">
            The closest match is the randomly generated
            number which matches most of the numbers that
            you've chosen up until now.
            Matches show up as green.
            </p>
            <p className="detailsPar">
            The simulation also indicates how much time has
            passed, assuming you are buying one ticket a day.
            It also shows how much money you would spend
            buying these tickets, assuming each ticket costs $2.
            </p>
            <h2>Odds Of Winning</h2>
            <p className="detailsPar">Your odds of winning are low, and I mean real low.
            Picking only six numbers seems not that hard but
            the first five can be from 1-70 and the last between
            1-25 so in order to get the odds of winning, you
            need to multiply 1/70 five times and multiply the
            result by 1/25. In the end it turns out that your odds
            of winning are about 1 to 42 billion!
            Therefore, don't be surprised when centuries pass
            and you still didn't win.<br/>
            Therefore, don't be surprised when centuries pass and you still didn't win.
            </p>
            <h2>Things more likely to happen than winning</h2>
            <h3>Death By Vending Machine</h3>
            <p className="detailsPar">Odds are 1 in 112 million to get crushed by a vending machine and die.</p>
            <h3>Getting Struck By Lightning</h3>
            <p className="detailsPar">Odds are 1 in a million.</p>
            <h3>Crushed By A Meteor</h3>
            <p className="detailsPar">Odds are 1 in 700,000.</p>
            <h3>Becoming an astronaut</h3>
            <p className="detailsPar">Odds are 1 in 12 million.</p>
        </div>
    )
}

export default LotteryDetails