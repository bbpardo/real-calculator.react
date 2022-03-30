import { useRef, useState } from 'react';
import './App.css';
import NumberButtons from './components/buttons/NumbersButtons';

function App() {
  const [ inputNumber, setInputNumber ] = useState("");
  const firstNumberRef = useRef("")
  const secondNumberRef = useRef("")
  const resultRef = useRef("")
  const resultTemp = useRef(0)
  const operator = useRef("")
  const temp = useRef(0);

  function pushNumber(event){
    setInputNumber(inputNumber + event.target.value)
  }
/**
 * Una función para almacenar la operacion a realizar y el numero que haya escrito en el display
 * @param {function} ev 
 */
  function changeOperationHandler(ev) {
    temp.current = 0;
    firstNumberRef.current =  parseFloat(inputNumber);
    operator.current = ev;
    setInputNumber("");
    
  }

  /**
   * Una función para ejecutar la operacion y mostrar el resultado en el display.
   */
  function resultado() {
    if (temp.current === 0){
      temp.current = 1;
      secondNumberRef.current = parseFloat(inputNumber);
    }
    resultRef.current = operator.current(firstNumberRef.current, secondNumberRef.current);
    setInputNumber(resultRef.current)
    firstNumberRef.current = parseFloat(resultRef.current)
    
  }
  
  function clearNumberHandler() {
    setInputNumber("");
  }

  function clearAllNumberHandler() {
    temp.current = 0;
    setInputNumber("");
    resultRef.current = "";
  }

  function resultMemory(){
    resultTemp.current = parseFloat(resultRef.current);
  }

  function restoreResult() {
    setInputNumber(resultTemp.current)
  }
  
  return (
    <main className='calculator'>
      <input className='textbox' placeholder="0" type="number" id="lname" value={inputNumber} name="lname" disabled></input>
      <div className='buttons'>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a+b)}>+</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a-b)}>-</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a*b)}>x</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>a/b)}>÷</button>
        <button className='number-button1' type="sumit" onClick= {()=>changeOperationHandler((a,b)=>(a*b)/100)}>%</button>
        <button className='number-button1' type="sumit" onClick= {resultMemory}>M</button>
        <button className='number-button1' type="sumit" onClick= {restoreResult}>MR</button>
        <button className='number-button1' type="sumit" onClick= {clearNumberHandler}>C</button>
        <button className='number-button1' type="sumit" onClick= {clearAllNumberHandler}>CA</button>
      </div>
      <div className='buttons'>
        <NumberButtons push= {pushNumber}/>
        <button className='number-button' type="sumit" onClick= {resultado}>=</button>
      </div>
      
    </main>
  );
}

export default App;