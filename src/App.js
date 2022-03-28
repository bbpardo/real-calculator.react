import { useRef, useState } from 'react';
import './App.css';
import NumberButtons from './components/buttons/NumbersButtons';

function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const firstNumberRef = useRef("")
  const secondNumberRef = useRef("")
  const resultRef = useRef("")
  const resultTemp = useRef("")
  const operator = useRef("")
  const temp = useRef(0);


  function pushNumber(event){
    setFirstNumber(firstNumber + event.target.value)
  }

  function changeOperationHandler (event) {
    temp.current = 0;
    firstNumberRef.current =  parseFloat(firstNumber);
    operator.current = event.target.value;
    setFirstNumber("");  
  }


  function resultado(){
    if (temp.current === 0){
      temp.current = 1;
      secondNumberRef.current = parseFloat(firstNumber);
    }
    if(operator.current==="suma"){
        resultRef.current = firstNumberRef.current + secondNumberRef.current;
    }
    if(operator.current==="resta"){
      resultRef.current = firstNumberRef.current - secondNumberRef.current; 
    }
    if(operator.current==="multi"){
      resultRef.current = firstNumberRef.current * secondNumberRef.current; 
    }
    if(operator.current==="dividir"){
      resultRef.current = parseFloat(firstNumberRef.current / secondNumberRef.current);
    }
    else {
      setFirstNumber(resultRef.current);
      firstNumberRef.current = parseFloat(resultRef.current)
    }
  }

  function clearNumberHandler() {
    temp.current = 0;
    setFirstNumber("");
    resultRef.current = "";
  }
  function resultMemory(){
    resultTemp.current = parseFloat(resultRef.current);
  }

  function restoreResult() {
    setFirstNumber(resultTemp.current)
  }
  
  return (
    <main className='calculator'>
      <input className='textbox' placeholder="0" type="number" id="lname" value={firstNumber} name="lname" disabled></input>
      <div className='buttons'>
        <button className='number-button1' type="sumit" onClick= {changeOperationHandler} value="suma">+</button>
        <button className='number-button1' type="sumit" onClick= {changeOperationHandler} value="resta">-</button>
        <button className='number-button1' type="sumit" onClick= {changeOperationHandler} value="multi">x</button>
        <button className='number-button1' type="sumit" onClick= {changeOperationHandler} value="dividir">÷</button>
        <button className='number-button1' type="sumit" onClick= {resultMemory}>M</button>
        <button className='number-button1' type="sumit" onClick= {restoreResult}>MR</button>
        <button className='number-button1' type="sumit" onClick= {clearNumberHandler}>C</button>
      </div>
      <div className='buttons'>
        <NumberButtons push= {pushNumber}/>
        <button className='number-button' type="sumit" onClick= {resultado}>=</button>
      </div>
      
    </main>
  );
}

export default App;
