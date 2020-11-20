import './App.css';
import LotteryNumber from './LotteryNumber'
import React,{useState} from "react"

function App() {
  const [num1,setNum1] = useState("");
  const [num2,setNum2] = useState("");

  function handleTextChange(newText) {
    setNum1(newText)
  }
  function handleNum2Change(newText) {
    setNum2(newText)
  }
  return (
    <div className="App">
        <h1> hello world</h1>
        <h3>will start playing with lottery simulator here!</h3>
        <LotteryNumber text={num1} onNumChange={handleTextChange}/>
        <LotteryNumber text={num2} onNumChange={handleNum2Change}/>
    </div>
  );
}

export default App;
