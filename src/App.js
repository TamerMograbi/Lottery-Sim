import './App.css';
import LotteryNumber from './LotteryNumber'
import React,{useState} from "react"

function App() {
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");
  const [num3,setNum3] = useState("");
  const [num4,setNum4] = useState("");
  const [num5,setNum5] = useState("");
  const [num6,setNum6] = useState("");

  const stateFuncs = [setNum1,setNum2,setNum3,setNum4,setNum5,setNum6];
  //instead of creating 6 handle functions
  //this map takes the set function of a state
  //and returns a function that calls it with a param t
  const handleFuncs = stateFuncs.map((curr_func) => {
    return (t) => curr_func(t);
  })

  return (
    <div className="App">
        <h1> Lottery Sim</h1>
      <div className="NumContainer">
        <LotteryNumber text={num1} onNumChange={handleFuncs[0]}/>
        <LotteryNumber text={num2} onNumChange={handleFuncs[1]}/>
        <LotteryNumber text={num3} onNumChange={handleFuncs[2]}/>
        <LotteryNumber text={num4} onNumChange={handleFuncs[3]}/>
        <LotteryNumber text={num5} onNumChange={handleFuncs[4]}/>
        <LotteryNumber text={num6} onNumChange={handleFuncs[5]}/>
      </div>
    </div>
  );
}

export default App;
