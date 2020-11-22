import './App.css';
import LotteryNumber from './LotteryNumber'
import React,{useEffect, useState} from "react"

function App() {
  const MEGA_BALL_INDEX = 5;
  const MEGA_BALL_MAX = 25;
  const NORMAL_BALL_MAX = 70;
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [num3,setNum3] = useState("");
  const [num4,setNum4] = useState("");
  const [num5,setNum5] = useState("");
  const [num6,setNum6] = useState("");
  const [generatednum,setGeneratedNum] = useState([]);
  const [myCount,setMyCount] = useState(0);

  const stateFuncs = [setNum1,setNum2,setNum3,setNum4,setNum5,setNum6];
  const nums = [num1,num2,num3,num4,num5,num6];
  //instead of creating 6 handle functions
  //this map takes the set function of a state
  //and returns a function that calls it with a param t
  const handleFuncs = stateFuncs.map((curr_func) => {
    return (t) => curr_func(t);
  })

  const mappedLotteryNumbers = nums.map((num,index) => {
    if(index === MEGA_BALL_INDEX) {
      return <LotteryNumber key={index} text={num} onNumChange={handleFuncs[index]} isMegaBall={true}/>
    }
    return <LotteryNumber key={index} text={num} onNumChange={handleFuncs[index]} isMegaBall={false}/>
  })

  useEffect(() => {
    if(myCount !== 10000) {
      setMyCount(prevCount => prevCount + 1);
      const rndNums = getSixRandomNums();
      const isWinning = rndNums.every((num,index) => num === nums[index])
      if(isWinning) {
        console.log('unbelievable you won!');
      }
      setGeneratedNum(rndNums)
    }
  },[myCount])

  async function handleClick() {
    setMyCount(1);
  }

  function getSixRandomNums() {
    let rndNums = new Array(6).fill(0)
    return rndNums.map((num,index) => {
      if(index === MEGA_BALL_INDEX) {
        return 1 + Math.floor(Math.random() * Math.floor(MEGA_BALL_MAX))
      }
      else {
        return 1 + Math.floor(Math.random() * Math.floor(NORMAL_BALL_MAX))
      }
      
    })
  }

  return (
    <div className="App">
        <h1> Lottery Sim</h1>
      <div className="NumContainer">
        {mappedLotteryNumbers}
      </div>
      <h4>Pick 5 numbers between 1-70 and the last between 1-25</h4>
      <button className="simButton" onClick={handleClick}>Start Sim</button> 
      <h2>Generated Number: {generatednum}</h2>
      <h2>Number Of Trials: {myCount}</h2>
    </div>
  );
}

export default App;
