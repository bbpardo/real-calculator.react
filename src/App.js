import { useRef, useState } from 'react';
import './App.css';
import NumberButtons from './components/buttons/NumbersButtons';

function App() {
  const [ firstNumber, setFirstNumber ] = useState("");
  const firstNumberRef = useRef("")
  const secondNumberRef = useRef("")
  const resultRef = useRef("")
  const resultTemp = useRef(0)
  const operator = useRef("")
  const temp = useRef(0);


  function pushNumber(event){
    setFirstNumber(firstNumber + event.target.value)
  }

  function changeOperationHandler (ev) {
    temp.current = 0;
    firstNumberRef.current =  parseFloat(firstNumber);
    operator.current = ev;
    setFirstNumber("");
    
  }
  function resultado(){
    if (temp.current === 0){
      temp.current = 1;
      secondNumberRef.current = parseFloat(firstNumber);
    }
    resultRef.current = operator.current(firstNumberRef.current, secondNumberRef.current);
    setFirstNumber(resultRef.current)
    firstNumberRef.current = parseFloat(resultRef.current)
    
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
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a+b)}>+</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a-b)}>-</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a*b)}>x</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a/b)}>÷</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>(a*b)/100)}>%</button>
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
