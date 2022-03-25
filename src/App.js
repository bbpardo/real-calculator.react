import logo from './logo.svg';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const firstNumberRef = useRef("")
  const secondNumberRef = useRef("")
  const resultRef = useRef("")
  const resultTemp = useRef("")
  const operator = useRef("")
  const temp = useRef(0);
  function changeOperationHandler (event) {
    temp.current = 0;
    firstNumberRef.current =  parseFloat(firstNumber);
    operator.current = event.target.value;
    setFirstNumber("");  
  }
  function resultado(){
    if( resultRef.current === NaN ){
      setFirstNumber("0")
    }
    if(operator.current==="+"){
      if (temp.current === 0){
        secondNumberRef.current = parseFloat(firstNumber);
        temp.current = 1;
      }
      resultRef.current = firstNumberRef.current + secondNumberRef.current;
      setFirstNumber(resultRef.current);
      firstNumberRef.current = parseFloat(resultRef.current)
    }
    if(operator.current==="-"){
      if (temp.current === 0){
        secondNumberRef.current = parseFloat(firstNumber);
        temp.current = 1;
      }
      resultRef.current = firstNumberRef.current - secondNumberRef.current;
      setFirstNumber(resultRef.current);
      firstNumberRef.current = parseFloat(resultRef.current)
    }
    if(operator.current==="*"){
      if (temp.current === 0){
        secondNumberRef.current = parseFloat(firstNumber);
        temp.current = 1;
      }
      resultRef.current = firstNumberRef.current * secondNumberRef.current;
      setFirstNumber(resultRef.current);
      firstNumberRef.current = parseFloat(resultRef.current)
    }
    if(operator.current==="/"){
      if (temp.current === 0){
        secondNumberRef.current = parseFloat(firstNumber);
        temp.current = 1;
      }
      resultRef.current = firstNumberRef.current / secondNumberRef.current;
      setFirstNumber(resultRef.current);
      firstNumberRef.current = parseFloat(resultRef.current)
    }
    
  }
  function clearNumberHandler () {
    temp.current = 0;
    setFirstNumber("");
  }
  function resultMemory(){
    resultTemp.current = parseFloat(resultRef.current);
  }
  function restoreResult(){
    setFirstNumber(resultTemp.current)
  }
  function pushNumber(event){
    setFirstNumber(firstNumber + event.target.value)
  }
  return (
    <main className='calculator textbox'>
      <input className='calculator textbox' placeholder="0" type="text" id="lname" value={firstNumber} name="lname" disabled></input>
      <div className=''>
        <button type="sumit" onClick= {changeOperationHandler}value="+">+</button>
        <button type="sumit" onClick= {changeOperationHandler}value="-">-</button>
        <button type="sumit" onClick= {changeOperationHandler}value="*">x</button>
        <button type="sumit" onClick= {changeOperationHandler}value="/">÷</button>
      </div>
      <div className=''>
        <button type="sumit" onClick= {clearNumberHandler}>C</button>
        <button type="sumit" onClick= {resultMemory}>M</button>
        <button type="sumit" onClick= {restoreResult}>MR</button>
      </div>
      <div className=''>
        <button type="sumit" onClick= {pushNumber} value="1">1</button>
        <button type="sumit" onClick= {pushNumber} value="2">2</button>
        <button type="sumit" onClick= {pushNumber} value="3">3</button>
        </div>
      <div className=''>
        <button type="sumit" onClick= {pushNumber} value="4">4</button>
        <button type="sumit" onClick= {pushNumber} value="5">5</button>
        <button type="sumit" onClick= {pushNumber} value="6">6</button>
      </div>
      <div className=''>
        <button type="sumit" onClick= {pushNumber} value="7">7</button>
        <button type="sumit" onClick= {pushNumber} value="8">8</button>
        <button type="sumit" onClick= {pushNumber} value="9">9</button>
        </div>
      <div className=''>
        <button type="sumit" onClick= {pushNumber} value="0">0</button>
        <button type="sumit" onClick= {resultado}>=</button>
      </div>
      
    </main>
  );
}

export default App;
