import './App.css';
import LotteryNumber from './LotteryNumber'
import React,{useState} from "react"

function App() {
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");

  const stateFuncs = [setNum1,setNum2];
  //instead of creating 6 handle functions
  //this map takes the set function of a state
  //and returns a function that calls it with a param t
  const handleFuncs = stateFuncs.map((curr_func) => {
    return (t) => curr_func(t);
  })

  return (
    <div className="App">
        <h1> hello world</h1>
        <h3>will start playing with lottery simulator here!</h3>
        <LotteryNumber text={num1} onNumChange={handleFuncs[0]}/>
        <LotteryNumber text={num2} onNumChange={handleFuncs[1]}/>
    </div>
  );
}

export default App;
