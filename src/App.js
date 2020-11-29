import './css/App.css'
import LotteryNumber from './LotteryNumber'
import React,{useEffect, useState} from "react"
import {getSixRandomNums,getMatches} from './util'
import LotteryInfo from './LotteryInfo'
import HugeTitleBar from './HugeTitleBar'
import LotteryDetails from './LotteryDetails'
import Footer from './Footer'
import GithubIcon from './GithubIcon'

const MEGA_BALL_INDEX = 5
const MEGA_BALL_MAX = 25
const NORMAL_BALL_MAX = 70
const WINNNG_NUM_OF_MATCHES = 6

function App() {
  const [num1,setNum1] = useState("")
  const [num2,setNum2] = useState("")
  const [num3,setNum3] = useState("")
  const [num4,setNum4] = useState("")
  const [num5,setNum5] = useState("")
  const [num6,setNum6] = useState("")
  const [generatednum,setGeneratedNum] = useState([])
  const [myCount,setMyCount] = useState(0)
  const [isSimStarted,setIsSimStarted] = useState(false)
  const [closestMatch, setClosestMatch] = useState([])
  const [numberOfMatches, setNumberOfMatches] = useState(0)
  const [isGameWon,setIsGameWon] = useState(false)

  const stateFuncs = [setNum1,setNum2,setNum3,setNum4,setNum5,setNum6]
  const stringNums = [num1,num2,num3,num4,num5,num6]
  const nums = stringNums.map(num => parseInt(num))
  //instead of creating 6 handle functions
  //this map takes the set function of a state
  //and returns a function that calls it with a param t
  const handleFuncs = stateFuncs.map((curr_func) => {
    return (t) => {
      //don't allow text larger than 2 in slots
      if(t.length <= 2) {
        return curr_func(t)
      }
    }
  })

  const mappedLotteryNumbers = stringNums.map((num,index) => {
    let isMegaBall = false
    if(index === MEGA_BALL_INDEX) {
      isMegaBall = true
    }
    return <LotteryNumber key={index} text={num} onNumChange={handleFuncs[index]} isMegaBall={isMegaBall}/>
  })


  useEffect(() => {
    if(isSimStarted && !isGameWon) {
      setMyCount(prevCount => prevCount + 1)
      genRandAndCheckMatches()
    }
  },[myCount])

  async function handleClick() {
    setIsSimStarted(prevVal => !prevVal)
    if(!isSimStarted) {
      setMyCount(prev => prev + 1)
    }
    
  }

  function genRandAndCheckMatches() {
      const rndNums = getSixRandomNums()
      const matchesArray = getMatches(rndNums,nums)
      let currentNumOfMatches = 0
      matchesArray.forEach(val => {
        if(val) {
          currentNumOfMatches++
        }
      })
      if(numberOfMatches === WINNNG_NUM_OF_MATCHES) {
        setIsGameWon(true)
      }
      if(currentNumOfMatches > numberOfMatches) {
        setNumberOfMatches(currentNumOfMatches)
        setClosestMatch(rndNums)
      }
      setGeneratedNum(rndNums)
  }
  
  let buttonText = isSimStarted ? "Stop Sim" : "Start Sim"
  return (
    <div className="App">
        <HugeTitleBar/>
      <div className="NumContainer">
        {mappedLotteryNumbers}
      </div>
      <h4>Pick 5 numbers between 1-70 and the last between 1-25</h4>
      <button className="simButton" onClick={handleClick}>{buttonText}</button>
      <LotteryInfo 
        numChosenByUser={nums}
        genNum={generatednum.join(" ")} 
        closestMatch={closestMatch} 
        numOfMatches={numberOfMatches} 
        countTrials={myCount}
        isGameWon={isGameWon}
      />
      <LotteryDetails/>
      <GithubIcon/>
      <Footer/>
    </div>
  )
}

export {MEGA_BALL_MAX,NORMAL_BALL_MAX,MEGA_BALL_INDEX}
export default App
